// Interface applied on functions

// Example 1 :
interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
console.log(add(10, 20));

const sub: MathOperation = (a, b) => a - b;
console.log(sub(30, 15));

// Example 2 :
interface Car {
  brand: string;
  model: string;
  year: number;
}

function displayCarInfo(car: Car): void {
  console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`);
}

displayCarInfo({ brand: "BMW", model: "G-series", year: 2020});