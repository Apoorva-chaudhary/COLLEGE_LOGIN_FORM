// let con = require('./connection');
// let express = require('express');
// let mysql = require("mysql");
// let app = express();



// let con = mysql.createConnection({ //mysql-->sql package
//     host:"localhost",
//     user:"root",
//     password:"root",
//     database:"new_students"
// });

// con.connect(function(error){
//     if(error) throw error
//     //else console.log("connected to the database successfully!")
//     let sql="INSERT INTO new_students(name, fname, cno) VALUES('"+name+"''"+fname+"''"+cno+"')";
//     con.query(sql,function(error,result){
//         if(error) throw error;
//         res.send('student register successfull'+result.insertId);
//     });
    
// });
//  let bodyParser = require('body-parser');
//  app.use(bodyParser.json());

//  app.use(bodyParser.urlencoded({extended:true}));

//  app.get('/',function (req,res) {
//   res.sendFile(__dirname + "/college_form_14.html");
    
//  });

//  app.post('/',function(req,res){
//      var name =req.body.name;
//      var email = req.body.fname;
//      var cno = req.body.cno;
//  })
//  app.listen(7000);
