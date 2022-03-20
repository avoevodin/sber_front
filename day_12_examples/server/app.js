const express = require('express')
const cors = require('cors')
const { db } = require('./DB')
const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/v1/phones', (req, res) => {
    const dataForClient = db.phones.map(({ email, ...rest }) => rest)
    res.json(dataForClient)
})

app.get('/api/v1/phones/:id', (req, res) => {
    const { id } = req.params
    const dataForClient = db.phones.find((phone) => phone.id === +id)

    if (!dataForClient) { 
        return res.sendStatus(404)
    }
    
    setTimeout(() => {
        res.json(dataForClient)
    }, 3e3)
})

app.post('/api/v1/phones/', (req, res) => {
    const dataFromClient = req.body

    const newPhone = {
        ...dataFromClient,
        id: Date.now(),
    }

    if (dataFromClient) {
        db.phones.push(newPhone)
    }

    return res.json(newPhone)
})

app.delete('/api/v1/phones/:id', (req, res) => {
    const { id } = req.params
    const index = db.phones.findIndex((phone) => phone.id === +id)

    if (index > -1) {
        db.phones.splice(index, 1)
        return res.sendStatus(200)
    }
    return res.sendStatus(404)
})

app.listen(PORT, () => {
    console.log(`The server has been started on port ${PORT}`)
})

module.exports = {
    db
}
