import { Gender } from './types.ts';
import type { NewPatient } from './types.ts';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isGender = (gender: string): gender is Gender => {
  return (Object.values(Gender) as string[]).includes(gender);
};

const parseName = (name: unknown): string => {
  if(!name || !isString(name)) {
    throw new Error('Incorrect or missing name');
  }
  return name;
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date)) {
      throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

const parseSsn = (ssn: unknown): string => {
  if(!ssn || !isString(ssn)) {
    throw new Error('Incorrect or missing ssn ' + ssn);
  }
  return ssn;
};

const parseGender = (gender: unknown): Gender => {
  if(!isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};

const parseOccupation = (occupation: unknown): string => {
  if(!occupation || !isString(occupation)) {
    throw new Error('Incorrect or missing occupation');
  }
  return occupation;
};

const parseNewPatient = (object: unknown): NewPatient => {
  if ( !object || typeof object !== 'object' ) {
    throw new Error('Incorrect or missing data');
  }

  if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object  && 'occupation' in object)  {
    const newPatientEntry: NewPatient = {
      name: parseName(object.name),
      ssn: parseSsn(object.ssn),
      dateOfBirth: parseDate(object.dateOfBirth),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
    };
    return newPatientEntry;
  }
  throw new Error('Missig parameters');
};

export default parseNewPatient;