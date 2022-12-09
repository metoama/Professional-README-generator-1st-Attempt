// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadME = require('./Markdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:"What is your project's name?",

    },
   
    {
     type: 'input',
     name: 'description',
     message: 'Please write a short description of your project',
        
    },
   
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependecies?',
 
     },
    
     {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repo?',

    },
   
    {
        type: 'list',
        name: 'license',
        message: 'what kind of license should your project have?',
        choices: ['MIT', 'ISC', 'Mozilla'],
        filter(value) {
            return value
        }

    },
   
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',

    },
    
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
    },
   
    {
        type: 'input',
        name: 'username',
        message: 'what is your GitHub username?',


    },
   
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    
    
   
 


 ];
     


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {
    
    inquirer
     .prompt(questions)
     .then((answers) => {
        const readMePageContent = generateReadME(answers);

        fs.writeFile('README.md', readMePageContent, (err) =>
        err? console.log(err) : console.log('Successfully created README.md!'));
     })

};

// Function call to initialize app
init();
