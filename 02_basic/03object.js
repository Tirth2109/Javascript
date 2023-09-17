// singleton

//object literals

const mysyn = Symbol("key1")

const jsuser = {
    name: "tirth",
    age: 20,
    socirty: "kadi",
    email: "tirth@MessageChannel.com",
    [mysyn]: "mykey1"
}

console.log(jsuser.age);
console.log(jsuser["name"]);
console.log(jsuser[mysyn]);

jsuser.email = "tirth@megha.com"
//     Object.freeze(jsuser)
jsuser.email = "jrifrreh"
console.log(jsuser);


jsuser.greeting =function() {
    console.log("HEllo js my faverate");
}
jsuser.greetingtwo =function() {
    console.log(`HEllo js my faverate, ${this.socirty}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());