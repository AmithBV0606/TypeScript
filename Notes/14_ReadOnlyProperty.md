# ReadOnly Property

You can make a certain property readonly in an object type by using the readonly keyword before the property name.

For example, let's say you have an object type for a person with name, age, and email properties, but you want to make the email property readonly. You can do this by adding the readonly keyword before the email property:

```ts
type Person = {
  name: string;
  age: number;
  readonly email: string;
};
```

Now, when you create an object of type Person, you can set the name and age properties as usual, but you cannot change the email property after it has been created:

```ts
const alice: Person = { name: "Alice", age: 30, email: "alice@example.com" };
console.log(alice.email); // "alice@example.com"
// This will give a compile-time error:
alice.email = "new-email@example.com";
```

In this example, the alice object includes a readonly email property that is set to "alice@example.com" when the object is created. We are able to read the value of the email property using dot notation (alice.email), but we cannot change its value once it has been created.

Note that any attempt to change the value of a readonly property will result in a compile-time error. Also note that readonly applies only to the property itself, not to the object that contains it. In other words, the alice object itself is not readonly, so you can still change its name and age properties if needed.