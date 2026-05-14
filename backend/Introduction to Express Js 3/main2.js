const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! can you see me')
})
app.get('/nabil', (req, res) => {
  res.send('this is nabil')
})
app.get('/sikder', (req, res) => {
  res.send('we are sikder')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
