function calculateBmi(height: number, weight: number): string {
  const bmi = weight / ((height / 100) ** 2);

  switch (true) {
    case bmi < 18.5:
      return "Underweight";
    case bmi >= 18.5 && bmi < 25:
      return "Normal range";
    case bmi >= 25 && bmi < 30:
      return "Overweight";
    case bmi >= 30:
      return "Obesity"; 
    default:
      throw new Error("Invalid arguments");
  }
}

console.log(calculateBmi(180, 74))
