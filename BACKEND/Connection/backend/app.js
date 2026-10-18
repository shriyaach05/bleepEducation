const express = require('express')
const cors = require('cors')

const app = express()

// middleware :acts like a security layer
// we get "json" format data through api
app.use(express.json())
app.use(cors()) // eneable the cors so we can share resourse even through having diff port/address

// API
app.post('/login', (req, res) => {
    // data from F = req.body
    const{name, email} = req.body
    console.log(name)

    // simple validation
    if(name && email){
        res.json({message:`welcome ${name} to my website!`})
    }else{
        res.json({message:'name and email are required.'})
    }

})

app.listen(3000, () => {
    console.log('server running at http://localhost:3000')
})