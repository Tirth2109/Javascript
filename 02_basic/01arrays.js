const myarry = [0, 1, 12, 43, 54]

console.log(myarry[4]);

//array method

myarry.push(8)
myarry.push(102)
myarry.pop()   // its remove the last value of the array
myarry.pop()


myarry.unshift(10000)
myarry.shift()


console.log(myarry.includes(1));// its show the number is in the array or not
console.log(myarry.indexOf(12));// its show the number is at which position

const newarray = myarry.join()
console.log(myarry);
console.log(newarray);

console.log("A ", myarry);

const myn1 = myarry.slice(1, 3)

console.log(myn1);
console.log("B ", myarry);


const myn2 = myarry.splice(1, 3)
console.log("C ", myarry);
console.log(myn2);


