const express = require("express");
const addAuthorRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(nav){
    addAuthorRouter.get('/',function(req,res){
        res.render("addauthor",
        {
            nav,
            title : 'Library'
        });
    });

    addAuthorRouter.post('/add',function(req,res){
        var item = {
            name : req.body.name,
            work : req.body.work,
            category : req.body.category,
            image : req.body.image
        };
        var author = Authordata(item);
        author.save(); // saving login to database
        res.redirect('/authors');
    });

    return addAuthorRouter;
};

module.exports = router ;