import diagnoseData from '../../data/diagnoses.ts';
import type { Diagnoses } from '../types.ts';

const getDiagnoses = (): Diagnoses[] => {
  return diagnoseData;
};

const addDiagnoses = () => {
  return null;
};

export default {
  getDiagnoses,
  addDiagnoses
};