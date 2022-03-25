const { db } = require("../../DB")

const getPhones = (req, res) => {
    const filter = req.query.filter && JSON.parse(req.query.filter)
    let dataForClient = db.phones
    if (filter) {
        const searchRegExp = new RegExp(filter.search, "i")
        dataForClient = dataForClient.filter((phone) => searchRegExp.test(phone.name))
    }

    dataForClient = dataForClient.map(({email, ...rest}) => rest)
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
    }, 1e3)
}

const createPhone = (req, res) => {
    const dataFromClient = req.body

    if (!Object.values(req.body).every((value)=> !!value)) return res.sendStatus(400)

    const newPhone = {
        ...dataFromClient,
        id: Date.now(),
    }

    if (dataFromClient) {
        db.phones.push(newPhone)
    }

    return res.status(201).json(newPhone)
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
