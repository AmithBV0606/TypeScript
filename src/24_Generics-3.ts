// Generic function to filter an array based on a condition

function filterArray<T>(array: T[], condition: (item:T) => boolean): T[] {
    return array.filter((item) => condition(item));
}

// Usage

// Number Type :
const numberArray = [1,2,3,4,5,6,7,8,9,10];
const evenNumber = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumber);

// String Type :
const stringArray = ["apple", "banana", "Watermellon", "orange", "chery"];
const shortWord = filterArray<string>(stringArray, (word) => word.length < 6);
console.log(shortWord);

// Interfaces
interface Fruit001 {
    name: string;
    color: string;
}

const fruitArray: Fruit001[] = [
    {name: "Apple", color: "Red"},
    {name: "Banana", color: "yellow"},
    {name: "Watermellon", color: "green"},
    {name: "Chery", color: "Red"}
];
const redFruit = filterArray<Fruit001>(fruitArray, (fruit) => fruit.color === "Red");
console.log(redFruit);