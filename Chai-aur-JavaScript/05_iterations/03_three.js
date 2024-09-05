// for of loop
// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]
// for (const val of arr) {
//   console.log(val);
// }

const greetings = "Hello, World!"
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

// Map--- hold key-value pair and remmember insertion order and hold unique value
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
// map.set('Fr', "France")


console.log(map);
for (const [key, value] of map) {
  console.log(key, ':-', value);
}


// const myObject = {
//   'game1': "NFS",
//   'game2': "Spiderman"
// }
// const myObject = {
//   game1: "NFS",
//   game2: "Spiderman"
// }

for (const [key, value] of myObject) {
   console.log(key, ':-', value);
}


// using for loop of forof loop we can not itrate on object