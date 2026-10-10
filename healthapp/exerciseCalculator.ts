type Result = { 
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: 1 | 2 | 3,
  ratingDescription: string,
  target: number,
  average: number
}

const calculateExercises = (exerciseHours: number[], target: number): Result => {
  const periodLength = exerciseHours.length;
  const trainingDays = exerciseHours.filter(hours => hours > 0).length;
  const success = exerciseHours.every(hours => hours >= target);
  const average = exerciseHours.reduce((sum, hours) => sum + hours, 0) / periodLength;
  const ratio = average / target;
  const rating = ratio >= 1 ? 3 : ratio >= 0.75 ? 2 : 1;
  const ratingDescription = success ? 'great job' : 'not too bad but could be better';

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))