const user = {
  username: "Aman",
  loginCount: 7,
  signedIn: true,

  getUserDetails: function(){
      console.log("Got Data from database");
      console.log(`Username: ${this.username}`);
      console.log(this);
  }
}


// console.log(user.loginCount);
// console.log(user.getUserDetails());
// console.log(this);



// Costructor Function

function User(username, loginCount, isLoggedIn){
  this.username = username
  this.loginCount = loginCount
  this.isLoggedIn = isLoggedIn

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
    
  }
  return this
} 

const userOne = new User("Aman", 12, true)
const userTwo = new User("Yadav", 11, false)
console.log(userOne.constructor) 
// output is ovrwrite because we not print userTwo but in userOne it overwrite its valus so we use new keyword for current/new instance
// console.log(userTwo);


// new ---> 
// 1st empty object created named as instance. 
// 2nd a constructor function called using new keywords 
// 3rd all returned value pack with newly created object