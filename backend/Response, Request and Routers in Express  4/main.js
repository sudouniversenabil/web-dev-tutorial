const express = require('express')
const app = express()
const port = 3000
// const local=173.1
app.use(express.static('public')) // for static files like css, js, images etc. in public folder

app.get('/', (req, res) => {
  res.send('hallo world it is a get request')
})
app.post('/', (req, res) => {
  console.log("hey this is a post request")
  res.send('hallo world it is a post request')
})
app.put('/', (req, res) => {
  console.log("hey this is a put request")
  res.send('hallo world it is a put request')
})

// app.delete('/', (req, res) => {
//   console.log("hey this is a delete request")
//   res.send('hallo world it is a delete request')
// })

app.get("/bolog", (req, res) => {
  res.sendFile("templete/bolog.html",{root:__dirname})
  console.log("done")
})

app.get("/api",(req,res)=>{
  res.json({a:"nabil",b:"sikder",c:"hallo word",g:["kobita","tasnin"]})
  console.log("ok your api is done")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// console.log("haloo")


// https://youtu.be/P_17PQFpIAY?si=aHM7ifIEA_I9IS9m