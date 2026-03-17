const API = "http://localhost:5000/api/auth"

async function register(){

const data = {

name: document.getElementById("name").value,
email: document.getElementById("email").value,
studentId: document.getElementById("studentId").value,
department: document.getElementById("department").value,
password: document.getElementById("password").value

}

await fetch(API+"/register",{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)

})

alert("Registration successful")

}



async function login(){

const studentId = document.getElementById("studentId").value
const password = document.getElementById("password").value

const res = await fetch(API+"/login",{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({studentId,password})

})

const data = await res.json()

localStorage.setItem("student", JSON.stringify(data.student))

window.location="dashboard.html"

}


if(window.location.pathname.includes("dashboard")){

const student = JSON.parse(localStorage.getItem("student"))

document.getElementById("profile").innerHTML = `
<h2>${student.name}</h2>
<p>ID: ${student.studentId}</p>
<p>Department: ${student.department}</p>
`

document.getElementById("courses").innerHTML =
"<h3>Courses</h3>"+ student.courses.join("<br>")

}