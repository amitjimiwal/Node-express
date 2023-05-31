const express=require('express')
const path=require('path')
const app=express();
const port=4000;

// GET ==Read
app.get('/',(req,res)=>{
      // res.send('Hello World')
      // sending html pages
      res.sendFile(path.join(__dirname+'/index.html'))
})
app.get('/home',(req,res)=>{
      res.send('Hello home')
})
app.get('/contact',(req,res)=>{
      res.send('Hello contact')
})
app.get('/about',(req,res)=>{
      res.send('Hello About')
})
app.get('*',(req,res)=>{
      res.send('Hello Kya dalra hai')
})

// Post == create






app.listen(port,()=>{
      console.log(`server started on port ${port}`)
})