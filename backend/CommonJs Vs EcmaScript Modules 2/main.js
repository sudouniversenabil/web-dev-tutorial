const fs =require("fs")

fs.writeFile("test.txt","hallo name is nabil",()=>{
    console.log("the file is done by me")
    fs.readFile("test.txt",(er,data)=>{
        console.log(er,data.toString())
    })
})

console.log("done")


fs.appendFile("test.txt","\niam my first love is allah and my nabi muhammad",(e,d)=>{
    console.log(d)
})