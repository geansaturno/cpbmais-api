const express = require('express')
const router = express.Router()

const meditations = require('../data/meditations')

router.get('/meditations', (_, res) => {
  res.send(meditations.map(meditation => meditation.id))
})

router.get('/meditations/:id', (req, res) => {
  const { params: { id } } = req
  res.send(meditations.find(meditation => meditation.id === id))
})

module.exports = router
