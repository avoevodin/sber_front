const WebSocket = require('ws')
const express = require('express')
const http = require('http')
const path = require('path')
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
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }
    message.name = messageAuthor.name
    message.avatar = messageAuthor.avatar
    message.date = new Date(message.date).toLocaleDateString('ru-RU', options)
  })
  res.render('main', { allMessages })
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
        parsedMessage.date = Date.now()

        db.chat.push(parsedMessage)

        // Why couldn 't we do like that?
        map.forEach((client, clientId) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
              type: 'Text',
              avatar: messageAuthor.avatar,
              name: messageAuthor.name,
              text: parsedMessage.text,
              date: parsedMessage.date,
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
