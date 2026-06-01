const express = require('express')
const app = express()
const port = 3000
const fs= require("fs")
app.use(express.static("public"))

// middlewares 1 - logger for outr applocaion
app.use((req,res,next)=>{
    console.log("logged m1")
    next()
})

// const myLogger = (req, res, next) => {
//     console.log('LOGGED');
//     next();
// };
// app.use(myLogger);

// middlewares 2
app.use((req,res,next)=>{
    console.log(req.headers)
    fs.appendFileSync("all_data.txt",`${Date.now()} this is a ${req.method}\n`)
    console.log(`${Date.now()} this is a ${req.method}`)
    console.log("logged m2")
    req.harry="hallo my name is harry"
    next()
})

app.get('/', (req, res) => {
    // console.log("hallo")
    res.send('Hello World!'+req.harry)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})