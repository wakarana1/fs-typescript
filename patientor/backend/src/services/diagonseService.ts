import diagnoseData from '../../data/diagnoses.ts';
import type { Diagnoses } from '../types.ts';

const diagnoses: Diagnoses[] = diagnoseData;

const getDiagnoses = (): Diagnoses[] => {
  return diagnoses;
};

const addDiagnoses = () => {
  return null;
};

export default {
  getDiagnoses,
  addDiagnoses
};