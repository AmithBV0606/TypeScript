# Arrays in TypeScript

### Arrays Types : 
In TypeScript, arrays are a type of object that can store multiple values of the same data type. Arrays in TypeScript are typed, which means you can specify the type of values that an array can hold.

**There are two ways to define an array type in TypeScript :**

1. Using the square bracket notation [] to indicate an array of a specific type :

```ts
const numbers: number[] = [1, 2, 3, 4];
```

**NOTE :** In this example, numbers is an array of number type, and it contains four elements.

2. Using the generic Array notation to indicate an array of a specific type:

```ts
const names: Array<string> = ["Alice", "Bob", "Charlie"];
```

**NOTE :** In this example, names is an array of string type, and it contains three elements.