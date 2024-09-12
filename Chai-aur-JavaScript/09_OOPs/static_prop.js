class User{
  constructor(username){
    this.username = username
  }
  logMe(){
    console.log(`USERNAME is ${this.username}`);
  }
  // I want when new user created it will have a unique id and i want to not give access of this id to every object so use static 
  static createId(){
    return `123`
  }
}

const chai = new User("Aman")
// console.log(chai.createId());

class Teacher extends User {
  constructor(username, email){
      super(username)
      this.email = email
  }

  // addCourse(){
  //   console.log(`New Course was added by ${this.username}`);
  // }
}

const phone = new Teacher("Phone", "phone@gmail.com")
console.log(phone.createId());




