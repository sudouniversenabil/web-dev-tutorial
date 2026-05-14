import {fs} from "fs/promises"

let a =await fs.readFile("test.txt")

console.log(a)