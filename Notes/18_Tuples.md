# Tuples

In TypeScript, a tuple is a type that represents an array with a fixed number of elements, where each element can have a different type. The order of the types in the tuple definition corresponds to the order of the values in the actual array. Tuples are similar to arrays, but they have a specific structure and can be used to model finite sequences with known lengths.

You can define a tuple type by specifying the types of its elements enclosed in square brackets, separated by commas:

```ts
let myTuple: [string, number] = ["hello", 42];
```

This declares a variable myTuple of type [string, number], which means it's an array with two elements: the first element must be a string, and the second element must be a number. You can access individual elements of a tuple using indexing syntax:

```ts
let myTuple: [string, number] = ["hello", 42];
console.log(myTuple[0]); // "hello"
console.log(myTuple[1]); // 42
```

Note that you can also use destructuring syntax to extract individual elements from a tuple:

```ts
let myTuple: [string, number] = ["hello", 42];
let [first, second] = myTuple;
console.log(first); // "hello"
console.log(second); // 42
```

Tuples are useful when you need to represent a fixed set of values where each value has a different type. For example, you might use a tuple to represent a 2D point with x and y coordinates:

```ts
let point: [number, number] = [10, 20];
```

Or you might use a tuple to represent a person's name and age:

```ts
let person: [string, number] = ["John Smith", 30];
```