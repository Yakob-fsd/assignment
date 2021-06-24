const express = require("express");
const signupRouter = express.Router();
const Signupdata = require('../model/Signupdata');

function router(nav)
{
    signupRouter.get('/',function(req,res){
        res.render("signup",{
            nav,
            title : 'Library'
        });
    });

    signupRouter.post('/add',function(req,res){
        var item = {
            name : req.body.name ,
            email : req.body.email,
            uname : req.body.uname ,
            pwd : req.body.pwd ,
            phone : req.body.phone,
            role : req.body.role
        };
        var signup = Signupdata(item);
        signup.save(); //saving signup to database
        res.redirect('/login');
    });
    return signupRouter ;
};

module.exports = router ;