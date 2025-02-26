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


let chair = 15
chair++; //output 16
console.log(chair);

let chair1 = 15
++chair1; //output 16
console.log(chair1); //output 16
 
//no difference in both of the above but....

let chair_final = 15
chair_final_res = chair_final++;
console.log(chair_final_res);  //output will be 15 because in this case the value will first print (Post increment mn baad mn add hota hai) and then add 1 to it


let chairFinal = 19
chairFinal_res = ++chairFinal;
console.log(chairFinal_res);  //output will be 20 as it is pre-increment and in it the value will be added first and then will get print on this console.

//same for pre and post decrement