// Type aliases in TypeScript

type User = {
    name : string;
    age: number;
    location: string;
}

const printUserInfo = (user: User) => {
    return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
}

// No Error : Wrong way
// const person1 = {
//     name: "Amith",
//     age: 24,
//     location: "India",
//     ph: 32853534
// }

// Correct way
const person1: User = {
    name: "Amith",
    age: 24,
    location: "India",
    // ph: 32853534
}

const res7 = printUserInfo(person1);
console.log(res7);
// OR
// const res8 = printUserInfo({name: "Arjun", age: 23, location: "India"});
// console.log(res8)