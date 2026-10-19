import { SampleQuestionTemplateSchema } from '../grade12/schema';
import { z } from 'zod';

type SampleQuestionTemplate = z.infer<typeof SampleQuestionTemplateSchema>;

/**
 * STAGED EXTRA QUESTIONS
 * Questions staged here will be merged automatically into EXTENDED_QUESTION_BANK
 * during the scheduled checkpoint cycle.
 */
export const STAGED_EXTRA_QUESTIONS: Record<string, SampleQuestionTemplate[]> = {};
