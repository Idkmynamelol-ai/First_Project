import {
  DailySubject,
  createSubmissionToken,
  getCurrentDateICT,
  getDeterministicQuestionIndex,
  isValidDateString,
} from './prng';
import { DAILY_BANK_BY_SUBJECT, DailyProblem } from './questionBank';

export type SanitizedDailyProblem = Omit<
  DailyProblem,
  'correctAnswer' | 'derivationMarkdown' | 'subQuestions'
> & {
  subQuestions?: { id: string; statement: string }[];
  submissionToken: string;
  badges: [string, string, string];
  seedHex: string;
};

export interface DailyChallengeResponse {
  date: string;
  timezone: 'Asia/Ho_Chi_Minh';
  problems: Record<DailySubject, SanitizedDailyProblem>;
  problemList: SanitizedDailyProblem[];
}

export interface VerifyDailyRequest {
  date?: string;
  subject: DailySubject;
  problemId: string;
  userSelection: string | boolean[] | number;
  currentStreak?: number;
}

export interface VerifyDailyResponse {
  isCorrect: boolean;
  verdict: 'ACCEPTED' | 'WRONG_ANSWER';
  correctAnswer: string | boolean[] | number;
  derivationMarkdown: string;
  commonTrapWarning: string;
  nextStreak: number;
}

const SUBJECT_VN_LABEL: Record<DailySubject, string> = {
  math: 'Toán 12',
  physics: 'Vật Lí 12',
  chemistry: 'Hóa Học 12',
  english: 'Tiếng Anh 12',
};

const ORDERED_SUBJECTS: DailySubject[] = [
  'math',
  'physics',
  'chemistry',
  'english',
];

/**
 * Resolves and validates a target date string (YYYY-MM-DD), defaulting to
 * the current date in Asia/Ho_Chi_Minh (UTC+7).
 */
export function resolveTargetDate(queryDate?: string): string {
  if (queryDate && isValidDateString(queryDate.trim())) {
    return queryDate.trim();
  }
  return getCurrentDateICT();
}

/**
 * Strips `correctAnswer`, `derivationMarkdown`, and `subQuestions[].isCorrect`
 * so answers cannot be inspected in browser DevTools prior to submission.
 */
export function sanitizeDailyProblem(
  problem: DailyProblem,
  dateStr: string,
  seed: number
): SanitizedDailyProblem {
  const {
    correctAnswer: _omittedAnswer,
    derivationMarkdown: _omittedDerivation,
    subQuestions,
    ...publicFields
  } = problem;
  void _omittedAnswer;
  void _omittedDerivation;

  const sanitizedSubQuestions = subQuestions?.map(({ id, statement }) => ({
    id,
    statement,
  }));

  const badges: [string, string, string] = [
    '[GDPT 2018]',
    `[${SUBJECT_VN_LABEL[problem.subject]}]`,
    `[${problem.difficultyTag}]`,
  ];

  return {
    ...publicFields,
    ...(sanitizedSubQuestions ? { subQuestions: sanitizedSubQuestions } : {}),
    submissionToken: createSubmissionToken(
      dateStr,
      problem.subject,
      problem.id
    ),
    badges,
    seedHex: `0x${seed.toString(16).toUpperCase().padStart(8, '0')}`,
  };
}

/**
 * Deterministic selector for the 4 daily problems for a given YYYY-MM-DD date.
 */
export function getDailyProblemsForDate(
  queryDate?: string
): DailyChallengeResponse {
  const date = resolveTargetDate(queryDate);
  const problemsRecord = {} as Record<DailySubject, SanitizedDailyProblem>;
  const problemList: SanitizedDailyProblem[] = [];

  for (const subject of ORDERED_SUBJECTS) {
    const bank = DAILY_BANK_BY_SUBJECT[subject];
    const { seed, index } = getDeterministicQuestionIndex(
      date,
      subject,
      bank.length
    );
    const chosen = bank[index];
    const sanitized = sanitizeDailyProblem(chosen, date, seed);
    problemsRecord[subject] = sanitized;
    problemList.push(sanitized);
  }

  return {
    date,
    timezone: 'Asia/Ho_Chi_Minh',
    problems: problemsRecord,
    problemList,
  };
}

/**
 * Deterministic verification of a user's answer for a daily problem.
 */
export function verifyDailySubmission(
  req: VerifyDailyRequest
): VerifyDailyResponse {
  const date = resolveTargetDate(req.date);
  const bank = DAILY_BANK_BY_SUBJECT[req.subject];
  if (!bank || bank.length === 0) {
    throw new Error(`Invalid subject: ${String(req.subject)}`);
  }

  const { index } = getDeterministicQuestionIndex(
    date,
    req.subject,
    bank.length
  );
  const scheduledProblem = bank[index];
  const targetProblem =
    bank.find((p) => p.id === req.problemId) ?? scheduledProblem;

  let isCorrect = false;
  const expected = targetProblem.correctAnswer;
  const given = req.userSelection;

  if (targetProblem.type === 'multiple_choice') {
    isCorrect =
      String(given).trim().toUpperCase() ===
      String(expected).trim().toUpperCase();
  } else if (targetProblem.type === 'true_false_four_part') {
    if (Array.isArray(expected) && Array.isArray(given)) {
      isCorrect =
        expected.length === given.length &&
        expected.every((val, idx) => Boolean(given[idx]) === val);
    }
  } else if (targetProblem.type === 'short_answer') {
    const numExpected = Number(expected);
    const numGiven = Number(String(given).trim().replace(',', '.'));
    isCorrect =
      !Number.isNaN(numGiven) && Math.abs(numExpected - numGiven) < 1e-2;
  }

  const baseStreak = typeof req.currentStreak === 'number' ? req.currentStreak : 5;
  const nextStreak = isCorrect ? baseStreak + 1 : 0;

  return {
    isCorrect,
    verdict: isCorrect ? 'ACCEPTED' : 'WRONG_ANSWER',
    correctAnswer: targetProblem.correctAnswer,
    derivationMarkdown: targetProblem.derivationMarkdown,
    commonTrapWarning: targetProblem.commonTrapWarning,
    nextStreak,
  };
}
