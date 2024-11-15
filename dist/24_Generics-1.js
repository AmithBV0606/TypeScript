"use strict";
// Without Generics
function printNumber(item, defaultValue) {
    return [item, defaultValue];
}
function printString(item, defaultValue) {
    return [item, defaultValue];
}
function printBoolean(item, defaultValue) {
    return [item, defaultValue];
}
// Example usage
const num = printNumber(42, 0);
console.log(num); // Outputs: [42, 0]
const str = printString("hello", "world");
console.log(str); // Outputs: ['hello', 'world']
const bool = printBoolean(true, false);
console.log(bool); // Outputs: [true, false]
console.log("_________________________________________________________________________________________");
// Using any type
function printSomething(item, defaultValue) {
    return [item, defaultValue];
}
const something = printSomething("hello", 1);
console.log(something);
console.log("_________________________________________________________________________________________");
// Using Generics
function printAnything(item, defaultValue) {
    return [item, defaultValue];
}
// String type
const anything1 = printAnything("Hello", "Amith");
console.log(anything1);
// Number type
const anything2 = printAnything(10, 20);
console.log(anything2);
// Inference : Boolean type
const anything3 = printAnything(true, true);
console.log(anything3);
const prod1 = printAnything({ item: "Laptop", defaultValue: 30000 }, { item: "Mobile", defaultValue: 20000 });
console.log(prod1);
