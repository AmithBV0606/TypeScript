// Declaration Merging of Interfaces in TypeScript

// Example 1 :

// Original Interface
interface Car3 {
  brand: string;
  start(): void;
}

// Declaration merging (interface extension/re-opening interface)
interface Car3 {
  model: string;
  stop(): void;
}

// Usage of the extended interface
const ourCar: Car3 = {
  brand: "Toyota",
  model: "Camry",
  start() {
    console.log("Car started!!");
  },
  stop() {
    console.log("Car Stopped!!");
  },
};

console.log(ourCar);
ourCar.start();
ourCar.stop();

// Example 2 :
interface ProUser {
  firstName: string;
  lastName: string;
  age: number;
}

interface ProUser {
  printUserInfo(
    firstName: string,
    lastName: string,
    age: number
  ): string | number;
}

const amit: ProUser = {
  firstName: "Amith",
  lastName: "Rao",
  age: 24,
  printUserInfo(firstName, lastName, age) {
    return `Name: (${firstName} ${lastName}) Age: (${age})`;
  },
};

console.log(amit);
console.log(amit.printUserInfo("Amith", "Rao", 24));