// singleton
//object create

const mysym = Symbol("key1")


// object literals
const user = {     //  keys-value pair
  name: "Aman",
  [mysym] : "symbolee",
    // "last name": "Yadav",  // can not access through dot notation use brackets
  "last_name":"Yadav",
  age : 22,
  location :"Gorakhpur",
  email : "aman@google.com",
  isLoggedIn : false,
  lastLoogedIns: ["Monday", "Friday"]
}

// console.log(user.email);
// // console.log(user.last name);  cannot access
// console.log(user["location"]);
// console.log(user["last_name"]);
// console.log(typeof user[mysym]);

user.age = 23
// Object.freeze(user)
user.age = 24
// console.log(user);

user.greeting = function(){
  console.log("Hello User");
}

user.greetingTwo = function(){
  console.log(`Hello User ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());

// Jyadatar time . se value access kre kush special case me hi [] wala use kre