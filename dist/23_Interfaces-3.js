"use strict";
// Methods inside an Interface
function greet1(person) {
    console.log(`Hello, ${person.firstname} ${person.lastname}!!`);
    person.sayHello();
}
const greetObj = {
    firstname: "Amith",
    lastname: "Rao",
    age: 24,
    sayHello() {
        console.log(`Hello, ${this.firstname}`);
    }
};
greet1(greetObj);
const song1 = {
    songName: "Natural",
    singerName: "Imagine Drigon",
    printSongInfo: (songName, singerName) => {
        return `Song: ${songName} Singer: ${singerName}`;
    }
};
console.log(song1.printSongInfo("Natural", "Imagine Drigon"));
