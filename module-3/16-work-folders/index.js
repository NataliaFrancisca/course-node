const fs = require('fs');

if(!fs.existsSync('./chocada')){
    console.log('Não existe!');
    fs.mkdirSync('chocada')
}

if(fs.existsSync("./minhasegundapasta")){
    console.log("Existe!");
}