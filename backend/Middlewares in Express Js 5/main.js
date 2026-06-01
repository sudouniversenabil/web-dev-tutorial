const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs")
// app.use(express.static("public"))
app.use((req, res, next) => {
    console.log(req.headers)
    req.nabil="that is the time of mine"
    fs.appendFileSync("data.txt",`${Date.now()} and ${req.method}\n`)
    console.log("m1");
    next()
})
app.get('/', (req, res) => {
    res.send(`hallo world ${Date.now()}  ${req.nabil}`);
    console.log(`hallo world ${Date.now()} `)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});