let promise1 = 3;
let promise2 = 42;
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("shaddy")
    },2000)
})
Promise.all([promise1,promise2,promise3]).then((result)=>{
    console.log(result)
})