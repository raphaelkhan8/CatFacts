const express = require('express')
const { catFactsRouter } = require('./routes/catFacts')
const app = express()
const port = 3001

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/getCatFacts', catFactsRouter)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})