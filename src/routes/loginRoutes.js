const express = require("express");
const loginRouter = express.Router();
const db = require('../model/Signupdata');
const Signupdata = require('../model/Signupdata');

function router(nav){
   loginRouter.get('/',function(req,res){
    res.render("login",
    {
        nav,
        title : 'Library'
    });
});

 loginRouter.post('/add',function(req,res){
    // res.send("ready for Backend");
    var username = req.body.uname;
    var password = req.body.pwd;
    Signupdata.find(new Signupdata({ uname: username }),
            password, function (err, Signupdata) {
        if (err) {
            console.log(err);
      
             res.render("login");
        }
  
else
res.render("login",
{
    nav,
    title : 'Library'
});
        
                       
        });
 });
return loginRouter;
}

module.exports = router;