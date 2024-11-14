//  Literal types in TypeScript

let color1 : "red" | "yellow" | "green";
color1 = "green";
// color1 = "orange"; // Error

// OR

type Colour = "green" | "yellow" | "red";

let color2: Colour = "red";
console.log(color2)

// let color3: Colour = "orange"; // Error