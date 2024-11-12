"use strict";
// Any type in TypeScript
let color = "crimson";
color = 20;
color = true;
// color(); // Error : color is not a function, but it will not be caught during the runtime
color = { name: "red" };
console.log(color.name);
