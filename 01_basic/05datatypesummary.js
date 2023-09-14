//primitive
// 7 type : string , number , boolearn, null, undefined, symbol, bigint

// reference (non primitive)
// array, object, functions

const score = 100
const scorevalue = 100.98
const isloggedin = false
const outsidetemp = null

const id = Symbol('231')

const hero = ["tirth", "megha"]
let myobj = {
    name: "tirth"

}
const myfunction = function(){
    console.log("hello India");
}
//********************************
//stack

let myyoutubename = "tirth"
let anothername = myyoutubename
console.log(anothername);

let userone ={
    email: "user@google.com",
    upi: "tirth123"
}
let usertwo = userone
usertwo.email = "tirthdsdkjdvj.com"

console.log(userone);
console.log(usertwo);