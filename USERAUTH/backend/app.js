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
mongoose.connect('mongodb://localhost:27017/bEduUserAuth')

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
    const{username, email, password} = req.body; // (frontend)

    // 1. basic validation
    if(!username || !email || !password){
        res.json({message:'all field must be completed'})
    }

    // 2. check existing user
    const existingUser = await User.findOne({email}) // output in boolean

    if(existingUser){
        return res.json({message:'user already exists'})
    }

    // 3. hash the password
    const hashPassword = await bcrypt.hash(password, 10)

    // save the data in mongoDB collection : user(model)
    const newUser = new User({
        username,
        email,
        password: hashPassword
    })
    await newUser.save() // store the data in collection

    res.json({
        message:'user created successfully!'
    })

})
app.post('/login', async(req,res)=>{
    const{email, password} = req.body;

    // 1. find user
    const user = await User.findOne({email})

    if(!user){
        return res.json({
            message: 'user not found - register first'
        })
    }

    // compare password
    const valid = await bcrypt.compare(password, user.password) // boolean output

    if(valid){
        res.json({
            message:'login successfull!'
        })
    }else{
        res.json({
            message: 'invalid password.'
        })
    }
})

app.listen(3000, ()=>{
    console.log('Server Running http://localhost:3000')
})