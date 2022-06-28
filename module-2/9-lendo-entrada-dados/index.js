const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Qual a sua linguagem preferida? ", (language) => {
    const lowerCase = language.toLowerCase();

    if(lowerCase == "javascript"){
        console.log("Nice")
    }else if(lowerCase == "java"){
        console.log("Great")
    }else{
        console.log("Okay")
    }

    console.log(`A sua linguagem preferida é: ${language}`)
    readline.close();
})



