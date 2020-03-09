//jshint esversion:6
const express=require('express');
const bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.listen(3000,function(){
    console.log("server started at port 3000");
});
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/calc",function(req,res){
    res.sendFile(__dirname+"/index.html");
    var a=Number(req.body.a);
    var b=Number(req.body.b);
    var c=a+b;
    res.send("The addition of 2 numbers is "+c);
    console.log(req.body);
});


app.post("/calcb",function(req,res){
    res.sendFile(__dirname+"/index.html");
    var a=Number(req.body.a1);
    var b=Number(req.body.b1);
    var c=b/(a*a);
    res.send("The bmi is is "+c);
    console.log(req.body);
});
app.get("/contact",function(req,res){
    res.send("Contact me at 9381225838");
});