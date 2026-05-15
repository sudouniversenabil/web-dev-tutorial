const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public')) // for static files like css, js, images etc. in public folder

app.get('/', (req, res) => {
  res.send('hallo world it is a get request')
})
app.post('/', (req, res) => {
  console.log("hey this is a post request")
  // req.send('hallo world it is a get request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// console.log("haloo")