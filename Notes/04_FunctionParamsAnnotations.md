# Function Parameters Annotations

Function parameter annotations in TypeScript are used to specify the expected types of the parameters that a function takes.

```ts
// Regular Function
function addOne(num:number) {
    return num + 1;
}

// Arrow Function
const double = (x: number, y: number) => x * y;
```