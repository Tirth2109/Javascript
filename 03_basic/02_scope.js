
let a = 300
if (true){
    let a = 20
    const b = 34
    console.log("inner: ", a);

}


    

console.log(a);
//console.log(c);
//console.log(b);

function one(){
    const username = "tirth"
    function two(){
        const website = "youtube"
        console.log(username);
    }
   // console.log(website);

    two()
}
one()

if (true){
    const username ="tirth"
    if(username==="tirth"){
        const website = "youtube"
        console.log(username + website);
    }
}