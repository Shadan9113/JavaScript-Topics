const myPromise = new Promise((resolve, reject) =>{
    const success = true;

    if(success){
        resolve("operation success")
    }else{
        reject("failed")
    }
})
myPromise
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})