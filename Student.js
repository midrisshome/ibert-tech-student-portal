const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({

 name: String,
 email: String,
 studentId: String,
 password: String,
 department: String,

 courses: [String],

 results: [{
  course:String,
  grade:String
 }]

})

module.exports = mongoose.model("Student", StudentSchema)