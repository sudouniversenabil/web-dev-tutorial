let a = prompt("input your number")

let b = prompt("input your sec number")
// if (isNaN(a) || isNaN(b)){
//     throw SyntaxError("sorry this is a sysntex eroer")
// }

let sum = parseInt(a) + parseInt(b)

console.log(sum)

let era = () => {
    let x = 4
    try {
        console.log("new number add", sum * x)
        return true

    } catch (error) {
        console.log("sorry x is not defined")
        return false
    }

    finally {
        console.log("iam finally funtion code is run ")
    }
}

let ff = era()