"use strict";
// Generic class
class Box {
    constructor(initialContent) {
        this.content = initialContent;
    }
    getContent() {
        return this.content;
    }
    setContent(newContent) {
        this.content = newContent;
    }
}
// String Type
const stringBox = new Box("Hello, TypeScript");
console.log(stringBox);
console.log(stringBox.getContent());
stringBox.setContent("Hello, JavaScript!!");
console.log(stringBox.getContent());
console.log("____________________________________________________________________");
// Number Type
const numberBox = new Box(10);
console.log(numberBox);
console.log(numberBox.getContent());
numberBox.setContent(30);
console.log(numberBox.getContent());
