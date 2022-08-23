const mysql = require("mysql");


// gerencia as conexões
// caso o tempo de resposta esteja demorando, ele deruba
// evitando assim um gargalo
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql2'
})

module.exports = pool;