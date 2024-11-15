// Without Generics

function printNumber(item: number, defaultValue: number): [number, number] {
  return [item, defaultValue];
}

function printString(item: string, defaultValue: string): [string, string] {
  return [item, defaultValue];
}

function printBoolean(
  item: boolean,
  defaultValue: boolean
): [boolean, boolean] {
  return [item, defaultValue];
}

// Example usage
const num = printNumber(42, 0);
console.log(num); // Outputs: [42, 0]

const str = printString("hello", "world");
console.log(str); // Outputs: ['hello', 'world']

const bool = printBoolean(true, false);
console.log(bool); // Outputs: [true, false]

console.log("_________________________________________________________________________________________")

// Using any type
function printSomething(item:any, defaultValue:any):[any, any] {
    return [item, defaultValue];
}

const something = printSomething("hello", 1);
console.log(something);

console.log("_________________________________________________________________________________________")

// Using Generics
function printAnything<Type>(item: Type, defaultValue: Type): [Type, Type] {
    return [item, defaultValue];
}

// String type
const anything1 = printAnything<string>("Hello", "Amith");
console.log(anything1);

// Number type
const anything2 = printAnything<number>(10, 20);
console.log(anything2);

// Inference : Boolean type
const anything3 = printAnything(true, true);
console.log(anything3); 

// Interface
interface Prod {
    item: string;
    defaultValue: number;
}

const prod1 = printAnything<Prod>({item:"Laptop", defaultValue: 30000}, {item:"Mobile", defaultValue:20000});
console.log(prod1);