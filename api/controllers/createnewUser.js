const Users=require('../models/User')
const createnewUSer=async(req,res)=>{
      const a=req.body
      try{
            // const user= await Users.create({
            //       name:name,
            //       email:email
            //       // name:'Amit',
            //       // email:'am@gmail.com'
            // })
            res.status(200).cookie("lol","hurray").json({
                  success:true,
                  message:'Registered successfully',
                  a
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