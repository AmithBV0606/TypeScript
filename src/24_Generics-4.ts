// Generics with multiple types

// Example 1 : Generic function to reverse the order of two values
function reversePair<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1];
}

// Usage 
const res20 = reversePair<string, number>("Amith", 500);
console.log(res20);

console.log("___________________________________________________________________________");

// Example 2 : Generic function to combine two values into an array

function combineArray<T, U>(array1: T, array2: U): [T, U] {
    return [array1, array2];
}

// Usage 
const combinedStringAndNumber = combineArray<string, number>("Hello", 42);
console.log(combinedStringAndNumber); // Outputs: ["Hello", 42]

const combinedBooleanAndArray = combineArray(true, [1, 2, 3]);
console.log(combinedBooleanAndArray); // Outputs: [true, [1, 2, 3]]