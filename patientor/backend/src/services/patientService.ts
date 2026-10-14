import patientData from '../../data/patients.ts';
import type { NonSensitivePatient } from '../types.ts';

const getPatients = (): NonSensitivePatient[] => {
  return patientData;
};

const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};



const addPatient = () => {
  return null;
};

export default {
  getPatients,
  getNonSensitivePatients,
  addPatient
};