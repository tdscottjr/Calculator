const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
    });

app.post("/", function(req, res){


var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);

var result = num1 + num2;

  res.send("You Rock!!! " + result);
});


//BMI Cal//
app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res){

  var wei = parseFloat(req.body.wei);
  var hei = parseFloat(req.body.hei);

  var bmi = wei / (hei * hei);

  res.send("Your BMI is " + bmi);

})

app.listen(3000, function() {
  console.log("The server has started on port 3000");
});
