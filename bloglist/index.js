require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const morgan = require('morgan')
const cors = require('cors')
const Blog = require('./models/blog')

const mongoUrl = process.env.MONGODB_URI
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const { title, author, url, likes } = request.body
  const blog = new Blog({ title, author, url, likes })

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})