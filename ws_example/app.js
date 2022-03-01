const express = require('express')
const http = require('http')
const path = require('path')
const WebSocket = require('ws')

const { db } = require('./DB')

const PORT = 3000
const app = express()
const server = http.createServer(app)
const map = new Map()

app.set('view engine', 'hbs')
app.set('views', path.join(process.env.PWD, 'src', 'views'))
app.use(express.static(path.join(process.env.PWD, 'public')))

app.get('/', (req, res) => {
  res.render('main')
})

const wss = new WebSocket.Server({ clientTracking: false, noServer: true })

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request)
  })
})

wss.on('connection', (ws, request) => {
  map.set(userId, ws)
  ws.on('message', (message) => {
    console.log(`Receive message ${message} from user ${userId}`)
  })
})

app.listen(PORT, () => {
  console.log(`The server has been started on port: ${PORT}`)
})
