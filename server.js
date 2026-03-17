const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authRoutes = require("./routes/auth")

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static("public"))

mongoose.connect("mongodb://127.0.0.1:27017/iberttech", {
 useNewUrlParser: true,
 useUnifiedTopology: true
})

.then(()=> console.log("MongoDB Connected"))

app.use("/api/auth", authRoutes)

app.listen(5000, () => {
 console.log("Server running on port 5000")
})