//    Primitive Data Type --> Call by value(copy)
/* 
String,Number,Boolean,null,undefined,Symbol,BigInt
*/


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234')  // return type-->also a symbol type
const otherId = Symbol('1234')

console.log(id === otherId);  // false

const bigNumber = 21231465322687n  // store in bigint-->add n in last


/*
JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.
*/




//  Refrence Type(Non-premitive Data Type)
/*
Array,Object,Functions
*/

const man = ["shaktiman", "nagraaj", "Doga"]
//object
let obj = {
  name: "Aman",
  age:22,
}

// function
const myfun = function(){
      console.log("Hello World");
}

console.log(typeof man);

