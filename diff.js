// synchronous

console.log('task begins');
console.log('task performing');
console.log('task end');

// asynchronous

console.log('start');
setTimeout(()=>{
    console.log('taking some time')
},2000);
console.log('end');
