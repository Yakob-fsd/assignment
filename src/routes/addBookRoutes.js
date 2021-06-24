const express = require("express");
const addBookRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){
    addBookRouter.get('/',function(req,res){
        res.render("addbook",
        {
            nav,
            title : 'Library'
        });
    });

    addBookRouter.post('/add',function(req,res){
        //res.send("hey i am added");
        var item = {
            title:req.body.title,
            author : req.body.author,
            genre : req.body.genre,
            image : req.body.image
        };
        var book = Bookdata(item);
        book.save();  //saving book to database
        res.redirect('/books');
    });
    return addBookRouter;
};

module.exports = router ;