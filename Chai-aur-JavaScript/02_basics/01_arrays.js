// array

const myArr = [10, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1,2,3,4,5,6,7,8)
console.log(myArr2);


// &&&&&&&&&&&&&&&&&    Array Methods    &&&&&&&&&&&&&&

// myArr.push(11)      // add element at last
// myArr.pop()           // remove last element

// myArr.unshift(1)     // add element at starting and shift all element 
// myArr.shift(1)     // remove element from starting and shift all element 

// console.log(myArr.includes(4)); //give bool type answer means present or not
// console.log(myArr.indexOf(10));  // give index of value 10


const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);    // value return in string format



//  Slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1,4)   //only print array index 1,2,3 not 4 and do not change orignal array 
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,4)  //print array index 1,2,3,4 and do change orignal array like remove index value that are given in splice 
console.log(myn2);

console.log("C", myArr);