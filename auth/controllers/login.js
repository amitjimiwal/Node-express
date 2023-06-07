 
const userLogin=(req,res)=>{
      res.cookie("name","amit",{
            expires: new Date(Date.now()+60*1000)
      })
      res.redirect('/')
}

module.exports=userLogin
