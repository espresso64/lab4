const express = require ("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Running Express Server..."); 
});



//routes
app.get("/", function (req,res){
    res.render("index.html");
});

app.get("/mercury", function(req,res){
    res.render("mercury.html");
});

app.get("/venus", function(req,res){
    res.render("venus.html");
});

app.get("/earth", function(req,res){
    res.render("earth.html");
});

app.get("/mars", function(req,res){
    res.render("mars.html");
});

app.get("/jupiter", function(req,res){
    res.render("jupiter.html");
});
















//server listener 
app.listen("8080", "127.0.0.1", function (){
    console.log ("Express server is Running...")
});