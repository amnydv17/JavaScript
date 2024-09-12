function SetUserName (username) {
  // comples DB calls
      this.username = username
      console.log("Called");
      
}

function createUser(username, email, password){
  // SetUserName(username) // apne abhi refrence diya hai isiliye call ni hua hai
  SetUserName.call(this, username)

  this.email = email
  this.password = password
}

const chai = new createUser("Aman", "abcd@gmail.com", "123abc")
console.log(chai);
