# Type Narrowing

Type narrowing is the process of refining a variable's type within a conditional block of code. This allows you to write more precise and type-safe code.

TypeScript provides several mechanisms for narrowing the types : 

- Type Guards : 

        Type guards are mechanism that help TypeScript understand and narrow down the types more precisely. One common type guard is the "typeof" operator.

- The instanceof operator

        The "instanceof" operator is another type guard in TypeScript that allows you to check whether an object is an instance of a particular class or constructor function.

- Intersection Types

        Intersection types in TypeScript allows you to combine multiple types into a single type. The resulting type will have all the properties of each individual type. You create intersection type using the "&" operator. 