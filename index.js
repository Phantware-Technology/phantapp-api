const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
require('dotenv').config()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to PhantApp API..')
})
const PORT = process.env.PORT || 5000

const connect = async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Connected to mongoDB.')
  } catch (error) {
    throw error
  }
}
mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!')
})

app.listen(PORT, () => {
  connect()
  console.log(`App running at port ${PORT}`)
})
