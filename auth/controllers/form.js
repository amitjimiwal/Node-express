const path = require('path');
const form = (req, res) => {
  let indexPath;
  const token=req.cookies.name
  console.log(req.cookies)
  console.log(token)
  if(token){
     indexPath = path.resolve(__dirname, '../','logout.html')
  }
  else{
     indexPath = path.resolve(__dirname, '../','index.html')
  }
  console.log(indexPath)
  // make sure to get the path correctly
  res.sendFile(indexPath);
};
module.exports = form;