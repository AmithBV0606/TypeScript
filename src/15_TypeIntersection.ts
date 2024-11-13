// Type Intersection in TypeScript

type UserInfo = {
    name: string;
    age: number;
}

type AccountInfo = {
    id: number;
    email: string;
    password: string;
}

type AllInfo = UserInfo & AccountInfo;

const user01: AllInfo = {
    name: "Alice",
    age: 25,
    id: 210011,
    email:"alice0101@gmail.com",
    password:"Amith@123"
}

console.log("Name : ", user01.name);
console.log("Age : ", user01.age);
console.log("Id : ", user01.id);
console.log("Email : ", user01.email);
console.log("Password : ", user01.password);