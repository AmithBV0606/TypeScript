// Union Type in TypeScript

let Password : string | number = "ABC@123";

type UserInformation = {
    name: string;
    age: number;
}

type AccountDetails = {
    email: string;
    password: string;
}

// let obj: UserInformation | AccountDetails = {
//     name: "Amith",
//     age: 24,
//     email: "something@gmail.com",
//     password: "something",
// }

// let obj: UserInformation | AccountDetails = {
//     name: "Amith",
//     age: 24,
//     email: "something@gmail.com",
// }

// let obj: UserInformation | AccountDetails = {
//     name: "Amith",
//     age: 24,
// }

let obj: UserInformation | AccountDetails = {
    email: "something@gmail.com",
    password: "something",
}

// let obj: UserInformation | AccountDetails = { // Error
//     name: "Amith",
// }

console.log(obj)

// _________________________________________________________________________________________

// Type Unions for Arrays
const item: (string | number)[] = [1,2,3,"Hello"];
console.log(item);