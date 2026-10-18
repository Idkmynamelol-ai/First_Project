import { CurriculumTopic as Grade12Topic } from '../../backend/data/curriculum/grade12';

export type SubjectId = 'math' | 'physics' | 'chemistry' | 'english';

export type GradeLevel = 10 | 11 | 12;

export type NavTab = 'dashboard' | 'subjects' | 'practice' | 'tutor' | 'analytics';

export type DiagnosticErrorType = 'conceptual' | 'computational' | 'unit_mismatch';

export type CognitiveLevel =
  | 'Nhận biết'
  | 'Thông hiểu'
  | 'Vận dụng'
  | 'Vận dụng cao';

export interface OptionDiagnostic {
  errorType: DiagnosticErrorType;
  errorLabel: string;
  socraticPrompt: string;
  whyWrong: string;
  correctiveHint: string;
}

export interface ReinforcementQuestion {
  id: string;
  prompt: string;
  latexFormula?: string;
  options: {
    id: string;
    text: string;
    latex?: string;
  }[];
  correctOptionId: string;
  explanation: string;
}

export interface PracticeQuestion {
  id: string;
  subject: SubjectId;
  grade: GradeLevel;
  chapter?: string;
  topic: string;
  cognitiveLevel: CognitiveLevel;
  difficulty: 'Foundation' | 'Olympiad / Exam' | 'Advanced';
  prompt: string;
  contextFormula?: string;
  diagramType?:
    | 'projectile'
    | 'derivative_tangent'
    | 'titration_curve'
    | 'conditional_timeline';
  options: {
    id: string;
    text: string;
    latex?: string;
    diagnostic?: OptionDiagnostic;
  }[];
  correctOptionId: string;
  stepByStepSolution: string[];
  keyFormulaLatex: string;
  sourceTopic?: Grade12Topic;
  reinforcement: ReinforcementQuestion;
}

export interface FormulaEntry {
  id: string;
  subject: SubjectId;
  grade: GradeLevel;
  title: string;
  category: string;
  latex: string;
  variablesNote: string;
}

export interface CurriculumTopic {
  id: string;
  subject: SubjectId;
  grade: GradeLevel;
  title: string;
  vietnameseSub: string;
  mastery: number;
  questionsCount: number;
  estimatedMinutes: number;
  keyFormula: string;
  summary: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  latexBlock?: string;
  socraticStep?: string;
  timestamp: string;
}

export interface SubjectMeta {
  id: SubjectId;
  name: string;
  vnName: string;
  accentHex: string;
  badgeBg: string;
  badgeText: string;
  borderAccent: string;
  glowBg: string;
  mastery: number;
  weeklyDelta: string;
  streakDays: number;
  activeTopic: string;
}
