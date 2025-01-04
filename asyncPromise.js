async function fetchData(){
    let success = true;
    if(success){
        return 'success'
    }else{
        throw 'failure'
    }
}

async function display(){
    try{
        let result = await fetchData();
        console.log(result)
    }catch(error){
        console.log(error)
    }
}
display();