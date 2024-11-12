# Type Inference

Type inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its value. In other words, if you declare a variable without explicitly specifying its type, TypeScript will try to infer the type based on the value you assign to it.

Here's an example:

```ts
let myString = "Hello, world!";
```

In this example, we're declaring a variable myString without specifying its type. However, since we're assigning a string value to it, TypeScript will infer that myString has a type of string.

Type inference can help reduce boilerplate code and make your code more concise, but it's important to remember that it's not always perfect and sometimes you may need to explicitly annotate variables to avoid unexpected behavior.