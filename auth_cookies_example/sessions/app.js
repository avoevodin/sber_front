const express = require('express')
const path = require('path')
const hbs = require('hbs')
const sessions = require('express-session')
const bcrypt = require('bcrypt')
const { db } = require('./DB')
const { checkAuth } = require('./src/middlewares/checkAuth')

const server = express()
const PORT = process.env.PORT || 3000
const secretKey = 'asdfkas;gakjg;wreajg;'
const saltRounds = 10

server.set('view engine', 'hbs')
server.set('views', path.join(process.env.PWD, 'src', 'views'))
server.set('cookieName', 'sid')
hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials'))

server.use(express.urlencoded({ extended: true }))
server.use(sessions({
  name: server.get('cookieName'),
  secret: secretKey, // this secret key will encrypt user's session id
  resave: false, // don't save unchanged session if false
  saveUninitialized: false, // save empty session if false
  cookie: { // settings for cookies
    // secure: false, // only https if true
    httpOnly: true, // deny to change cookie from client's js if true
    maxAge: 86400 * 1e3, // expiration time
  },
}))
server.use((req, res, next) => {
  const currentEmail = req.session?.user?.email

  if (currentEmail) {
    const currentUser = db.users.find((user) => user.email === currentEmail)
    res.locals.name = currentUser.name
  }

  next()
})

server.get('/', (req, res) => {
  res.render('main')
})

server.get('/auth/signup', (req, res) => {
  res.render('signUp')
})

server.post('/auth/signup', async (req, res) => {
  const { email, name, password } = req.body
  const hashPass = await bcrypt.hash(password, saltRounds)

  db.users.push({
    name,
    email,
    password: hashPass,
  })

  req.session.user = {
    email,
  }

  res.redirect('/')
})

server.get('/auth/signin', (req, res) => {
  res.render('signIn')
})

server.post('/auth/signin', async (req, res) => {
  const { email, password } = req.body
  const currentUser = db.users.find((user) => user.email === email)

  if (currentUser && await bcrypt.compare(password, currentUser.password)) {
    req.session.user = {
      email,
    }
  }

  res.redirect('/')
})

server.get('/auth/signout', (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.redirect('/')
    res.clearCookie(server.get('cookieName'))
    return res.redirect('/')
  })
})

server.get('/secret', checkAuth, (req, res) => {
  res.render('secret')
})

server.listen(PORT, () => {
  console.log(`The server has been started on port ${PORT}`)
})
