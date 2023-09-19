const tinderuser = new Object()

tinderuser.id ="123ddw"
tinderuser.name="tirth"
tinderuser.isLoggedIn = false
const regularuser = {
 emil: "saome@gmail.com",
 fullname:{
    userfullname:{
        fristname:"tirth",
        lastname:"patel"
    }
 }   
}
console.log(regularuser.fullname);

//console.log(tinderuser);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"t"}
// const obj3 = {obj1, obj2}     not a good syntex not a perfect method to write
const obj3 = Object.assign(obj1, obj2)
console.log(obj3);
