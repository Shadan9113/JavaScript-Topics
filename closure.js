function outerFunction(){
    let outerVariable = "i am from outside"

    function innerFunction(){
        console.log(outerVariable)
    }
    return innerFunction;
}
let closureFunction = outerFunction();
closureFunction();