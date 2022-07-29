const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();
let items=["DS questions(CN)","Web Dev","Gym"];
let workItems=[];
let monthlyTargets=[];
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  let day=date.getDate();
  res.render("list",{pageTitle:day, nextItems:items});

});

app.get("/work",function(req,res){
  res.render("list",{pageTitle:"Work", nextItems:workItems});
});

app.get("/about",function(req,res){
  res.render("about");
});

app.get("/monthlyTarget",function(req,res){
  let month=date.getMonth();
  res.render("list",{pageTitle:month+" Targets", nextItems:monthlyTargets});
});

app.post("/",function(req,res){
  let next= req.body.newItem;
  if(req.body.ok === "Work"){
    workItems.push(next);
    res.redirect("/work");
  }else if(req.body.ok === month+" Targets"){
    monthlyTargets.push(next);
    res.redirect("/monthlyTarget");
  }else{
    items.push(next);
    res.redirect("/");
  }

});

app.listen(3000,function(){
  console.log("Server is running at Port 3000.");
});
