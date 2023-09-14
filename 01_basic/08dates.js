let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(typeof mydate);
let mycreatdate1 = new Date(2023, 0, 23)
console.log(mycreatdate1.toDateString());

let mycreatdate = new Date(2023, 0, 23, 5, 8)
console.log(mycreatdate.toLocaleString());
let mycreatdate2 = new Date("01-23-2023")

let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(mycreatdate2.getTime());

console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getHours());
console.log(newdate.getMonth()+1);