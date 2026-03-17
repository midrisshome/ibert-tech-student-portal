const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const authRoutes = require("./routes/auth")
const courseRoutes = require("./routes/courses")
const resultRoutes = require("./routes/results")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))

app.use("/api/auth",authRoutes)
app.use("/api/courses",courseRoutes)
app.use("/api/results",resultRoutes)

app.listen(process.env.PORT,()=>{
console.log("Server running")
})