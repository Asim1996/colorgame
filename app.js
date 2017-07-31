var express=require('express');
var app=express();
app.use(express.static('public'))
app.set("view engine", "ejs");
app.get("/",function(req,res){
    //res.send("hello")
    res.render("home");
})
app.get("/rgbgame",function(req,res){
    res.render("rgbgame");
})
app.get("/eyetest",function(req,res){
    res.render("eyetest");
})
// app.get("/beat",function(req,res){
//     res.render("beat");
// })
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started!!!"); 
});    