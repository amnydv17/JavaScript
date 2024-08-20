const name = "Aman"
const repoCount = 18

// console.log(name + repoCount + " Have Repo");

// modern use is backticks     ` `
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// declaration of string new keyword
const gameName = new String("aman-yadav");

console.log(gameName[4]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(7));
console.log(gameName.indexOf('d'));

const newGame = gameName.substring(0,4);
console.log(newGame);

const otherGameName = gameName.slice(-10, 5);
console.log(otherGameName);


const spaceName = "    aman    "
console.log(spaceName);
console.log(spaceName.trim());


const url = "https://aman.com/aman%17yadav";
console.log(url.replace('%17', '@'))
console.log(url.includes('@'));
console.log(url.includes('%'));

console.log(gameName.split('-'));










