"use strict";
// Void in TypeScript
// Regular Function
function printMessage(message) {
    console.log(`The message is ${message}`);
    // return message; // Error
}
printMessage("Hello");
// Arrow Function
const textMesg = (message) => console.log(`This is the message : ${message}`);
textMesg("Hola");
