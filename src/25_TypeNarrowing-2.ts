// The instanceof operator

class Doggy {
  bark(): void {
    console.log("Bow Bow Bowww!!");
  }
}

class Pussy {
  meow(): void {
    console.log("Meow meoww!!");
  }
}

function animalIdentifier(animal: Doggy | Pussy): void {
  if (animal instanceof Doggy) {
    // Within this block, TypeScript knows that 'animal' is an instance of Dog
    animal.bark();
  } else if (animal instanceof Pussy) {
    // Within this block, TypeScript knows that 'animal' is an instance of Cat
    animal.meow();
  }
}

// Example usage
const myDog = new Doggy();
const myCat = new Pussy();

animalIdentifier(myDog); // Outputs: Woof!
animalIdentifier(myCat); // Outputs: Meow!