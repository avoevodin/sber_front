const WebSocket = require('ws')
const express = require('express')
const http = require('http')
const path = require('path')

const { text } = require('express')
const { db } = require('./DB')

const PORT = process.env.PORT ?? 3000
const app = express()
const map = new Map()

app.set('view engine', 'hbs')
app.set('views', path.join(process.env.PWD, 'src', 'views'))
app.set('trust proxy', 1)
app.use(express.static(path.join(process.env.PWD, 'public')))

app.get('/', (req, res) => {
  const allMessages = JSON.parse(JSON.stringify(db.chat))
  allMessages.forEach((message) => {
    const messageAuthor = db.people.find((el) => el.id === message.personId)
  })
  res.render('main')
})

const server = http.createServer(app)
const wss = new WebSocket.Server({ clientTracking: false, noServer: true })

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request)
  })
})

wss.on('connection', (ws, request) => {
  ws.on('message', (message) => {
    const parsedMessage = JSON.parse(message)
    console.log(parsedMessage)
    switch (parsedMessage.type) {
      case 'SignUp': {
        map.set(parsedMessage.id, ws)

        const clonedPerson = { ...parsedMessage }
        delete clonedPerson.type
        db.people.push(clonedPerson)

        map.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
              type: 'SignUp',
              name: parsedMessage.name,
              avatar: parsedMessage.avatar,
            }))
          }
        })
        break
      }
      case 'Text': {
        const messageAuthor = db.people.find((el) => el.id === parsedMessage.personId)

        map.forEach((client, clientId) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
              type: 'Text',
              avatar: messageAuthor.avatar,
              name: parsedMessage.name,
              text: parsedMessage.text,
              date: Date.now(),
              isAuthor: parsedMessage.personId === clientId,
            }))
          }
        })
        break
      }
      default: {
        break
      }
    }
  })

  ws.on('close', () => {

  })
})

server.listen(PORT, () => {
  console.log(`The server has been started on port: ${PORT}`)
})
