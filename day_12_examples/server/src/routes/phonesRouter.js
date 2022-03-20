const express = require('express')
const { db } = require('../../DB')
const { getPhones, getCurrentPhone, createPhone, updatePhone, deletePhone } = require('../controllers/phonesController')
const phonesRouter = express.Router()

phonesRouter.get('/', getPhones)

phonesRouter.get('/:id', getCurrentPhone)

phonesRouter.post('/', createPhone)

phonesRouter.patch('/:id', updatePhone)

phonesRouter.delete('/:id', deletePhone)

module.exports = {
    phonesRouter,
}
