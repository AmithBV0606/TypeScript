// Function parameters Annotations

// Regular Function
function addOne(num:number) {
    return num + 1;
}

const res1 = addOne(5);
console.log(res1)

// Arrow Func Annotations
const double = (x: number, y: number) => x * y;
const res2 = double(2, 10);
console.log(res2);

// Note : Also notice, TypeScript will gives you warning if you provide more or less arguments then you specifiy in your parameters area.

// double(2, 10, 20); // 👈 Warning