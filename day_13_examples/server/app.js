const express = require('express')
const cors = require('cors')
const { phonesRouter } = require('./src/routes/phonesRouter')
const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/v1/phones', phonesRouter)

app.listen(PORT, () => {
    console.log(`The server has been started on port ${PORT}`)
})
