
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



function calculatecartprice(num1){
    return num1
}
console.log(calculatecartprice(20, 32, 321));

function calculatecartprice1(...num1){
    return num1
}
console.log(calculatecartprice1(20, 32, 321));







const user={
    username:"TIrth",
    price: 12123
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleobject(user)





handleobject({
    username:"sam",
    price: 111

})




const mynewarray = [200, 300, 323, 2121, 464]

function returnseondvalue(getArray){
    return getArray[1]
}

console.log(returnseondvalue(mynewarray));

