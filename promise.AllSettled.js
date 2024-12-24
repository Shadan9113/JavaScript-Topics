let promise1 = 32;
let promise2 = 34;
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(reject, 200, "reject")
})
Promise.allSettled([promise1,promise2,promise3]).then((results)=>{
    results.forEach((result)=>{
        console.log(result.status === "fulfilled" ? result.value : result.reason) 
    })
})