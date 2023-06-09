const Users=require('../db/schema')
const jwt=require('jsonwebtoken')
const userLogin=async(req,res)=>{
      try{
           const user= await Users.create({
               name:req.body.name,
               email:req.body.email
            })
            const token=jwt.sign({_id:user._id},process.env.SECRET_KEY)
            res.cookie("token",token,{
                  expires: new Date(Date.now()+60*1000)
            })
            res.redirect('/')
      }
      catch(err){
            console.log(err)
      }
}

module.exports=userLogin
