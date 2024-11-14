// Tuples in TypeScript

let myTuples: [string, number] = ["hello", 20];
console.log(myTuples);
// myTuples = [20, "hello"]; // Error

// Destructuring
const [first, second] = myTuples;
console.log("First Value : ", first);
console.log("Second Value : ", second);