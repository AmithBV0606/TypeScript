"use strict";
// Generics with multiple types
// Example 1 : Generic function to reverse the order of two values
function reversePair(value1, value2) {
    return [value2, value1];
}
// Usage 
const res20 = reversePair("Amith", 500);
console.log(res20);
console.log("___________________________________________________________________________");
// Example 2 : Generic function to combine two values into an array
function combineArray(array1, array2) {
    return [array1, array2];
}
// Usage 
const combinedStringAndNumber = combineArray("Hello", 42);
console.log(combinedStringAndNumber); // Outputs: ["Hello", 42]
const combinedBooleanAndArray = combineArray(true, [1, 2, 3]);
console.log(combinedBooleanAndArray); // Outputs: [true, [1, 2, 3]]
