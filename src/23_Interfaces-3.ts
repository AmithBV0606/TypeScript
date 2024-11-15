// Methods inside an Interface

// Example 1 : 
interface Person1 {
    firstname: string;
    lastname: string;
    age: number;
    sayHello(): void;
}

function greet1(person: Person1){
    console.log(`Hello, ${person.firstname} ${person.lastname}!!`);
    person.sayHello();
}

const greetObj: Person1 = {
    firstname: "Amith",
    lastname: "Rao",
    age: 24,
    sayHello(){
        console.log(`Hello, ${this.firstname}`);
    }
}

greet1(greetObj);

// Example 2 : 
interface Song {
    songName: string;
    singerName: string;
    printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
    songName: "Natural",
    singerName: "Imagine Drigon",
    printSongInfo : (songName, singerName) => {
        return `Song: ${songName} Singer: ${singerName}`;
    }
}

console.log(song1.printSongInfo("Natural", "Imagine Drigon"));