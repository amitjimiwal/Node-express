const { query } = require('express')
const Users=require('../models/User')
const getallusers=async(req,res)=>{
      // query params 
      // after the api endpoint the query params are made 
      // example http://localhost:4000/user/all?keyword=amit&common=jimiwal
      const {keyword}=req.query
      console.log(req.query,keyword)
      // { keyword: 'amit', common: 'jimiwal' } amit -O/P
      try{
            const users= await Users.find({},{name:1,email:1,_id:0})
            res.status(200).json({
                  success:true,
                  users,
                })
      }
      catch(err){
            res.status(400).json({
                  success:false,
                  meassage:error,
            })
      } 
}
module.exports=getallusers