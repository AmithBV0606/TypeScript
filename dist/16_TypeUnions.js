"use strict";
// Union Type in TypeScript
let Password = "ABC@123";
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
let obj = {
    email: "something@gmail.com",
    password: "something",
};
// let obj: UserInformation | AccountDetails = { // Error
//     name: "Amith",
// }
console.log(obj);
// _________________________________________________________________________________________
// Type Unions for Arrays
const item = [1, 2, 3, "Hello"];
console.log(item);
