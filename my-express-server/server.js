const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/contact", function(req, res){
    res.send("Contact me on lichess as WhiteBug or RL14")
})

app.get("/about", function(req, res){
    res.send("I like playing chess and football")
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})