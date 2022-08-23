const express = require("express");
const exphbs = require('express-handlebars');
const pool = require("./db/conn");

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
    pool.query(query, function(err){
        if(err){
            console.log(err);
            return;
        }

        res.redirect('/books');
    });
})

app.get("/books", (req, res) => {
    const query = "SELECT * FROM books";

    pool.query(query, function(err, data){
        if(err){
            console.log(err);
            return;
        }

        const books = data;
        res.render('books', {books});
    })
})

app.get("/books/:id", (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM books WHERE id = ${id}`;

    pool.query(query, function(err, data){
        if(err){
            console.log(err)
            return;
        }

        const book = data[0];
        res.render("book", {book})
    })
})

app.get("/books/edit/:id", (req,res) => {
    const id = req.params.id;
    const query = `SELECT * FROM books WHERE id = ${id}`;

    pool.query(query, function(err, data){
        if(err){
            console.log(err)
            return;
        }

        const book = data[0];
        res.render("editbook", {book})
    })
})

app.post("/books/updatebook", (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const pageqty = req.body.pageqty;

    const query = `UPDATE books SET title = '${title}', pageqty = '${pageqty}' WHERE id = ${id}`

    pool.query(query, function(err){
        if(err){
            console.log(err)
            return;
        }

        res.redirect("/books");
    })
})

app.post("/books/remove/:id", (req, res) => {
    const id = req.params.id;
    const query = `DELETE from books WHERE id = ${id}`;

    pool.query(query, function(err){
        if(err){
            console.log(err)
            return;
        }

        res.redirect("/books");
    })
})

app.listen(3000);