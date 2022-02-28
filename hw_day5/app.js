const express = require('express')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const { db } = require('./DB')

const PORT = 3000

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(process.env.PWD, 'src', 'views'))

// this setting allows express to receive form data
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(process.env.PWD, 'public')))
// this setting allows express to receive json from fetch request
app.use(express.json())

app.get('/', (req, res) => {
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
