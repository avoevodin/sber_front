const express = require('express')
const path = require('path')
const hbs = require('hbs')

const server = express()
const PORT = process.env.PORT || 3000

server.set('view engine', 'hbs')
server.set('views', path.join(process.env.PWD, 'src', 'views'))
hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials'))

server.get('/', (req, res) => {
  res.render('main')
})

server.listen(PORT, () => {
  console.log(`The server has been started on port ${PORT}`)
})
