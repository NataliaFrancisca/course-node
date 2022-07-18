const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const basePath = path.join(__dirname, 'templates')

const usersRouter = require('./users');

// LER O BODY
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})

