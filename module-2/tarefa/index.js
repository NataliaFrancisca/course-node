const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {
        name: 'name',
        message: 'Qual o seu nome? '
    },
    {
        name: 'age',
        message: 'Qual a sua idade? '
    }
]).then((answers) => {
    console.log(chalk.bgYellow.black.bold(`Seu nome é ${answers.name}`))
    console.log(chalk.bgBlue.black.bold(`Seu idade é ${answers.age}`))
}).catch(error => {
    console.log(chalk.bgRed.black.bold(`Alguma coisa errada`, error))
})