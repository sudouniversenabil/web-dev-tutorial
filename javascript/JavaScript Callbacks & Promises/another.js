let commad = prompt("input your own commad")
function pizza(food) {
    console.log("that is your right plsese for " + food)
    console.log("plese wait for few sec")
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (commad == "yes") {
                resolve("your pizza is goning on ")

            } else {
                reject("sorry your pizza is not made or no more plese try again")
            }
        }, 3000)
    })
}

pizza("kola").then((first) => {
    setTimeout(() => {

        console.log(first)
    }, 2000)
    return "iam next for promice"
}).then((sec) => {
    setTimeout(() => {


        console.log(sec)
    }, 2000)
    return "iam thard"
}).then((tra) => {
    setTimeout(() => {


        console.log(tra)
    }, 2000)
}).catch((err) => {
    console.log(err)
})