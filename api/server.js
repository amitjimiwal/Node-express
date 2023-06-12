const express = require("express");
const connectdatabase = require("./models/database");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();
const port = 4000;
const routes = require("./routes/approutes");
connectdatabase();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
// This path handler is basically if my api endpoint is api/v1/user and we request api/v1/users then it will give back html element to make this a json return everytime we make request to wrong api 
// app.all method accepts all type of request (GET,PUT,POST,DELETE) on a particular route  and return that its url not in this server 
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
