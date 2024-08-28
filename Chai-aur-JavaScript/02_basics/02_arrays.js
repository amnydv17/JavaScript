const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   // add dc_heros as a array in marvel array means array within array and do operation on existing array
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);
// const all_heros = marvel_heros.concat(dc_heros)  // return new array with combine two array
// console.log(all_heros);


const allNewHeros = [...marvel_heros, ...dc_heros] // same as concat
// console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[8,9,[11,12]]]

const usable_another_array = anotherArray.flat(Infinity) // flat all mixed array
// console.log(usable_another_array);

console.log(Array.isArray("Aman"));  // false
console.log(Array.from("Aman"));     // ['A','m','a','n']
console.log(Array.from({name:"Aman"}));  // intresting ???

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


