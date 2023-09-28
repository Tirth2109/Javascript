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


const chai = () => {
    let username= "patel tirth"
    console.log(this.username);
}
chai()