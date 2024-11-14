"use strict";
// Access Modifiers in TypeScript
// Public Access Modifier : can be accessed from anywhere, both inside and outside the class.
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
}
const Dog = new Animal("Golden Retriever", 8, "DOG");
console.log(Dog);
console.log(Dog.name);
console.log(Dog.age);
console.log(Dog.species);
console.log("_______________________________________________________________________________");
// Private Access Modifier : can only be accessed from within the class they are defined in.
class Player {
    constructor(name, sport) {
        this.name = name;
        this.sport = sport;
    }
    getName() {
        // return `This is ${this.name}`;
        return this.name;
    }
}
const p1 = new Player("Virat kohli", "Cricket");
// console.log(p1.name); // Error
console.log(p1.sport);
console.log(p1.getName());
console.log("_______________________________________________________________________________");
// Protected Access Modifier : can be accessed from within the class they are defined in, as well as any subclasses that extend the class.
class Fruits {
    constructor(name, color) {
        // Protected Access Modifier can be accessed from within the class they are defined in.
        this.getDetails = () => {
            return `This is ${this.color} ${this.name}!!`;
        };
        this.name = name;
        this.color = color;
    }
}
const grapes = new Fruits("Grapes", "Green");
console.log(grapes.getDetails());
class Apple extends Fruits {
    constructor(name, color) {
        super(name, color);
        // this.getDetails();
    }
}
const appleType = new Apple("Kashmiri Apples", "Dark Red");
console.log(appleType);
console.log(appleType.getDetails());
