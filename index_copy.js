let mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder =bodyParser.urlencoded();

const app = express();

let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"old_students"
});

con.connect(function(error){
    if(error) throw error;
    
    con.query("select * from old_table", function(error,result){
        if(error) throw error;
        console.log(result);
    });
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/college_form_14.html");
})

app.post("/",encoder,function(req,res){
    var name= req.body.name;
    var email = req.body.email;

    con.query("select * from old_table where name =? and email = ?", [name,email],function (error,result,fields){
        if (result.length >0){
            res.redirect("/welcome");
        }
        else{
            res.redirect("/");
        }
        res.end();
    })
})

// when login is success
app.get("/welcome",function(req,res){
    res.sendFile(__dirname + "/welcome.html")
})

//external css
app.use(express.static('public'));
//set app port
app.listen(7000);