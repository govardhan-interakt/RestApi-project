const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())


const routes = require('./routes/posts')

app.use('/posts',routes)


const port = 3000


mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,

},
()=>console.log('connected'))



app.listen(port,()=>{
    console.log(`listening at http://localhost:${3000}`)
})