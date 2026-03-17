const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({

courseCode:String,
courseName:String,
lecturer:String,
students:[String]

})

module.exports = mongoose.model("Course",CourseSchema)