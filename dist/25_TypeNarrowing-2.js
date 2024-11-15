"use strict";
// The instanceof operator
class Doggy {
    bark() {
        console.log("Bow Bow Bowww!!");
    }
}
class Pussy {
    meow() {
        console.log("Meow meoww!!");
    }
}
function animalIdentifier(animal) {
    if (animal instanceof Doggy) {
        // Within this block, TypeScript knows that 'animal' is an instance of Dog
        animal.bark();
    }
    else if (animal instanceof Pussy) {
        // Within this block, TypeScript knows that 'animal' is an instance of Cat
        animal.meow();
    }
}
// Example usage
const myDog = new Doggy();
const myCat = new Pussy();
animalIdentifier(myDog); // Outputs: Woof!
animalIdentifier(myCat); // Outputs: Meow!
