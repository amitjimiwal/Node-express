const Users=require('../models/User')
const getUser=async(req,res)=>{
try{
      const {id}=req.params
      const user=await Users.findById(id)
      res.status(200).json({
            success:true,
            user
      })
}catch(err){
    res.status(400).json({
      success:false,
      Message:err.message
    })
}
}

module.exports=getUser