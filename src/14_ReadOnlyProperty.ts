// Read Only Propert in TypeScript

type Person2 = {
    name: string;
    age: number;
    readonly email: string;
}

const bob2: Person2 = { name: "Bob", age: 25, email: "bob@example.com" };
console.log(bob2);
console.log(bob2.email);
// bob2.email = "new-email@example.com"; // Error