const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.static(`public`))

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

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Apreder node.js',
            category: 'JS',
            body: 'Este artigo vai te transformar no mago do Node.js',
            comments: 4
        },

        {
            title: 'Flex-box',
            category: 'CSS',
            body: 'Olha como o flex-box é simples',
            comments: 23
        },

        {
            title: 'CSS Grid',
            category: 'CSS',
            body: 'Este artigo vai te mostrar o css grid',
            comments: 4
        },
    ]
    res.render("blog", {posts})
})

app.get('/contact', (req, res) => {
    const contact = {
        name: 'Joana',
        cellphone: '+55 (11)4949-4949'
    }
    res.render('contact', {contact: contact})
})

app.get('/' , (req, res) => {
    const user = {
        name: 'Nat',
        userName: 'natFrancisca'
    }
    const auth = true;
    res.render('home', {user: user, auth})
})

app.listen(3000, () => {
    console.log("🔥 App rodando")
})