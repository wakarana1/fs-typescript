type Result = { 
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: 1 | 2 | 3,
  ratingDescription: string,
  target: number,
  average: number
}

type ExerciseInput = {
  exerciseHours: number[],
  target: number
}

const descriptions = {
  1: 'needs work',
  2: 'not bad but could be better',
  3: 'great job'
}

const calculateExercises = (exerciseHours: number[], target: number): Result => {
  const periodLength = exerciseHours.length
  const trainingDays = exerciseHours.filter(hours => hours > 0).length
  const average = exerciseHours.reduce((sum, hours) => sum + hours, 0) / periodLength
  const success = average >= target
  const ratio = average / target
  const rating = ratio >= 1 ? 3 : ratio >= 0.75 ? 2 : 1
  const ratingDescription = descriptions[rating]

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
const parseArguments = (args: string[]): ExerciseInput => {
  if (args.length < 4) throw new Error('Missing Arguments')
  
  const values = args.slice(2).map(Number)
  if(values.some(isNaN)) throw new Error('All arguments must be numbers')
  if(values.some(n => n < 0)) throw new Error('Values must not be negative')

  const [target, ...exerciseHours] = values
  if(target <= 0) throw new Error('Target must be higher than 0')

  return { target, exerciseHours }
}


try {
  const { target, exerciseHours } = parseArguments(process.argv)
  console.log(calculateExercises(exerciseHours, target))
} catch(error: unknown) {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
}