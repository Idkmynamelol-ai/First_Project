import { SampleQuestionTemplateSchema } from '../grade12/schema';
import { z } from 'zod';
import { MATH_QUESTION_BANK } from './mathQuestionBank';
import { PHYSICS_QUESTION_BANK } from './physicsQuestionBank';
import { CHEMISTRY_QUESTION_BANK } from './chemistryQuestionBank';
import { ENGLISH_QUESTION_BANK } from './englishQuestionBank';
import { STAGED_EXTRA_QUESTIONS } from './stagedExtraBank';

type SampleQuestionTemplate = z.infer<typeof SampleQuestionTemplateSchema>;

const mergeQuestionBanks = (
  base: Record<string, SampleQuestionTemplate[]>,
  extra: Record<string, SampleQuestionTemplate[]>
): Record<string, SampleQuestionTemplate[]> => {
  const result: Record<string, SampleQuestionTemplate[]> = {};
  const allKeys = new Set([...Object.keys(base), ...Object.keys(extra)]);
  for (const key of allKeys) {
    result[key] = [...(base[key] || []), ...(extra[key] || [])];
  }
  return result;
};

export const EXTENDED_QUESTION_BANK: Record<string, SampleQuestionTemplate[]> = mergeQuestionBanks(
  {
    ...MATH_QUESTION_BANK,
    ...PHYSICS_QUESTION_BANK,
    ...CHEMISTRY_QUESTION_BANK,
    ...ENGLISH_QUESTION_BANK,
  },
  STAGED_EXTRA_QUESTIONS
);

export {
  MATH_QUESTION_BANK,
  PHYSICS_QUESTION_BANK,
  CHEMISTRY_QUESTION_BANK,
  ENGLISH_QUESTION_BANK,
  STAGED_EXTRA_QUESTIONS,
};
