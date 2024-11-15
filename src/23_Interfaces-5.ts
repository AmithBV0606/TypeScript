// Interfaces applied on Classes

interface Vehicle {
    start(): void;
    stop(): void;
}

class Cars implements Vehicle {
    start(): void {
        console.log("Car is starting....");
    }

    stop(): void {
        console.log("Car stopped!!");
    }
}

const myCar = new Cars();
myCar.start();
myCar.stop();