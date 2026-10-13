import express from 'express';
import { calculateBmi } from './bmiCalculator.ts';
import { calculateExercises } from './exerciseCalculator.ts';
const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!height ||!weight || isNaN(height) || isNaN(weight)) {
    return res.status(400).json({error: 'malformatted parameters'});
  }

  return res.json({
    weight: weight,
    height: height,
    bmi: calculateBmi(height, weight)
  });
  
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { target, daily_exercises } = req.body;

  if(target === undefined || daily_exercises === undefined) {
    return res.status(400).json({ error: 'parameters missing' });
  }
  
  if(!Array.isArray(daily_exercises) || daily_exercises.length === 0) {
    return res.status(400).json({ error: 'malformatted parameters' });
  }

  const targetNum = Number(target);
  const exerciseHours = daily_exercises.map(Number);


  if(isNaN(targetNum) || targetNum <= 0 || exerciseHours.some(isNaN)) {
    return res.status(400).json({error: 'malformatted parameters'});
  }

  return res.json(calculateExercises(exerciseHours, targetNum));

});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});