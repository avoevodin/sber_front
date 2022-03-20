const express = require('express')
const { db } = require('../../DB')
const { getPhones, getCurrentPhone, createPhone, updatePhone, deletePhone } = require('../controllers/phonesController')
const phonesRouter = express.Router()

phonesRouter.route('/')
    .get(getPhones)
    .post(createPhone)

phonesRouter.route('/:id')
    .get(getCurrentPhone)
    .patch(updatePhone)
    .delete(deletePhone)

module.exports = {
    phonesRouter,
}
