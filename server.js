// Start Express Server
const express = require('express')
const app = express()
const port = 7576



app.use(express.static('public'))


app.listen(port, () => console.log(`Server started on address http://localhost:${port}`))
