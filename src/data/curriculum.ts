import {
  SubjectId,
  SubjectMeta,
  CurriculumTopic,
  PracticeQuestion,
  FormulaEntry,
  ChatMessage,
  CognitiveLevel,
} from '../types/edu';
import {
  grade12Curriculum,
  grade12BySubject,
  type CurriculumTopic as Grade12CurriculumTopic,
} from '../../backend/data/curriculum/grade12';

export { grade12Curriculum, grade12BySubject, type Grade12CurriculumTopic };

export {
  auditTextbookCoverage,
  scanAndVerifyTextbookSync,
  OFFICIAL_GDPT2018_TEXTBOOK_CATALOG,
  type OfficialTextbookEntry,
  type TextbookAuditReport,
  type TextbookSeries,
} from '../../backend/data/curriculum/textbookRegistry';

export const DIFFICULTY_TIER_ORDER: Record<CognitiveLevel, number> = {
  'Nhận biết': 1,
  'Thông hiểu': 2,
  'Vận dụng': 3,
  'Vận dụng cao': 4,
};

export interface WikiSection {
  id: string;
  heading: string;
  subheadings: {
    title: string;
    bullets: string[];
  }[];
  callout?: {
    title: string;
    latex: string;
    description: string;
  };
}

export interface CompiledWikiArticle {
  topicId: string;
  breadcrumb: string;
  title: string;
  estimatedReadingMinutes: number;
  toc: { id: string; label: string }[];
  sections: WikiSection[];
  workedExample: Grade12CurriculumTopic['workedExample'];
  commonPitfalls: Grade12CurriculumTopic['commonPitfalls'];
}

export const SUBJECTS_META: Record<SubjectId, SubjectMeta> = {
  math: {
    id: 'math',
    name: 'Toán học',
    vnName: 'Toán học',
    accentHex: '#38bdf8',
    badgeBg: 'bg-sky-500/10',
    badgeText: 'text-sky-300',
    borderAccent: 'border-sky-500/30',
    glowBg: 'from-sky-500/10 to-transparent',
    mastery: 84,
    weeklyDelta: '+6.4%',
    streakDays: 14,
    activeTopic: 'Khảo sát hàm số, Nguyên hàm - Tích phân, Oxyz & Xác suất Bayes',
  },
  physics: {
    id: 'physics',
    name: 'Vật lý',
    vnName: 'Vật lý',
    accentHex: '#a78bfa',
    badgeBg: 'bg-violet-500/10',
    badgeText: 'text-violet-300',
    borderAccent: 'border-violet-500/30',
    glowBg: 'from-violet-500/10 to-transparent',
    mastery: 78,
    weeklyDelta: '+4.8%',
    streakDays: 11,
    activeTopic: 'Vật lí nhiệt, Khí lí tưởng, Từ trường & Vật lí hạt nhân',
  },
  chemistry: {
    id: 'chemistry',
    name: 'Hóa học',
    vnName: 'Hóa học',
    accentHex: '#34d399',
    badgeBg: 'bg-emerald-500/10',
    badgeText: 'text-emerald-300',
    borderAccent: 'border-emerald-500/30',
    glowBg: 'from-emerald-500/10 to-transparent',
    mastery: 81,
    weeklyDelta: '+5.2%',
    streakDays: 9,
    activeTopic: 'Ester - Lipid, Carbohydrate, Amine - Peptide & Pin điện hóa',
  },
  english: {
    id: 'english',
    name: 'Tiếng Anh',
    vnName: 'Tiếng Anh',
    accentHex: '#fbbf24',
    badgeBg: 'bg-amber-500/10',
    badgeText: 'text-amber-300',
    borderAccent: 'border-amber-500/30',
    glowBg: 'from-amber-500/10 to-transparent',
    mastery: 89,
    weeklyDelta: '+3.1%',
    streakDays: 19,
    activeTopic: 'So sánh kép, Thể sai khiến, Mệnh đề quan hệ & Đảo ngữ điều kiện',
  },
};

/**
 * Compiles any CurriculumTopic into a structured "Modern Wikipedia" long-form article
 * with 4 canonical H2 sections, H3 subtopics, inline TOC, and integrated formula callouts.
 */
export function compileTopicWikiArticle(
  topic: Grade12CurriculumTopic
): CompiledWikiArticle {
  const subjName = SUBJECTS_META[topic.subject].vnName;
  const breadcrumb = `${subjName} ${topic.grade}  /  ${topic.chapter}`;
  const firstRule = topic.keyFormulasAndRules[0];
  const secondRule = topic.keyFormulasAndRules[1] ?? firstRule;

  const isChem = topic.subject === 'chemistry';
  const sec1Title = isChem
    ? '1. Khái niệm & Cấu tạo phân tử'
    : '1. Khái niệm cốt lõi & Cơ sở lý thuyết';
  const sec2Title = isChem
    ? '2. Danh pháp IUPAC & Tên thông thường'
    : '2. Công thức trọng tâm & Quy tắc áp dụng';
  const sec3Title = isChem
    ? '3. Tính chất hóa học & Phản ứng thủy phân'
    : '3. Phân tích bản chất & Điều kiện áp dụng';
  const sec4Title = isChem
    ? '4. Phương pháp giải nhanh & Các dạng bài then chốt'
    : '4. Phương pháp giải & Các lỗi hay gặp';

  const sections: WikiSection[] = [
    {
      id: 'sec-1-concept',
      heading: sec1Title,
      subheadings: [
        {
          title: 'Mục tiêu kiến thức cần nắm',
          bullets: topic.learningObjectives,
        },
      ],
    },
    {
      id: 'sec-2-nomenclature',
      heading: sec2Title,
      subheadings: [
        {
          title: firstRule.name,
          bullets: [firstRule.description],
        },
      ],
      callout: {
        title: firstRule.name,
        latex: firstRule.latexOrRule,
        description: firstRule.description,
      },
    },
    {
      id: 'sec-3-properties',
      heading: sec3Title,
      subheadings: [
        {
          title: secondRule.name,
          bullets: [
            secondRule.description,
            topic.workedExample.logicReasoning,
          ],
        },
      ],
      callout:
        topic.keyFormulasAndRules.length > 1
          ? {
              title: secondRule.name,
              latex: secondRule.latexOrRule,
              description: secondRule.description,
            }
          : undefined,
    },
    {
      id: 'sec-4-conservation',
      heading: sec4Title,
      subheadings: topic.commonPitfalls.map((p, idx) => ({
        title: `Lỗi thường gặp #${idx + 1}: ${p.mistake}`,
        bullets: [
          `Cách hiểu đúng: ${p.correction}`,
          `Giải thích chi tiết: ${p.explanation}`,
        ],
      })),
    },
  ];

  return {
    topicId: topic.id,
    breadcrumb,
    title: topic.topicName,
    estimatedReadingMinutes: Math.max(
      4,
      topic.learningObjectives.length + topic.keyFormulasAndRules.length * 2
    ),
    toc: sections.map((s) => ({ id: s.id, label: s.heading })),
    sections,
    workedExample: topic.workedExample,
    commonPitfalls: topic.commonPitfalls,
  };
}

export const CURRICULUM_TOPICS: CurriculumTopic[] = grade12Curriculum.map(
  (topic) => ({
    id: topic.id,
    subject: topic.subject,
    grade: topic.grade,
    title: topic.topicName,
    vietnameseSub: topic.chapter,
    mastery: 85,
    questionsCount: topic.sampleQuestionTemplates.length,
    estimatedMinutes: 25,
    keyFormula: topic.keyFormulasAndRules[0]?.latexOrRule ?? '',
    summary: topic.learningObjectives[0] ?? '',
  })
);

export const FORMULA_VAULT: FormulaEntry[] = grade12Curriculum.flatMap(
  (topic) =>
    topic.keyFormulasAndRules.map((rule, idx) => ({
      id: `${topic.id}-f-${idx + 1}`,
      subject: topic.subject,
      grade: topic.grade,
      title: rule.name,
      category: topic.chapter,
      latex: rule.latexOrRule,
      variablesNote: rule.description,
    }))
);

function mapCognitiveToDifficulty(
  level: CognitiveLevel
): PracticeQuestion['difficulty'] {
  if (level === 'Nhận biết' || level === 'Thông hiểu') return 'Foundation';
  if (level === 'Vận dụng') return 'Advanced';
  return 'Olympiad / Exam';
}

function isLatexOption(opt: string): boolean {
  return (
    opt.includes('\\') ||
    opt.includes('_') ||
    opt.includes('^') ||
    opt.includes('=')
  );
}

/**
 * Compiles all practice questions sorted strictly by:
 * Level 1 (Subject) -> Level 2 (Topic) -> Level 3 (Difficulty Tier: Nhận biết -> Thông hiểu -> Vận dụng -> Vận dụng cao).
 */
export const PRACTICE_QUESTIONS: PracticeQuestion[] = grade12Curriculum.flatMap(
  (topic) => {
    const sortedTemplates = [...topic.sampleQuestionTemplates].sort(
      (a, b) =>
        DIFFICULTY_TIER_ORDER[a.cognitiveLevel] -
        DIFFICULTY_TIER_ORDER[b.cognitiveLevel]
    );

    return sortedTemplates.map((tpl, qIdx) => {
      const pitfall =
        topic.commonPitfalls[qIdx % topic.commonPitfalls.length] ??
        topic.commonPitfalls[0];
      const primaryRule = topic.keyFormulasAndRules[0];
      const rawOptions = tpl.options ?? [tpl.correctAnswer];
      const correctIdx = Math.max(
        0,
        rawOptions.findIndex((o) => o === tpl.correctAnswer)
      );

      const options = rawOptions.map((optStr, optIdx) => {
        const optId = `opt-${String.fromCharCode(97 + optIdx)}`;
        const isCorrect = optIdx === correctIdx;
        const useLatex = topic.subject !== 'english' && isLatexOption(optStr);

        return {
          id: optId,
          text: optStr,
          latex: useLatex ? optStr : undefined,
          diagnostic: isCorrect
            ? undefined
            : {
                errorType:
                  optIdx % 2 === 1
                    ? ('conceptual' as const)
                    : ('computational' as const),
                errorLabel: pitfall.mistake,
                socraticPrompt: `Hãy kiểm tra lại quy tắc trọng tâm của chuyên đề "${topic.topicName}": ${primaryRule.description}`,
                whyWrong: pitfall.explanation,
                correctiveHint: pitfall.correction,
              },
        };
      });

      return {
        id: `${topic.id}-q${qIdx + 1}`,
        subject: topic.subject,
        grade: topic.grade,
        chapter: topic.chapter,
        topic: topic.topicName,
        cognitiveLevel: tpl.cognitiveLevel,
        difficulty: mapCognitiveToDifficulty(tpl.cognitiveLevel),
        prompt: tpl.questionText,
        contextFormula: primaryRule.latexOrRule,
        options,
        correctOptionId: `opt-${String.fromCharCode(97 + correctIdx)}`,
        stepByStepSolution: [tpl.detailedDerivation],
        keyFormulaLatex: primaryRule.latexOrRule,
        sourceTopic: topic,
        reinforcement: {
          id: `${topic.id}-reinf-${qIdx + 1}`,
          prompt: `Câu hỏi củng cố (${topic.topicName}): Điểm mấu chốt nào cần nhớ để tránh sai sót trong dạng bài này?`,
          latexFormula: primaryRule.latexOrRule,
          options: [
            {
              id: 'r-a',
              text: `Quy tắc đúng: ${pitfall.correction}`,
            },
            {
              id: 'r-b',
              text: `Nhầm lẫn thường gặp: ${pitfall.mistake}`,
            },
          ],
          correctOptionId: 'r-a',
          explanation: pitfall.explanation,
        },
      };
    });
  }
);

export const INITIAL_TUTOR_MESSAGES: Record<SubjectId, ChatMessage[]> = {
  math: [],
  physics: [],
  chemistry: [],
  english: [],
};

export const QUICK_PROMPT_CHIPS: Record<SubjectId, string[]> = {
  math: [],
  physics: [],
  chemistry: [],
  english: [],
};
