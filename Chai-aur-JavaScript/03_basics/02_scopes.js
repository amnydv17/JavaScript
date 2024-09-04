// var c = 200
let a = 300    // globle Scope
if(true){
  // Local Scope
  let a = 10
  const b = 20
  // console.log("Inner a is:", a);
  
}
// var c = 77
// console.log(a);      error
// console.log(b);      error
// console.log(c);   //30



// Nested Scope

function one(){
  const username = "Aman"

  function two(){
    const website = "youtube"
    console.log(username);
  }
  // console.log(website);
  two()
}

// one()

if (true) {
  const username = "Aman"
  if(username === "Aman"){
      const website = " youtube"
      // console.log(username + website);
  }
  // console.log(website);   // 1st error
}

// console.log(username);  // 2nd error



//////////////////       Interesting     &&&&&&&&&&&&&&&&&&&&

addOne(5)      // it will not give any error 
function addOne(num){
    return num + 1
}



// addTwo(5)     //  After running it give error because of declaration
const addTwo = function(num){
  return num + 2
}


