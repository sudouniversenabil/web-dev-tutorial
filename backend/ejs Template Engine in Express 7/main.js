const express = require('express');
const app = express();
const port = 3000;
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.set("view engine", "ejs")
app.get('/', (req, res) => {
  let nabil ="nabil"
  let kobita= "kobita"
  res.render('index',{nabil:nabil,kobita:kobita});
});

app.get('/blog/:sulg', (req, res) => {
  let nabil =req.params.sulg
  let kobita= "kobita"
  res.render('index',{nabil:nabil,kobita:kobita});
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});