import { z } from 'zod';
import { NewPatientSchema } from './utils.ts';

export const Gender = {
  Male: 'male',
  Female: 'female',
  Other: 'other'
} as const;

export type Gender = typeof Gender[keyof typeof Gender];

export interface Diagnoses {
  code: string;
  name: string;
  latin?: string;
}

export type NewPatient = z.infer<typeof NewPatientSchema>;

export interface Patient extends NewPatient {
  id: string;
}

export type NonSensitivePatient = Omit<Patient, 'ssn'>;
