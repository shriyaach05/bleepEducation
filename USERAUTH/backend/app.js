// STEP1 import using require('methodName')
const express = require('express') // api building
const cors = require('cors') // share resourse btwn diff add/origin
const mongoose = require('mongoose') // backend-DB connectn
const bcrypt = require('bcrypt') // hash sensitive data like password

// STEP2 create application using express()
const app = express()

// MIDDLEWARE : security layer
app.use(express.json())
app.use(cors())

// PHASE 1 : concept of backend & DB connection
// a. connect - local db - mongodb:localhost:27017/db_name
mongoose.connect('mongodb:localhost:27017/bEduUserAuth')

.then(() => console.log('MongoDB Connected')) // confirmation message
.catch((err) => console.log(err)) // error message

// b. scheme: blueprint of data which u wanna store
const UserSchema = new mongoose.Schema({
    // json- object -> key:value pair
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
})

// c. model (collection in mongoDB)
const User = mongoose.model('User', UserSchema)

// PHASE 2 : to create API(carry data)

app.get('/', (req,res)=>{
    res.send("backend running!")
})

app.post('/register', async(req,res)=>{
    const{username, email, password} = req.body;
})
app.post('/login', async(req,res)=>{
    const{email, password} = req.body;
})