async function get_data() {
    return new Promise(() => {
        console.log("iam done now go the next  👻")
    }, 5000)
}

async function main() {
    console.log("data is proceing")
    console.log("you redy for that")

    let main_data=await get_data()
    console.log(main_data)

    console.log("now the procentin")
    console.log("the redy for all data")
    
}

main()