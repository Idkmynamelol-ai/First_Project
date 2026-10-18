import { SampleQuestionTemplateSchema } from '../grade12/schema';
import { z } from 'zod';
import { MATH_QUESTION_BANK } from './mathQuestionBank';
import { PHYSICS_QUESTION_BANK } from './physicsQuestionBank';
import { CHEMISTRY_QUESTION_BANK } from './chemistryQuestionBank';
import { ENGLISH_QUESTION_BANK } from './englishQuestionBank';

type SampleQuestionTemplate = z.infer<typeof SampleQuestionTemplateSchema>;

export const EXTENDED_QUESTION_BANK: Record<string, SampleQuestionTemplate[]> = {
  ...MATH_QUESTION_BANK,
  ...PHYSICS_QUESTION_BANK,
  ...CHEMISTRY_QUESTION_BANK,
  ...ENGLISH_QUESTION_BANK,
};

export {
  MATH_QUESTION_BANK,
  PHYSICS_QUESTION_BANK,
  CHEMISTRY_QUESTION_BANK,
  ENGLISH_QUESTION_BANK,
};
