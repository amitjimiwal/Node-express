const express=require('express')
const connectdatabase=require('./models/database')
const bodyParser=require('body-parser')
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app=express()
const port=4000
const routes=require('./routes/approutes')
connectdatabase()
app.use(bodyParser.urlencoded({extended:false}))
app.use(routes)

app.listen(port,()=>{
      console.log(`Server started on port ${port}`)
})