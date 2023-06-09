const mongoose = require("mongoose");
const Connectdb=()=>{
      mongoose
  .connect(process.env.DATABASE_SERVER, {
    dbName: "todoapp",
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));
}
module.exports=Connectdb