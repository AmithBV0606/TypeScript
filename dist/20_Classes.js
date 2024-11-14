"use strict";
// Object Oriented Programming in TypeScript
// Classes
// class Human {
//     name: string;
//     age: number;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
// }
// const women = new Human("Alice", 24);
// console.log(women);
// Readonly Property in Classes
class Human {
    constructor(name, age, score) {
        // Assigning default values
        this.score = 10;
        this.name = name;
        this.age = age;
        this.score = score;
    }
}
const women = new Human("Alice", 24, 95);
console.log(women);
