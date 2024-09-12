const promiseOne = new Promise(function(resolve, reject){
    // Do any async task
    // Data Base calls, cryptography, network
    setTimeout(function(){
      console.log("Async task-1 is Complete.");
      resolve()
    },1000)
})

promiseOne.then(function(){
  console.log("Promise task-1 Completed.")
})

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async Task 2 Completed");
    resolve()
  },1000)
}).then(function(){
  console.log("Promise 2 Completed")
})

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
      resolve({username:"Aman", email:"yadav@gmail.com"})
  },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false
    if(!error){
      resolve({username:"Aman", pass:"abc123"})
    }else{
      reject('Error:Something went wrong')
    }
  })
}, 1000)

promiseFour
.then((user) => {
  console.log(user);
  return user.username
})
.then((username) => {
  console.log(username)
})
.catch(function(error){
  console.log(error)
})
.finally(function(){
  console.log("Finally Completed Promisses");
})



const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({username:"Aman", pass:"123abc"})
    }else{
      reject('Error: JS went Wrong')
    }
  },1000)
})

async function consumePromiseFive(){
  try {
    const response =  await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive()


// async function getAllUser(){
//   try {
//     const response = await fetch('https://api.github.com/users')
//     // console.log(response);
    
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("E: ",error);
//   }
// }

// getAllUser()


fetch('https://api.github.com/users/amnydv17')
.then((response) => {
    return response.json()
})
.then((data) => {
  console.log(data);
})
.catch((error) => { console.log(error)})


// Note-->
// A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.