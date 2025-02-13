const config = require('./utils/config')
const express = require('express')
const app = express()

const mongoose = require('mongoose')
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const logger = require('./utils/logger')
const morgan = require('morgan')

logger.info('connecting to mongodb')
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to mongodb')
  })
  .catch(error => {
    logger.error('error connectiong mongodb', error.message)
  })

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/blogs', blogsRouter)

module.exports = app
