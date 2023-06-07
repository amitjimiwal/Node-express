const userLogout=(req,res)=>{
      res.cookie("name",null,{
            expires: new Date(Date.now())
      })
      res.redirect('/')
}
module.exports=userLogout