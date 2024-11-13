// Object-Types in TypeScript

// Syntax : type variableName (annotations/types) = {property:value}

// Example 1 : Defining objects types without using type alias or interfaces
const person: { firstName: string; lastName: string; age: number  } = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);

// _______________________________________________________________________________

// Example 2 : Objects as return value of a function
function printUser(): { name: string; age: number; country: string } {
  return {
    name: "Alex",
    age: 20,
    country: "USA"
  }
}
const res6 = printUser();
console.log(res6);