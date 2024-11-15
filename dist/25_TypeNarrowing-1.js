"use strict";
// Type Narrowing 
function exampleFunc(val) {
    if (typeof val === "string") {
        console.log(val.toUpperCase());
    }
    else if (typeof val === "number") {
        console.log(val.toFixed(2));
    }
}
exampleFunc("amith");
exampleFunc(23);
