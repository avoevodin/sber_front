const express = require('express')
const { db } = require('../../DB')
const phonesRouter = express.Router()

phonesRouter.get('/', (req, res) => {
    const dataForClient = db.phones.map(({ email, ...rest }) => rest)
    res.json(dataForClient)
})

phonesRouter.get('/:id', (req, res) => {
    const { id } = req.params
    const dataForClient = db.phones.find((phone) => phone.id === +id)

    if (!dataForClient) { 
        return res.sendStatus(404)
    }
    
    setTimeout(() => {
        res.json(dataForClient)
    }, 3e3)
})

phonesRouter.post('/', (req, res) => {
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

phonesRouter.delete('/:id', (req, res) => {
    const { id } = req.params
    const index = db.phones.findIndex((phone) => phone.id === +id)

    if (index > -1) {
        db.phones.splice(index, 1)
        return res.sendStatus(200)
    }
    return res.sendStatus(404)
})

module.exports = {
    phonesRouter,
}
