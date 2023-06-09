const userLogout=(req,res)=>{
      res.cookie("token",null,{
            expires: new Date(Date.now())
      })
      res.redirect('/')
}
module.exports=userLogout