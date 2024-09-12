// Prototype
// let myName = "Aman    "

// console.log(myName.trim().length);


let myHeros = ["thor", "spiderman"]

let heroPower = {
  thor:"Hammer",
  spiderman:"Sling",

  getSpiderPower:function(){
    console.log(`Spidy Power is ${this.spiderman}`);
  }
}

Object.prototype.aman = function(){
  console.log(`Aman is present all over objects.`);
}

Array.prototype.yadav = function(){
  console.log(`Yadav is present all over array.`);
}


// heroPower.aman()
// myHeros.aman()
// myHeros.yadav()
// heroPower.yadav()--- > Error


const user = {
  username: "Aman",
  email: "abcdef123@gmail.com"
}
const teacher = {
  makeVideo: true
}

const teachingSupport = {
  isHire: false
}

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: teachingSupport   // refrencing other object 
}

teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher)

let anotheruser = "Chaman        "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
}

anotheruser.trueLength()
"Aman".trueLength()
"Yadav".trueLength()