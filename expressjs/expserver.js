const express=require('express')
const path=require('path')
const app=express();
const port=4000;
const bodyParser=require('body-parser'); //its used to get access to the req.body 
// GET ==Read
app.use(bodyParser.urlencoded({extended:false}))
app.get('/amit',(req,res)=>{
      // res.send('Hello World')
      // sending html pages
      res.sendFile(path.join(__dirname+'/index.html'))
      res.json({
            name:'amit'
      })
})

// Post == create
app.post('/jimmy',(req,res)=>{
      // res.send('Done');
      console.log(req.body)
      res.send(`<h1> Your name is : ${req.body.name}</h1> <h1> Your email  is : ${req.body.email}</h1>`)
})

app.post('/amit/register',(req,res)=>{
      res.json({
            name:'amit',
            email:'hell0'
      })
})






app.listen(port,()=>{
      console.log(`server started on port ${port}`)
})