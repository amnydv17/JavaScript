// const tinderUser = new Object()    // this is singlton object 
//or
const tinderUser = {}     // no -singlton

tinderUser.name = "Akhil"
tinderUser.id = "123ab"
tinderUser.isLoggedIn = false


console.log(tinderUser);


// object within object
const regularUser = {
  email:"some@gmail.com",
  fullName: {
    userFullName:{
      firstName:"Aman", 
      lastName: "Yadav"
    }
  }
}

// console.log(regularUser.fullName.userFullName.lastName);

const obj1 = {
  1: "a",
  2: "b"
}

const obj2 = {
  3: "a",
  4: "b"
}
// 
const obj3 = {obj1, obj2}
// console.log(obj3);    // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj33 = Object.assign(obj1, obj2)
// console.log(obj33);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj333 = {...obj1, ...obj2}
// console.log(obj333);


// object within array
const users = [
  {
    id: 1,
    email:"abc@gmail.com"
  },
  {
    id: 1,
    email:"abc@gmail.com"
  },
  {
    id: 1,
    email:"abc@gmail.com"
  }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // return all keys in array format   [ 'name', 'id', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));  //  [ 'Akhil', '123ab', false ]
// console.log(Object.entries(tinderUser));  //  [ [ 'name', 'Akhil' ], [ 'id', '123ab' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // true


///###############     De-Structuring        %%%%%%%%%%%%%%%%%%%%%%

const course = {
    coursename: "JS with Chai",
    price:0,
    courseInstructor:"Hitesh"
}

console.log(course.courseInstructor);

// const {courseInstructor} = course
const {courseInstructor: teacher} = course
// console.log(courseInstructor);
console.log(teacher);




