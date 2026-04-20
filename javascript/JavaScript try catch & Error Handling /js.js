let a = prompt("input the sec number")
let b =prompt("input the sec number")

let sum = parseInt(a)+parseInt(b)
if (isNaN(a) || isNaN(b)){
    throw SyntaxError("this is a wong input plese input the number type")
}else{
console.log("sum is ",sum)
}