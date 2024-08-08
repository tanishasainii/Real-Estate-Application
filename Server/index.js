const express = require('express')
const cors = require('cors')
require('dotenv').config({ path: "./.env" })
const connectDB = require('./config/connectDb.js')

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}))

app.use(express.json())
const PORT = process.env.PORT || 8080

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server running at " + PORT)
    })
}).catch(error => {
    console.error("Database connection failed:", error)
})