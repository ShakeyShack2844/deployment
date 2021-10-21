const express = require('express')
const path = require('path')

const app = express()

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../index.html"))

})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.css'))
  })

  
const port = process.env.PORT || 4444

app.listen(port, () => console.log(`Take us to warp ${port}`))