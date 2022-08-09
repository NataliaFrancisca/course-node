const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = ["A", "B", "C"];

    res.render('dashboard', {items})
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Apreder node.js',
        category: 'JS',
        body: 'Este artigo vai te transformar no mago do Node.js',
        comments: 4
    }

    res.render('blogpost', {post})
})

app.get('/' , (req, res) => {

    const user = {
        name: 'Nat',
        userName: 'natFrancisca'
    }

    const auth = true;
    
    res.render('home', {user: user, auth})
})

app.get('/contact', (req, res) => {

    const contact = {
        name: 'Joana',
        cellphone: '+55 (11)4949-4949'
    }

    res.render('contact', {contact: contact})
})

app.listen(3000, () => {
    console.log("🔥 App rodando")
})