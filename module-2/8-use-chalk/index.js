const chalk = require('chalk')
const nota = 8;

if(nota >= 7){
    console.log(chalk.green.bold("Parabéns! Você está aprovado!"))
    console.log(chalk.bgGreen.white('Continue assim :)'))
}else{
    console.log(chalk.red.bold("Você precisa fazer a prova de recuperação"))
    console.log(chalk.bgRed.black('Você precisa melhorar amg :), na próxima você consegue'))
}


