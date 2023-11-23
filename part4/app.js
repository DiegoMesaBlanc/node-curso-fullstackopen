require('express-async-errors')

const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const blogRouter = require('./controllers/blog')
const loginRouter = require('./controllers/login')

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })


// Middlewares
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

// Routes
app.use('/api/login', loginRouter)
app.use('/api/blogs', blogRouter)

// Middleware despues de las rutas
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app