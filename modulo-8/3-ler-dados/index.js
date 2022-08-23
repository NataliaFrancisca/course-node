const express = require("express");
const exphbs = require('express-handlebars');

const mysql = require('mysql');

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json());

app.get("/", (req, res) => {
    res.render('home')
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title;
    const pageqty = req.body.pageqty;

    const query = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`
    connection.query(query, function(err){
        if(err){
            console.log(err);
            return;
        }

        res.redirect('/books');
    });
})

app.get("/books", (req, res) => {
    const query = "SELECT * FROM books";

    connection.query(query, function(err, data){
        if(err){
            console.log(err);
            return;
        }

        const books = data;
        res.render('books', {books});
    })
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql2'
})

connection.connect(function(err){
    if(err){
        console.log(err)
    }

    console.log("BD CONECTOU 🎉")

    app.listen(3000);
})