import fs from "fs/promises"

console.log(fs)

let a =await fs.readFile("test.txt")

let b= await fs.appendFile("test.txt","\nhallo this is another append")

console.log(a.toString())