// %%%%%%%%%%%%%%     DATE    *********************

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2024, 2, 17);
// let myCreatedDate = new Date(2024, 2, 17,11,22);
// let myCreatedDate = new Date("2024-2-17");
let myCreatedDate = new Date("2-26-2024");
// console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now() // give value in miliseconds
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(timeStamp/1000));  // value in seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// console.log(`${newDate.getDay() + 1} and the time is`);

newDate.toLocaleString('default', {
  weekday:"long"
})