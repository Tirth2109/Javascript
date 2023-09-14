const name = "Tirth"
const repocount = 50

console.log(`hello my name is ${name} and my repocount is ${repocount}`); 
const game = new String('Tirth')
console.log(game[0]);

console.log(game.charAt(2));
console.log(game.indexOf('T'));

const newString = game.substring(0, 4)
console.log(newString);
const anotherString = game.slice(-4, 4)
console.log(anotherString);

const newStringone = "    tirth   "
console.log(newStringone);
console.log(newStringone.trim());