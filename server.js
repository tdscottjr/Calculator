const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//BMI Cal//

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var wei = Number(req.body.wei);
  var hei = Number(req.body.hei);

  var bmi = wei / (hei * hei);

  res.send("Your BMI is " + bmi);
});

app.listen(45, function(){
  console.log("The server is on port 45");
});
