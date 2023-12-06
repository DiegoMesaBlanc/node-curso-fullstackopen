interface ResultCalculate {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}


const calculateExercises = (arrayDays: number[]): ResultCalculate => {
  return {
    periodLength: arrayDays.length,
    trainingDays: 5,
    success: false,
    rating: 2,
    ratingDescription: 'not too bad but could be better',
    target: 2,
    average: (arrayDays.reduce((curr, sum) => curr + sum, 0) / arrayDays.length)
  }
}



console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1]));
