const { db } = require("../../DB")

const getPhones = (req, res) => {
    const dataForClient = db.phones.map(({ email, ...rest }) => rest)
    res.json(dataForClient)
}

const getCurrentPhone = (req, res) => {
    const { id } = req.params
    const dataForClient = db.phones.find((phone) => phone.id === +id)

    if (!dataForClient) { 
        return res.sendStatus(404)
    }
    
    setTimeout(() => {
        res.json(dataForClient)
    }, 3e3)
}

const createPhone = (req, res) => {
    const dataFromClient = req.body

    const newPhone = {
        ...dataFromClient,
        id: Date.now(),
    }

    if (dataFromClient) {
        db.phones.push(newPhone)
    }

    return res.json(newPhone)
}

const deletePhone = (req, res) => {
    const { id } = req.params
    const index = db.phones.findIndex((phone) => phone.id === +id)

    if (index > -1) {
        db.phones.splice(index, 1)
        return res.sendStatus(200)
    }
    return res.sendStatus(404)
}

const updatePhone = (req, res) => {
    const { id } = req.params
    const currentPhoneIndex = db.phones.findIndex((phone) => phone.id === +id)
    console.log(db.phones)
    console.log(id)
    console.log(currentPhoneIndex)
    console.log(req.body)
    if (currentPhoneIndex === -1) return res.sendStatus(404)

    if (!Object.values(req.body).every((value)=> !!value)) return res.sendStatus(400)

    db.phones[currentPhoneIndex] = {
        ...db.phones[currentPhoneIndex],
        ...req.body,
    }

    return res.json(db.phones[currentPhoneIndex])
}

module.exports = {
    getPhones,
    getCurrentPhone,
    createPhone,
    deletePhone,
    updatePhone,
}
