const hero1 =[ "tirth", "megha", "deep"]
const hero2 =["mahesh", "darshana", "kalpesh", "kamani"]
hero1.push(hero2)
console.log(hero1);
console.log(hero1[3][1]);

hero1.concat(hero2)

const all_new_hero = [...hero1, ...hero2]
console.log(all_new_hero);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [67, 87]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("tirth"));
console.log(Array.from("Maheshbhai"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));