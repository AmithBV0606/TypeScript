"use strict";
// Extending Interfaces in TypeScript or Combibing 2 Interfaces
const movie1 = {
    name: "John Wick",
    ratings: 7,
    printMovieInfo(name, price, ratings) {
        return `Name: ${name}, Price: ${price}, Ratings: ${ratings}`;
    },
    genra: "Action",
};
const res10 = movie1.printMovieInfo("John Wick", 100, 9.5);
console.log(res10);
