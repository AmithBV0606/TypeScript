# Annotations

In TypeScript, annotations are used to specify the data type of a variable, parameter, function return value, and other types of values. Annotations help developers catch errors early in development by allowing them to specify what types of values can be assigned to a given variable or passed as an argument to a function.

Annotations are specified using a syntax that involves placing a colon : followed by the data type after the variable name or argument name. For example, the following code declares a variable named name with a type of string:

```ts
let name: string = "John";
```

# String Annotations

```ts
let message: string = "Hello, world!";
```

In this example, we're declaring a variable message and assigning it a value of type string. The colon : is used to annotate the type of the variable.

This tells TypeScript that the variable message can only hold a value that is a string. If we were to try to assign a value of a different type to this variable, TypeScript would throw an error.

# Number Annotations

```ts
let myNumber: number = 42;
```

In this example, we're declaring a variable myNumber with the type annotation number. This means that the value assigned to myNumber must be a numeric value.

If we try to assign a non-numeric value to myNumber, TypeScript will show an error:

```ts
let myNumber: number = "Hello, world!"; // Error: Type '"Hello, world!"' is not assignable to type 'number'.
```

# Boolean Annotations

```ts
let isCompleted: boolean = false;
```

In this example, we're declaring a variable isCompleted with the type annotation boolean. This means that the value assigned to isCompleted must be either true or false.

If we try to assign a non-boolean value to isCompleted, TypeScript will show an error:

```ts
let isCompleted: boolean = "not yet"; // Error: Type 'string' is not assignable to type 'boolean'.
```