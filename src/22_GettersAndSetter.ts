// Getters and Setters in TypeScript

class MyClass {
    private _myProperty: number = 1;

    get myProperty(): number {
        return this._myProperty;
    }

    set myProperty(value: number) {
        this._myProperty = value;
    }
}

const myInstance = new MyClass();

console.log(`Current Value : ${myInstance.myProperty}`);
myInstance.myProperty = 20;
console.log(`New Values : ${myInstance.myProperty}`);