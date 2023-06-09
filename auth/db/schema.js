const mongoose = require("mongoose");
// creating user schema basically it is document
const userSchema = new mongoose.Schema({
      name: String,
      email: String,
    });
// creating user collection that contains above user document
const Users = mongoose.model("Users", userSchema);    
module.exports=Users