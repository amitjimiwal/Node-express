const express = require("express");
const path = require("path");
const app = express();
const port = 4000;
const bodyParser = require("body-parser"); //its used to get access to the req.body
// GET ==Read
app.use(bodyParser.urlencoded({ extended: false }));
const router = require("./routes/userRoute");
app.use(router);
app.use(express.json());
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
