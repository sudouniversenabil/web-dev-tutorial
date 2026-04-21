// let obj ={
// a:1,
// b:"nabil"
// }

// console.log(obj)

// let animal ={
//     eats :true
// }

// let rabbit={
// jumps:true
// }

// rabbit.__proto__=animal // that is a proto type funtion 


// console.log(rabbit)

class animal {
    constructor(name) {
        this.nam = name
        // this.jara=jara
        console.log("this object is create done...", " and my name is lion " + name)
    }

    eats() {
        console.log("ami js laer n korte")
    }
    pytohn() {
        console. log("my favrete language is python ")
    }
}

class king_lion extends animal {
    constructor(name, jara) {
        super(name)
        this.nam = name
        this.jara = jara
        console.log("this object is create done...", " and my name is rabbit " + name + jara)
    }

    pytohn() {

        super.pytohn()
        console. log("my favrete language is python  and iam also lern js for some munny")
    }

}

let a = new animal("bunny")

a.name = "raja"

let b = new king_lion("sera", "nabil")
console.log(a)
console.log(b)

// console.log(the)



