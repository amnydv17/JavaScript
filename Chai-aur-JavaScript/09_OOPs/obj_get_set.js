const User = {
  _email: "amnydv@123.com",
  _password: "qwer@123",

  get email(){
    return this._email.toUpperCase()
  },

  set email(value){
    this._email = value
  }
}

const tea = Object.create(User)
console.log(tea.email);
