const express=require('express');
const cookparser=require('cookie-parser')
const app=express();
const port=4000;
const router = require("./routes/userRoutes");
app.use(cookparser())
app.use(router);


app.listen(port,()=>{
      console.log(`server started on port ${port}`)
})