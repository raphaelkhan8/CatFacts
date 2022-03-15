const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 3001
const { catFactsRouter } = require('./routes/catFacts')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/getCatFacts', catFactsRouter)

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"))
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})