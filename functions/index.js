const functions = require('firebase-functions')

// building express app to be hosted on firebase
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

// app configuration
const app = express()

// middleware
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
app.get('/', (req, res) => {
  res.status(200).send('Hello from Firebase!')
})

app.post('/payments/create', async (req, res) => {
  const total = req.query.total
  console.log('Payment request received!', total)

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: 'usd',
    })
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    console.log('Payment Error: ', error)
    res.status(500).send({ error: error.message })
  }
})

// listen
exports.api = functions.https.onRequest(app)

// Example endpoint: http://localhost:5001/with-a-twist-330bf/us-central1/api/
