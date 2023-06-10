const express = require("express");
const bodyParser = require("body-parser");
const cookparser = require("cookie-parser");
const mongoose = require("mongoose");
const connectdatabase=require('./db/database')
// dotenv is used to use to get and use the env files in express node
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// used to connect mongodb to the server
const app = express();
const port = 5000;
const router = require("./routes/appRoutes");
connectdatabase()
app.use(cookparser());
app.use(bodyParser.urlencoded({extended:false}))
app.use(router);


app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
