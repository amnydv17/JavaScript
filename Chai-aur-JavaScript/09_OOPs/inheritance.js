class User{
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password){
      super(username)
      this.email = email
      this.password = password
  }

  addCourse(){
    console.log(`New Course was added by ${this.username}`);
  }
}

const chai = new Teacher("Chai", "chai@teacher.com", "12345")
chai.addCourse()
const tea = new User("MasalaChai")
tea.logMe()
chai.logMe()
console.log(chai === tea);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
