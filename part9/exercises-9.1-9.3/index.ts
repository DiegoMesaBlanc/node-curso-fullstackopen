import express from 'express';
import bmi from './bmiCalculator'

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello fullstack')
});

app.get('/bmi', (_req, res) => {
  const { height, weight }: any = _req.query
  const result: any = bmi(height, weight)

  res.send({
    weight: weight,
    height: height,
    bmi: result
  })
});

const PORT = 3001;


app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
})