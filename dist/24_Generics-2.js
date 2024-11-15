"use strict";
// Function Signature:
function getRandomKeyValuePair(obj) {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}
// Explaination :
// Function signature :
// 1) The function is named getRandomKeyValuePair.
// 2) It is a generic function denoted by <T>, meaning it can work with different types specified when calling the function. 
// Parameters : 
// 3) obj: { [key: string]: T }: The function takes an object (obj) with keys of type string and values of type T.
// 4) This is a common pattern in TypeScript to represent a dictionary-like object where keys are strings and values can be of any type (T).
// Function Body:
// 5) const keys = Object.keys(obj);: Gets an array of keys from the input object using Object.keys.
// 6) const randKey = keys[Math.floor(Math.random() * keys.length)];: Randomly selects a key from the array of keys using a random index.
// 7) return { key: randKey, value: obj[randKey] };: Returns an object with two properties — key (the randomly chosen key) and value (the corresponding value from the input object).
// Return Type:
// 8) { key: string; value: T }: The function returns an object with a fixed structure — a key property of type string and a value property of type T.
// Usage 
// String type
const strObj = { a: "apple", b: "banana", c: "cherry" };
const res11 = getRandomKeyValuePair(strObj);
console.log(res11);
// Number type
const numObj = { one: 1, two: 2, three: 3 };
const res12 = getRandomKeyValuePair(numObj);
console.log(res12);
// Inferring type
const inferredStringPair = getRandomKeyValuePair(strObj);
console.log(inferredStringPair);
const inferredNumberPair = getRandomKeyValuePair(numObj);
console.log(inferredNumberPair);
