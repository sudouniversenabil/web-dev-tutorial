let aa= prompt("input your work name")
const pro = new Promise(function(resolve,reject){
    if (aa.length==4){
        resolve("work done")
    }else{
        reject("my work fuck me 😵 ")
    }
})

pro.then(function(result){
    console.log(result)
}).catch(function(error){
    console.log(error)
})