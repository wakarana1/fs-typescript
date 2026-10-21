import { Gender } from './types.ts';
import { z } from 'zod';

export const NewPatientSchema = z.object({
  name: z.string().min(1),
  ssn: z.string().min(1),
  dateOfBirth: z.iso.date(),
  gender: z.enum(Gender),
  occupation: z.string().min(1),
});

const parseNewPatient = (object: unknown) => {
  return NewPatientSchema.parse(object);
};

export default parseNewPatient;
