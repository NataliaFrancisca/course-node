const fs = require('fs'); //fs - file sustem;

fs.readFile("arquivo.txt", "utf8", (err, data) => {
    if(err){
        console.log(err)
    }

    console.log(data)
})