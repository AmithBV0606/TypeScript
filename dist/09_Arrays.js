"use strict";
// Arrays in TypeScript
// Way 1 : Using the square bracket notation [] to indicate an array of a specific type :
const marks = [85, 90, 95, 100];
// marks = [90, 'Amith', true] // This will throw an error
console.log(marks);
// Declaring an empty array and then pushing elements to it.
// Example 1 : 
const items = [];
items.push("Phone");
items.push("Laptop");
items.push("Dongle");
// items.push(32); // Error
console.log(items);
// Example 2 : 
const numList = [];
numList.push(10);
numList.push(20);
numList.push(30);
// numList.push("Hello"); // Error
console.log(numList);
// ____________________________________________________
// Way 2 : Using the generic Array notation to indicate an array of a specific type:
const names = ["Amith", "Varun", "Sidvin"];
console.log(names);
