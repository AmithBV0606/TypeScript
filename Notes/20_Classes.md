# Class Properties Annotations

You can annotate class properties with a type. This allows you to define the data type of the property and ensure that it is always consistent.

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

In this example, we define a Person class with two properties: name and age. We annotate these properties with a type, string for name and number for age.

When you create an instance of this class, you need to provide values for both the name and age properties:

```ts
const person = new Person("John", 30);
```

This ensures that the name property will always be a string and the age property will always be a number, which makes the code more predictable and easier to maintain.