# Objects in TypeScript

An object in TypeScript is a structured data type that represents a collection of properties, each with a key and an associated value. The properties of an object can have specific types, and the object itself can be annotated with a type, often defined using an interface or a type alias. TypeScript uses structural typing, meaning that the shape of an object (its structure or properties) is what matters for type compatibility

## Function with Object Paramaeters

```ts
function printPerson(person: {
  name: string;
  age: number;
  isStudent: boolean;
}) {
  console.log(
    `Name: ${person.name}, Age: ${person.age}, Student: ${person.isStudent}`
  );
}

const john = { name: "John", age: 27, isStudent: false };
printPerson(john);
```

In this example, the printPerson() function takes an object as a parameter, and we annotate the object inline by specifying its properties and types within curly braces.

We define a john object with three properties that conform to the expected shape of the argument that printPerson() expects, and pass it as an argument to the function.

This approach can be useful for annotating objects inline when defining function parameters, but it can become repetitive to specify the same shape in multiple places in your code. In such cases, it may be more convenient to use a type alias or interface to reduce duplication and make your code more readable. (Which we'll learn next)