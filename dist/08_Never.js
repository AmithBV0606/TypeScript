"use strict";
// Never type in TypeScript
// A function that always throws an error :
function throwError(msg) {
    throw new Error(msg);
}
// throwError("Hello World!!");
// A function that has an infinite loop.
function infiniteLoop() {
    while (true) { }
}
// A variable that can never have a value.
let x;
function neverReturns() {
    while (true) { }
}
x = neverReturns();
// Line 19 will cause compile time error because the function never returns.
