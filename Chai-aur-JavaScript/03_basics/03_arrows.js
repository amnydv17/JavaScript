const user = {
  username : "Aman",
  price : 2999,

  welcomeMassege: function(){
     console.log(`${this.username}, welcome to Website`);
     console.log(this);
     
  }
}

// user.welcomeMassege()
// user.username = "Yadav"
// user.welcomeMassege()
// console.log(this);  // give empty {}

// function chai(){
//   let username = "Aman"
//   // console.log(this);
//   console.log(this.username);  // this is only use in object
// }

// chai()       undefined


// const chai = function(){
//     let username = "Aman"
//   // console.log(this);
//   console.log(this.username);  // this is only use in object
// }
// chai()         undefined


// Arraow function
// const chai = () => {
//     let username = "Aman"
//     // console.log(this);
//     console.log(this.username);
    
// }
// chai()    undefined

// {} me wrap kiya toh return keyword likhna padega---> Explicit Return

// const add_Two = (num1, num2) => {
//   return num1 + num2
// }



// Implicit Return 
// const add_Two = (num1, num2) => num1 + num2

// const add_Two = (num1, num2) => (num1 + num2)
// () wrap kiya toh return keyword ni likhna padega
const add_Two = (num1, num2) => ({username:"AMAN"})

console.log(add_Two(4, 6));
