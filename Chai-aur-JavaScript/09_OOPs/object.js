const newHero = ["Hulk", "Spiderman"]
console.log(newHero);

// Array is also a object in JS
// Strings is also come from object and object finnaly goes to null.


function multiplyBy5(num){
  return num*5
}

multiplyBy5.power = 3

console.log(multiplyBy5(5));// 25
console.log(multiplyBy5.power);  // 3
console.log(multiplyBy5.prototype);  // {}

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
  this.score++
}

createUser.prototype.printMe = function(){
  console.log(`Price is ${this.score}`);
}

const chai = new createUser("Aman", 25)
const tea = new createUser("Yadav", 250) 


chai.printMe()
