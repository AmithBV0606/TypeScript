# Multi Dimensional Arrays

A multi-dimensional array is an array that contains other arrays as its elements. Multi-dimensional arrays can be defined using the same notation as one-dimensional arrays, but with nested square brackets.

```ts
const matrix: number[][] = [
  [1, 2],
  [3, 4],
];
```

In this example, matrix is a two-dimensional array that contains two rows and two columns. The first row contains the values 1 and 2, and the second row contains the values 3 and 4. Each row is itself an array of numbers.

You can access elements within a multi-dimensional array using multiple bracket notations. For example, to access the value 1 in the above matrix array, you would use the following syntax:

```ts
const value = matrix[0][0];
```