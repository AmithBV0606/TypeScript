// Type Narrowing 

// Type Guard : "typeof"

type MyType = string | number;

function exampleFunc(val:MyType): void {
    if (typeof val === "string") {
        console.log(val.toUpperCase());
    } else if(typeof val === "number"){
        console.log(val.toFixed(2));
    }
}

exampleFunc("amith");
exampleFunc(23);