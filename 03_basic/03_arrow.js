const user = {
    username: "tirth",
    price: 22323,

    welcomemessage:function(){
        console.log(`${this.username},welcome to my website`);
        console.log(this);
    }
}
user.welcomemessage()
user.username= "megha"
user.welcomemessage()
console.log(this);








function chai(){
    let username= "tirth patel"
    console.log(this.username); // not define by this key word
}
chai()


const chai1 = () => {
    let username= "patel tirth"
    console.log(this);
}
chai1()




const addtwo = (num1, num2) => {
    return num1 + num2
}
console.log(addtwo(3,6));

//inplicit return
const addone = (num1, num2) => num1 + num2

console.log(addone(3,62));
// if we use {curly bracket} then we write return
// if we use (bracket) then we can't write return 


const myarray = [2,3,4,56,76]

