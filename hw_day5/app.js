const { response } = require('express')
const express = require('express')
const path = require('path')

const PORT = 3000

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src', 'views'))

app.get('/', (req, res) => {
  res.render('main')
})

app.get('*', (req, res) => {
  res.render('404')
})

app.listen(PORT, () => {
  console.log(`The server has been started on port: ${PORT}`)
})
