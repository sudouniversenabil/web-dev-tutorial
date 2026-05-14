const exp = require('express');
const app = exp();
const port = 3000;
app.use(exp.static('public')) // for static files like css, js, images etc. in public folder
app.get("/", (req, res) => {
  res.send("this is mine");
})

app.get("/nabil/:name", (req, res) => {
  // res.send("this is nabil");
  res.send(`this is nabil, ${req.params.name}!`);
  console.log(req.params) // will output { slug: 'intro-to-padosi' }
  console.log(req.query) // will output { mode: 'dark', region: 'in' }
  // console.log(req)

})
app.get("/sikder", (req, res) => {
  res.send("this is sikder");
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})