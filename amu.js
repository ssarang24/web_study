const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send("hello world!")
})

// {
//     const app = 10
//     console.log(app)
// }

// app.get('/', (req, res) => {
//     res.send("hello world!")
// })

app.get('/min/baboo', (req, res) => {
    res.send("드디어 해냈다!")
})

app.listen(3000, function () {
    console.log("System is working")
})