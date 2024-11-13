// Void in TypeScript

// Regular Function
function printMessage(message:string): void {
    console.log(`The message is ${message}`);
    // return message; // Error
}
printMessage("Hello");

// Arrow Function
const textMesg = (message: string): void => console.log(`This is the message : ${message}`);
textMesg("Hola")