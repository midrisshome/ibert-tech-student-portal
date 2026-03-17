const mongoose = require("mongoose")

const ResultSchema = new mongoose.Schema({

studentId:String,
courseCode:String,
grade:String,
semester:String

})

module.exports = mongoose.model("Result",ResultSchema)