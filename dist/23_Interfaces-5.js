"use strict";
// Interfaces applied on Classes
class Cars {
    start() {
        console.log("Car is starting....");
    }
    stop() {
        console.log("Car stopped!!");
    }
}
const myCar = new Cars();
myCar.start();
myCar.stop();
