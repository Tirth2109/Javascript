
function myname(){
console.log("t");
}
myname()

function addtownumber(number1,number2){
console.log(number1+ number2);
 }
const result = addtownumber(3,5)






function addtownumber1(number1,number2){
   // console.log(number1+ number2);
    let resultfinal = number1 + number2
    return resultfinal
}
const resultfinal = addtownumber1(3,9)
console.log("Result:", resultfinal);






function loginusermess(username){
    if(username === undefined){
        console.log("please enterthe username");
        return
    }

    return`${username}you just logged in`
}
console.log(loginusermess("tirth wellcome "));



