function greet(name,callback){
    console.log(`Hello ${name}`)
    callback();
}
function sayGoodBye(){
    console.log("Goodbye")
}
greet("Shaddy",sayGoodBye);