// We want when we write function it immediatly invoked
// i want when my app start then just after that database connection start immediatly


// Immediatly Invoked Function Expressions--> Global Scope k declaration se hone wale pollution ko hatane k laye iife ka use karna

// function chai(){
//   console.log("DB CONNECTED");
// }
// chai()

// iife

// named iife
(function chai(){
  console.log("DB CONNECTED");
})();       // iife function ko rokne k liye ; use karte hai


// unnamed iife with parameter
( (name) => {
  console.log(`DB CONNECTED TWO ${name}`);
}) ("Aman")
 

// Note--> When you write two iife into one file write ; after first otherwise it give error