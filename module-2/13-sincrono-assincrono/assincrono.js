const fs = require('fs');

console.log('inicio');

fs.writeFile('arquivo-1.txt', 'hi', function(err){
    setTimeout(function(){
        console.log('Arquivo criado!');
    },1000)
})

console.log('fim')