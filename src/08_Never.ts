// Never type in TypeScript

// A function that always throws an error :
function throwError(msg:string): never {
    throw new Error(msg);
}
// throwError("Hello World!!");

// A function that has an infinite loop.
function infiniteLoop(): never {
    while(true) {}
}

// A variable that can never have a value.
let x: never;
function neverReturns(): never {
    while(true) {}
}
x = neverReturns();
// Line 19 will cause compile time error because the function never returns.