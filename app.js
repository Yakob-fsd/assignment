const express = require("express");
const app = new express();
const port = process.env.PORT || 5000 ;


const nav = [
    {
        link:'./signup',name:'Sign Up'
    },
    {
        link:'./login',name:'Login'
    },
    {
        link:'./books',name:'Books'
    },
    {
        link:'./authors',name:'Authors'
    },
    {
        link:'/addbook' , name:'Add Book'
    },
    {
        link:'/addauthor' , name:'Add Author'
    }
   ];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const addAuthorRouter = require('./src/routes/addAuthorRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const addBookRouter = require('./src/routes/addBookRoutes')(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/addauthor',addAuthorRouter);
app.use('/addbook',addBookRouter);

    app.get('/', function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

app.listen(port,()=>{console.log("Server ready at "+port)});