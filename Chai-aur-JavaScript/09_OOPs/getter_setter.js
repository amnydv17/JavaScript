class User {
  constructor(email, password){
    this.email = email
    this.password = password
  }

  // getter--> get
  get password(){
    return `${this._password}@aman`
  }

  set password(value){
     this._password = value
  }

  get email(){
    return this._email.toUpperCase()
  }

  set email(value){
     this._email = value
  }

}

const aman = new User("Aman@gmail.com", "abc")
console.log(aman.password);
console.log(aman.email);
