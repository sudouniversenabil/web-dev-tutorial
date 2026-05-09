// async function get_data() {
//     return new Promise((res,rej) => {
//         setTimeout(() =>{

//             res("now that os 👻 ")
//         }

//         ,3500)
//     })
// }


async function get_data() {
    // return new Promise((res, rej) => {

        let wki = await fetch('https://www.accuweather.com/en/bd/barishal/27110/weather-forecast/27110')
        let data = await wki.text()
        console.log(data)
        return "iam the return"

}


async function main() {
    console.log("data is proceing")
    console.log("you redy for that")

    let main_data = await get_data()
    console.log(main_data)

    console.log("now the procentin")
    console.log("the redy for all data")

}

main()