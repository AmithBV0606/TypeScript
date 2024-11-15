// Interfaces in TypeScript

// Interfaces applied on Objects

// Example 1 :
interface Computer {
    name: string;
    ram: number;
    ssd: number;
}

const computerExample : Computer = {
    name: "MacBook Air M3",
    ram: 16,
    ssd: 512
}

console.log(computerExample);

// Example 2 : 
interface Movie {
    readonly name: string;
    ratings: number;
    genra?: string;
}

const newMovie : Movie = {
    name:"Venom: The last Dance!",
    ratings: 9.0,
    // genra: "Action"
}

console.log(newMovie.name)
// newMovie.name = "Spiderman"; // Error
console.log(newMovie.ratings)
console.log(newMovie.genra)