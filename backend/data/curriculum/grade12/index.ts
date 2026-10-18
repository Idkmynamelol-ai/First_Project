export {
  type CurriculumTopic,
  type WorkedExample,
  CurriculumTopicSchema,
  WorkedExampleSchema,
  CognitiveLevelSchema,
  KeyFormulaOrRuleSchema,
  CommonPitfallSchema,
  SampleQuestionTemplateSchema,
} from './schema';

export { math12Topics } from './math12';
export { math10And11Topics } from './math10_11';
export { physics12Topics } from './physics12';
export { chemistry12Topics } from './chemistry12';
export { english12Topics } from './english12';
export {
  physics10And11Topics,
  chemistry10And11Topics,
  english10And11Topics,
} from './stem10_11';

import { math12Topics } from './math12';
import { math10And11Topics } from './math10_11';
import { physics12Topics } from './physics12';
import { chemistry12Topics } from './chemistry12';
import { english12Topics } from './english12';
import {
  physics10And11Topics,
  chemistry10And11Topics,
  english10And11Topics,
} from './stem10_11';
import { CurriculumTopic } from './schema';
import { EXTENDED_QUESTION_BANK } from '../questionBank';

const attachQuestionBank = (topic: CurriculumTopic): CurriculumTopic => {
  const extraTemplates = EXTENDED_QUESTION_BANK[topic.id] || [];
  return {
    ...topic,
    sampleQuestionTemplates: [
      ...topic.sampleQuestionTemplates,
      ...extraTemplates,
    ],
  };
};

const rawCurriculum: CurriculumTopic[] = [
  ...math12Topics,
  ...math10And11Topics,
  ...physics12Topics,
  ...physics10And11Topics,
  ...chemistry12Topics,
  ...chemistry10And11Topics,
  ...english12Topics,
  ...english10And11Topics,
];

export const grade12Curriculum: CurriculumTopic[] = rawCurriculum.map(attachQuestionBank);

export const grade12BySubject: Record<
  CurriculumTopic['subject'],
  CurriculumTopic[]
> = {
  math: [...math12Topics, ...math10And11Topics].map(attachQuestionBank),
  physics: [...physics12Topics, ...physics10And11Topics].map(attachQuestionBank),
  chemistry: [...chemistry12Topics, ...chemistry10And11Topics].map(attachQuestionBank),
  english: [...english12Topics, ...english10And11Topics].map(attachQuestionBank),
};
