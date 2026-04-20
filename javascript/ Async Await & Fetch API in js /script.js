// post requsest and getrequst


fetch('https://example.com/api', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Nabil",
    email: "nabil@gmail.com"
  })
})
.then(res => res.json())
.then(data => console.log(data))