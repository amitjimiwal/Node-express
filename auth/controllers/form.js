const path = require('path');
const Users=require('../db/schema')
const jwt=require('jsonwebtoken');
const { decode } = require('punycode');
const form =async (req, res) => {
  let indexPath;
  const token=req.cookies.token
    if(token){
    const decoded=jwt.verify(token,process.env.SECRET_KEY)
     indexPath = path.resolve(__dirname, '../','logout.html')
     req.user= await Users.findById(decoded._id)
     console.log(req.user)
  }
  else{
     indexPath = path.resolve(__dirname, '../','index.html')
  }
  // make sure to get the path correctly
  res.sendFile(indexPath);
};
module.exports = form;