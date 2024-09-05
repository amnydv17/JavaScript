const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift"
}

// use forin loop
// for (const key in myObject) {
//   // console.log(key);
//   // console.log(myObject[key]);
//   console.log(`${key} is shortcut for ${myObject[key]}`);
// }

const programming = ['js', 'rb','py','java','cpp']

// for (const key in programming) {
//   // console.log(key);
//   console.log(programming[key]);
// }


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('Fr', "France")


for (const key in map) {
  console.log(key);
}