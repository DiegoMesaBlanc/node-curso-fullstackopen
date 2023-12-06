interface ResultBMI {
  weight: number;
  height: number
  bmi: string
}


const calculateBmi = (estatura: number, peso: number): ResultBMI => {
  const result = (peso) / (estatura * estatura);
  return {
    weight: peso,
    height: estatura,
    bmi: result > 0.0025 ? 'Bad (healthy)' : 'Normal (healthy)'
  }
}


export default calculateBmi;