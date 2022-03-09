const express = require('express')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const hbs = require('hbs')
const bcrypt = require('bcrypt')
const sessions = require('express-session')
const { db } = require('./DB')
const { checkAuth } = require('./src/middlewares/checkAuth')

const PORT = process.env.PORT || 3000
const saltRounds = 10

const app = express()
const secretKey = uuidv4()

app.set('view engine', 'hbs')
app.set('views', path.join(process.env.PWD, 'src', 'views'))
app.set('cookieName', 'sid')
hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials'))

// this setting allows express to receive form data
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(process.env.PWD, 'public')))
// this setting allows express to receive json from fetch request
app.use(express.json())
app.use(sessions({
  name: app.get('cookieName'),
  secret: secretKey,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 86400 * 1e3,
  },
}))

app.use((req, res, next) => {
  const currentEmail = req.session?.user?.email

  if (currentEmail) {
    const currentUser = db.users.find((user) => user.email === currentEmail)
    res.locals.name = currentUser.name
  }

  next()
})

app.get('/homepage', (req, res) => {
  res.render('mainPublic')
})

app.get('/', checkAuth, (req, res) => {
  const usersQuery = req.query
  let postsForRender = db.posts
  if (usersQuery.reverse === 'true') {
    postsForRender = postsForRender.slice().reverse()
  }

  if (usersQuery.limit !== undefined && Number.isNaN(+usersQuery.limit) === false) {
    postsForRender = postsForRender.slice(0, usersQuery.limit)
  }
  res.render('main', { listOfPosts: postsForRender })
})

app.get('/auth/signup', (req, res) => {
  res.render('signUp')
})

app.post('/auth/signup', async (req, res) => {
  const {
    email, name, avatar, password,
  } = req.body
  const hashPass = await bcrypt.hash(password, saltRounds)
  db.users.push({
    email,
    name,
    avatar,
    password: hashPass,
  })

  req.session.user = {
    email,
  }

  res.redirect('/')
})

app.get('/auth/login', (req, res) => {
  res.render('login')
})

app.post('/auth/login', async (req, res) => {
  const {
    email, password,
  } = req.body
  const currentUser = db.users.find((user) => user.email === email)

  if (currentUser && await bcrypt.compare(password, currentUser.password)) {
    req.session.user = {
      email,
    }
  }

  return res.redirect('/')
})

app.get('/auth/logout', (req, res) => {
  req.session.destroy((err) => {
    if (!err) res.clearCookie(req.app.get('cookieName'))
    return res.redirect('/')
  })
})

app.post('/addpost', (req, res) => {
  const formData = req.body
  const currentDate = new Date()

  formData.date = `${currentDate.toDateString()} ${currentDate.toLocaleTimeString()}`
  formData.id = uuidv4()
  formData.rating = 0
  db.posts.push(formData)

  res.redirect('/')
})

app.patch('/like/:id', (req, res) => {
  const { id } = req.params
  const { like } = req.body
  const currentPost = db.posts.find((el) => el.id === id)

  if (like === 'like') {
    currentPost.rating += 1
  } else if (like === 'dislike') {
    currentPost.rating -= 1
  }

  res.json({
    rating: currentPost.rating,
  })
})

app.get('*', (req, res) => {
  res.render('404')
})

app.listen(PORT, () => {
  console.log(`The server has been started on port: ${PORT}`)
})
