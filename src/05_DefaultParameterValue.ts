// Default Parameter Values

// Without Annotation : 
// function greet(person = "Anonymous") {
//     return `Hello ${person}`;
// }

function greet(person: string = "Anonymous") {
    return `Hello ${person}`;
}

// const res3 = greet();
const res3 = greet("Amith");
console.log(res3);