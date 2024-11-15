"use strict";
// Interface applied on functions
const add = (a, b) => a + b;
console.log(add(10, 20));
const sub = (a, b) => a - b;
console.log(sub(30, 15));
function displayCarInfo(car) {
    console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`);
}
displayCarInfo({ brand: "BMW", model: "G-series", year: 2020 });
