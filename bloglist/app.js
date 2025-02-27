const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()

const mongoose = require('mongoose')
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const logger = require('./utils/logger')
const morgan = require('morgan')
const middleware = require('./utils/middleware')

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
app.use(middleware.errorHandler)

module.exports = app
