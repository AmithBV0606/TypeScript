// Optional properties in TypeScript

type Person = {
    name: string;
    age: number;
    email?: string;
}

const alice: Person = { name: "Alice", age: 30 };
console.log(alice);
console.log(alice.email); // undefined

const bob: Person = { name: "Bob", age: 25, email: "bob@example.com" };
console.log(bob);