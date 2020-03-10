//jshint esversion:6
const express=require('express');
const app=express();
app.listen(3000,function(){
    console.log("server started at port 3000");
});
app.get("/",function(req,res){
    res.send("hi guys");
});

app.get("/name",function(req,res){
    res.send("hi guys! my name is kamesh");
});

app.get("/contact",function(req,res){
    res.send("Contact me at 9381225838");
});