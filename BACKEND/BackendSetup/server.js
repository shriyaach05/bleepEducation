// backend rules to write code

// step 1 : import the required modules and dependencies at the top of the file.

// whatever is needed for the backend server

// how to import modules in Node.js
// use the required

const express =     require('express')
// modules have its own in built function and prop which can be used in the 

// step 2: create express application / function by using express() function.
const app = express()
// help us to build API

// middleware - security layers

// step 3: building api endpoints / routes/ url - somm backe and frontend

// syntax : app.methodName('path/address', function(req, res){-task-})

// 1. first adress using get method :  get the data d=frm backend/server
app.get('/', function(req,res){
    res.send('Good Evening : backend API running')
})

// 2. another address
app.get('/login', function(req,res){
    res.send('Good evening pelas login')
})


app.get('/register', function(req,res){
    res.send('Good evening please register')
})

// step 4 : start the backend server by using app.listen()

app.listen(3000, function(){
    console.log('Backend Server Running on port http://localhost:3000')
})