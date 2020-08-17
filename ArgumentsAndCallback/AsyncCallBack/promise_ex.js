const operation = new Promise((resolve,reject)=>{
    const i = process.argv[2]
    setTimeout(()=>{
        if(i>9){
            resolve("Success")
        }
        else{
            reject("Failure")
        }
    },1000)
})

operation.then((result)=>{
    console.log("Result: "+ result)
}).catch((error)=>{
    console.log("Error: "+ error)
})

console.log("Main Thread")