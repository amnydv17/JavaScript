let score1 = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined
let score5 = true

// console.log(typeof score1);
// console.log(typeof score2);
// console.log(typeof score3);
// console.log(typeof score4);
// console.log(typeof score5);

let convertInNumber1 = Number(score1)
let convertInNumber2 = Number(score2)
let convertInNumber3= Number(score3)
let convertInNumber4 = Number(score4)
let convertInNumber5 = Number(score5)
// console.log(convertInNumber1);
// console.log(convertInNumber2);
// console.log(convertInNumber3);
// console.log(convertInNumber4);
// console.log(convertInNumber5);






/* 
Type Conversion in Javascript
1-  "33"--> 33
2-  "33abc"--> NaN
3-  true-->1; false-->0
*/

let loggedIn = "aman"

let booltoLogged =  Boolean(loggedIn)
// console.log(booltoLogged);

// 1-> true; 0--> false
// ""--> false
// "aman"--> true


let someNumber = 22

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);



// ********************* Operations *************************//

let value = 3

let negvalue = -value
// console.log(negvalue);


let str1 = "Hello"
let str2 = " Aman"

let str3 = str1 + str2
// console.log(str3);


// whoseover first conversion are become in that datatype
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");



// console.log(+true);
// console.log(+"");


let num1, num2, num3
num1 = num2 = num3 = 2 + 3 // do not use in these tricky in production code


let counter = 100
counter++
console.log(counter);


