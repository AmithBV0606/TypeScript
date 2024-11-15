"use strict";
// Generic function to filter an array based on a condition
function filterArray(array, condition) {
    return array.filter((item) => condition(item));
}
// Usage
// Number Type :
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = filterArray(numberArray, (num) => num % 2 === 0);
console.log(evenNumber);
// String Type :
const stringArray = ["apple", "banana", "Watermellon", "orange", "chery"];
const shortWord = filterArray(stringArray, (word) => word.length < 6);
console.log(shortWord);
const fruitArray = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "yellow" },
    { name: "Watermellon", color: "green" },
    { name: "Chery", color: "Red" }
];
const redFruit = filterArray(fruitArray, (fruit) => fruit.color === "Red");
console.log(redFruit);
