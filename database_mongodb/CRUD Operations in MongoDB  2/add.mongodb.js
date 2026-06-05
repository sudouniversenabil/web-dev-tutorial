use("hey_this_is_the_curd")

// console.log(db)

db.createCollection("new")
db.new.insertMany([
  {
    name: "Laptop",
    price: 50000,
    tags: ["electronics", "computer", "tech"]
  },
  {
    name: "Phone",
    price: 20000,
    tags: ["electronics", "mobile", "android"]
  },
  {
    name: "Headphone",
    price: 2500,
    tags: ["audio", "music", "accessory"]
  },
  {
    name: "Keyboard",
    price: 1500,
    tags: ["computer", "gaming", "accessory"]
  }
])

// db.new.insertOne({p:10})

// db.new.insertOne({name:"raja"})

let a = db.new.find({price:2000})

console.log(a)

// console.log(a.count())
console.log(a.toArray())