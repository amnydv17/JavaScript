// for loop

// for (let index = 0; index <= 10; index++) {
//   const element = index;
//   if (element == 5) {
//     console.log("5 is a best number.");
//   }
//   console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`Table of ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner Loop value is ${j}`);
//     console.log(i + '*' + j  + ' = ' + i*j);
//   }
// }

// let myArray = ["flash", "batman", "superman"]
// console.log(`Array length is ${myArray.length}`);

// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }


// break and Continue

// for (let index = 1; index < 21; index++) {
//   const element = index;
//   if (element == 5) {
//     console.log("5 is detected.Break");
//     break
//   }
//   console.log(`Value of index is ${element}`);
// }

for (let index = 1; index < 21; index++) {
  const element = index;
  if (element == 5) {
    console.log("5 is detected.Break");
    continue
  }
  console.log(`Value of index is ${element}`);
}