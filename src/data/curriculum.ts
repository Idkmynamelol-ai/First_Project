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

export const SUBJECTS_META: Record<SubjectId, SubjectMeta> = {
  math: {
    id: 'math',
    name: 'Toán học',
    vnName: 'Toán học',
    accentHex: '#FFFFFF',
    badgeBg: 'bg-sky-500/15',
    badgeText: 'text-[#FFFFFF]',
    borderAccent: 'border-sky-400/35',
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
    accentHex: '#E5E5E5',
    badgeBg: 'bg-violet-500/15',
    badgeText: 'text-[#E5E5E5]',
    borderAccent: 'border-violet-400/35',
    glowBg: 'from-indigo-500/10 to-transparent',
    mastery: 78,
    weeklyDelta: '+4.8%',
    streakDays: 11,
    activeTopic: 'Vật lí nhiệt, Khí lí tưởng, Từ trường & Vật lí hạt nhân',
  },
  chemistry: {
    id: 'chemistry',
    name: 'Hóa học',
    vnName: 'Hóa học',
    accentHex: '#BDBDBD',
    badgeBg: 'bg-emerald-500/15',
    badgeText: 'text-[#BDBDBD]',
    borderAccent: 'border-emerald-400/35',
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
    accentHex: '#A3A3A3',
    badgeBg: 'bg-amber-500/15',
    badgeText: 'text-[#A3A3A3]',
    borderAccent: 'border-amber-400/35',
    glowBg: 'from-amber-500/10 to-transparent',
    mastery: 89,
    weeklyDelta: '+3.1%',
    streakDays: 19,
    activeTopic: 'So sánh kép, Thể sai khiến, Mệnh đề quan hệ & Đảo ngữ điều kiện',
  },
};

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

export const PRACTICE_QUESTIONS: PracticeQuestion[] = grade12Curriculum.flatMap(
  (topic) =>
    topic.sampleQuestionTemplates.map((tpl, qIdx) => {
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
          prompt: `Củng cố nhanh (${topic.topicName}): Sai lầm nào cần tránh nhất trong dạng toán này?`,
          latexFormula: primaryRule.latexOrRule,
          options: [
            {
              id: 'r-a',
              text: `Khắc phục đúng: ${pitfall.correction}`,
            },
            {
              id: 'r-b',
              text: `Mắc bẫy phổ biến: ${pitfall.mistake}`,
            },
          ],
          correctOptionId: 'r-a',
          explanation: pitfall.explanation,
        },
      };
    })
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
