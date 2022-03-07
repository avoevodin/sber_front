const express = require('express')

const server = express()
const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`The server has been started on port ${PORT}`)
})
