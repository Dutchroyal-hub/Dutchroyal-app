const express = require("express")
const app = express()
const connectDB = require("./config/config")
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')


connectDB();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello DutchRoyal')
})

const PORT = process.env.PORT || 1180

// const router = require("./src/router/userrouter")

app.use(cors())
// app.use("/api",router)


app.listen(PORT,() => {
    console.log(`app is listening on port ${PORT}`)
})