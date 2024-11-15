"use strict";
// Declaration Merging of Interfaces in TypeScript
// Usage of the extended interface
const ourCar = {
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
const amit = {
    firstName: "Amith",
    lastName: "Rao",
    age: 24,
    printUserInfo(firstName, lastName, age) {
        return `Name: (${firstName} ${lastName}) Age: (${age})`;
    },
};
console.log(amit);
console.log(amit.printUserInfo("Amith", "Rao", 24));
