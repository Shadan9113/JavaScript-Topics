async function fetchData(){
    let promise =  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve ("data fetch successfully")
        },2000)
    })
    let result = await promise;
    console.log(result)
}
fetchData();