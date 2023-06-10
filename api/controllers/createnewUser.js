const Users=require('../models/User')
const createnewUSer=async(req,res)=>{
      try{
            const user= await Users.create({
                  name:name,
                  email:email
            })
            res.status(201).json({
                  success:true,
                  message:'Registered successfully',

            }) 
      }
      catch(err){
            res.status(400).json({
                  success:false,
                  message:'Error in creating a new user'
            }) 
      }

}
module.exports=createnewUSer