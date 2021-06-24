const express = require("express");
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){
    /*var books = [
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img: "tom.jpeg"
        },
    
        {
            title: 'Harry Potter',
            author: 'J K Rowling',
            genre: 'Fantacy',
            img: "harry potter.jpeg"
        },
    
        {
            title: 'Pathummede Aadu',
            author: 'Basheer',
            genre: 'Drama',
            img: "basheer.jpeg"
        }
    ];*/
    
    booksRouter.get('/', function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {
                nav,
                title:'Library',
                books
            });
        });
        
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id : id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Library', 
                book
            });
        })
        
    });
    return booksRouter;
}




module.exports = router;