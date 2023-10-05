


(function chai(){
    // also called as name iife
    console.log(`DB CONNECTED`);

})();
// use ;  to add a new function in the symbol function





// globle scope ka polluction sa problam ho ti ha kai bar    to remove the variable in the globle scope

((name) => {
    //  also called symbol iife  of all
    console.log(`Db connected of are and  two${name}`);
})('tirth')