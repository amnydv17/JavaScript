// const userEmail = ""
const userEmail = []
// ""---> false
// []---> true

if(userEmail){
  console.log("Got user Email");
} else {
  console.log("Don't have user email");
}

// Falsy value
// false, 0, " ", -0, bigInt 0n, null, undefined, NaN
// all other of these are truthy value

//  Truthy value
// "0", 'false', " ", [], {}, function(){}, 


// if (userEmail.length === 0) {
//   console.log("Array is Empty");
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty");
}


// Nullish Coalescing Operator (??): --> null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 100

console.log(val1);


// Terniary Operator
// condition ? true : false

const icePrice = 100

icePrice < 180 ? console.log("Less Than 180") : console.log("More Than 180");


