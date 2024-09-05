// Reduce Method

const nums = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]

// const total = nums.reduce(function (acc, currVal) {
//     console.log(`Acc: ${acc} and CurrValue is ${currVal}`);
//     return acc + currVal
// }, 10)
// const total = nums.reduce( (acc, currVal) => acc + currVal, 0)

// console.log(total);


const shoppingCart = [
  {
    itemName:"JS Course",
    price: 2999
  },
  {
    itemName:"DSA Course",
    price: 4999
  },
  {
    itemName:"App Dev Course",
    price: 5999
  },
  {
    itemName:"CS Course",
    price: 12999
  }
]

const bill = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(bill);
