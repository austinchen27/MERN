const express = require("express")
const app = express()

require('./config/mongoose.config')

app.use(express.json(), express.urlencoded({ extended: true }))

const AllMyJokesRoutes = require('./routes/jokes.routes')
AllMyJokesRoutes(app)

app.listen(8001, () => console.log("The server is up on port 8001"))