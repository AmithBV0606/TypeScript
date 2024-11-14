"use strict";
// Getters and Setters in TypeScript
class MyClass {
    constructor() {
        this._myProperty = 1;
    }
    get myProperty() {
        return this._myProperty;
    }
    set myProperty(value) {
        this._myProperty = value;
    }
}
const myInstance = new MyClass();
console.log(`Current Value : ${myInstance.myProperty}`);
myInstance.myProperty = 20;
console.log(`New Values : ${myInstance.myProperty}`);
