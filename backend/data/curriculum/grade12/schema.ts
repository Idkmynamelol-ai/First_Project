import { z } from 'zod';

export const CognitiveLevelSchema = z.enum([
  'Nhận biết',
  'Thông hiểu',
  'Vận dụng',
  'Vận dụng cao',
]);

export const GradeLevelSchema = z.union([
  z.literal(10),
  z.literal(11),
  z.literal(12),
]);

export const KeyFormulaOrRuleSchema = z.object({
  name: z.string().min(1),
  latexOrRule: z.string().min(1),
  description: z.string().min(1),
});

export const CommonPitfallSchema = z.object({
  mistake: z.string().min(1),
  correction: z.string().min(1),
  explanation: z.string().min(1),
});

export const WorkedExampleSchema = z.object({
  problemStatement: z.string().min(1),
  logicReasoning: z.string().min(1),
  steps: z.array(z.string().min(1)).min(2),
  finalConclusion: z.string().min(1),
});

export const SampleQuestionTemplateSchema = z.object({
  questionText: z.string().min(1),
  options: z.array(z.string()).optional(),
  correctAnswer: z.string().min(1),
  detailedDerivation: z.string().min(1),
  cognitiveLevel: CognitiveLevelSchema,
});

export const CurriculumTopicSchema = z.object({
  id: z.string().min(1),
  subject: z.enum(['math', 'physics', 'chemistry', 'english']),
  grade: GradeLevelSchema,
  chapter: z.string().min(1),
  topicName: z.string().min(1),
  learningObjectives: z.array(z.string().min(1)).min(1),
  keyFormulasAndRules: z.array(KeyFormulaOrRuleSchema).min(1),
  workedExample: WorkedExampleSchema,
  commonPitfalls: z.array(CommonPitfallSchema).min(1),
  sampleQuestionTemplates: z.array(SampleQuestionTemplateSchema).min(1),
});

export interface WorkedExample {
  problemStatement: string;
  logicReasoning: string;
  steps: string[];
  finalConclusion: string;
}

export interface CurriculumTopic {
  id: string;
  subject: 'math' | 'physics' | 'chemistry' | 'english';
  grade: 10 | 11 | 12;
  chapter: string;
  topicName: string;
  learningObjectives: string[];
  keyFormulasAndRules: {
    name: string;
    latexOrRule: string;
    description: string;
  }[];
  workedExample: WorkedExample;
  commonPitfalls: {
    mistake: string;
    correction: string;
    explanation: string;
  }[];
  sampleQuestionTemplates: {
    questionText: string;
    options?: string[];
    correctAnswer: string;
    detailedDerivation: string;
    cognitiveLevel: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';
  }[];
}
