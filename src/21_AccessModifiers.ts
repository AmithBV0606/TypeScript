// Access Modifiers in TypeScript

// Public Access Modifier : can be accessed from anywhere, both inside and outside the class.
class Animal {
    public name: string;
    public age: number;
    public species: string;

    constructor(name: string, age: number, species: string) {
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

console.log("_______________________________________________________________________________")

// Private Access Modifier : can only be accessed from within the class they are defined in.
class Player {
    private name: string;
    sport: string;

    constructor(name: string, sport: string){
        this.name = name;
        this.sport = sport;
    }

    getName(): string {
        // return `This is ${this.name}`;
        return this.name;
    }
}

const p1 = new Player("Virat kohli", "Cricket");
// console.log(p1.name); // Error
console.log(p1.sport);
console.log(p1.getName());

console.log("_______________________________________________________________________________")

// Protected Access Modifier : can be accessed from within the class they are defined in, as well as any subclasses that extend the class.

class Fruits {
    protected name: string;
    protected color: string;

    constructor(name: string, color: string){
        this.name = name;
        this.color = color;
    }

    // Protected Access Modifier can be accessed from within the class they are defined in.
    getDetails = (): string  => {
        return `This is ${this.color} ${this.name}!!`;
    }
}

const grapes = new Fruits("Grapes", "Green");
console.log(grapes.getDetails());

class Apple extends Fruits {
    constructor(name: string, color: string){
        super(name, color);
        // this.getDetails();
    }
}

const appleType = new Apple("Kashmiri Apples", "Dark Red");
console.log(appleType);
console.log(appleType.getDetails());