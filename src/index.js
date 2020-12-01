let a = 2;
a = a << 2;
console.log(a); //8

(function () {
  return typeof arguments; //obj
});

let b = 1;
let c = b++ + 1;
console.log(c); //2

function f(a, b, c) {}
const arr = [, , ,];
console.log(arr.length);
console.log(f.length); //3 3
