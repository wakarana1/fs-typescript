import express from 'express';
import patientService from '../services/patientService.ts';
import parseNewPatient from '../utils.ts';

const router = express.Router();

router.get('/', (_req, res) => {
  const data = patientService.getNonSensitivePatients();
  res.send(data);
});

router.post('/', (req, res) => {
  try {
    const newPatient = parseNewPatient(req.body);
    const addedPatient = patientService.addPatient(newPatient);
    res.json(addedPatient);
  } catch(error: unknown) {
    res.status(400).send(error instanceof Error ? error.message : 'Unknown Error');
  }
});

export default router;