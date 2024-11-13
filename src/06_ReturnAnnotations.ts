// Return Annotations

// Regular Function
function double1(x:number): number {
    return x * x;
}
const res4 = double1(5);
console.log(res4);

// Arrow Function
const double2 = (x: number): number => x * x;
const res5 = double2(10);
console.log(res5);