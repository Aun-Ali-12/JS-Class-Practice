let a = 17;
let b = 35;
let c = 3;

let test;

test = (a / b) * 100; //48.57
test = test + (c / a) * 100; //66.217
test = test + b / (c * 100); 
console.log(test); //66.3

let score = a/b
console.log(score);

let score1 = a%b
console.log(score1); //output 17


console.log(10 % 3);   //output 1
console.log(10 % 2);   //output 0
console.log(10 % 4);   // output 2
console.log(12 % 5);   // output 2
console.log(12 % 8);   //output 4
console.log(5 % 12);   // not 2 but 5 (because the value in which the dividend is less than the divisor, the dividend will be the remainder)
console.log(7 % 7);    // 0
console.log(9 % 2);    //1
console.log(24 % 9);   //6
