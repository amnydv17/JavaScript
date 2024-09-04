// function definition

function sayMyName(){
  console.log('A');
  console.log('M');
  console.log('A');
  console.log('N');
}

// sayMyName // refrence
// sayMyName()  // execution
               // Parameters
function addTwoNum(num1,num2){   // no need to give type
    // let result = num1 + num2
    return num1 + num2
    // console.log("Hello");    nothing print after return
    
}
addTwoNum()   //NaN
addTwoNum(3,4)  // 7
addTwoNum(3, "4")  // 34
addTwoNum(3, "A")  // 3A
addTwoNum(3, null)  // 3
      // Arguments


const result  = addTwoNum(7, 7)
// console.log("Result: ", result)  // undefined because no return by function
// console.log("Result: ", result)  


function userLoggedIn(username = "Yadav"){
  // if(username === undefined){
  if(!username){
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in.`;
}

// console.log(userLoggedIn("Aman"));
// console.log(userLoggedIn());

// user cart me saman add kiye ja rha hai toh unki price add krni hoti hai

function cartPrice(val1, val2, ...num1){  // add value into array
    return num1
}

// console.log(cartPrice(700, 2000,5000));   // [ 700, 2000, 5000 ]
// console.log(cartPrice(700, 2000,5000, 7000));   // [ 5000, 7000 ]


// object with function

const user = {
  username: "Aman",
  price:2999
}


function handleObject(anyObject){
      console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`);  
}

// handleObject(user)
// handleObject({  // direct object passing into function
//   username:"Yadav",
//   price: 4999
// })

const myArray = [200, 400, 600, 800]

function secondValue(anyValue){
  return anyValue[3]
}

console.log(secondValue(myArray));
console.log(secondValue([100,200,300,400,500]));

