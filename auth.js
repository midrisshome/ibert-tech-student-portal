const router = require("express").Router()
const Student = require("../models/Student")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const SECRET = "iberttechsecret"

router.post("/register", async (req,res)=>{

 try{

 const {name,email,studentId,password,department} = req.body

 const hashed = await bcrypt.hash(password,10)

 const student = new Student({
  name,
  email,
  studentId,
  password:hashed,
  department,
  courses:["Web Development","Database Systems"],
  results:[]
 })

 await student.save()

 res.json({message:"Student Registered"})

 }catch(err){
  res.status(500).json(err)
 }

})


router.post("/login", async (req,res)=>{

 const {studentId,password} = req.body

 const student = await Student.findOne({studentId})

 if(!student) return res.status(400).json("Student not found")

 const valid = await bcrypt.compare(password,student.password)

 if(!valid) return res.status(400).json("Wrong password")

 const token = jwt.sign({id:student._id}, SECRET)

 res.json({token, student})

})

module.exports = router