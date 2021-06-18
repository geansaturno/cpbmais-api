const express = require('express')
const app = express()
const port = 3000

const meditationRoutes = require('./routes/meditations')

app.use(meditationRoutes)

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`)
})
