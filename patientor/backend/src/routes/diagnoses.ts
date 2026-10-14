import express from 'express';
import diaryService from '../services/diagonseService.ts';

const router = express.Router();

router.get('/', (_req, res) => {
  const data = diaryService.getDiagnoses();
  res.send(data);
});

router.post('/', (_req, res) => {
  res.send('Saving a diagnoses!');
});

export default router;