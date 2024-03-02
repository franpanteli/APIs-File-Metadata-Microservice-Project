var express = require("express");
var cors = require("cors");
require("dotenv").config();
const multer = require("multer");
var app = express();








app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));











app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});










app.post("/api/fileanalyse", multer().single("upfile"), function (req, res) {
  const { originalname, mimetype, size } = req.file;
  return res.json({ name: originalname, type: mimetype, size });
});












const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});