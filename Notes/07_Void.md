# Void type in TypeScript

In TypeScript, void is a type that represents the absence of any value. It is often used as the return type for functions that do not return a value.

Here's an example:

```ts
function logMessage(message: string): void {
  console.log(`Message: ${message}`);
}
```

In this example, the function logMessage takes in a message parameter of type string, logs it to the console, but does not return any value. Therefore, its return type is void.