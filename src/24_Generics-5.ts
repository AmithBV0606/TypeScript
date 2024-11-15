// Generic class

class Box<T> {
    private content: T;

    constructor(initialContent: T){
        this.content = initialContent;
    }

    getContent(): T {
        return this.content;
    }

    setContent(newContent: T): void {
        this.content = newContent;
    }
}

// String Type
const stringBox = new Box<string>("Hello, TypeScript");
console.log(stringBox);
console.log(stringBox.getContent());
stringBox.setContent("Hello, JavaScript!!");
console.log(stringBox.getContent());

console.log("____________________________________________________________________")

// Number Type
const numberBox = new Box<number>(10);
console.log(numberBox);
console.log(numberBox.getContent());
numberBox.setContent(30);
console.log(numberBox.getContent());