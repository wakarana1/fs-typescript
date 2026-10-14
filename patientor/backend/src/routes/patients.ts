import express from 'express';
import patientService from '../services/patientService.ts';

const router = express.Router();

router.get('/', (_req, res) => {
  const data = patientService.getNonSensitivePatients();
  res.send(data);
});

router.post('/', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { name, dateOfBirth, gender, ssn, occupation } = req.body;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const newPatient = patientService.addPatient({ name, dateOfBirth, gender, ssn, occupation });
  res.json(newPatient);
});

export default router;