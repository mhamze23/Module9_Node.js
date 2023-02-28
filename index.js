// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the project title?',
},
{
    type: 'input',
    name: 'description',
    message: 'Describe the project.',

},
{
    type: 'input',
    name: 'installation',
    message: 'Describe the installation instruction.',

},
{
    type: 'input',
    name: 'usage',
    message: 'Enter usage information.',

},
{
    type: 'input',
    name: 'contributing',
    message: 'If any, provide the contribution guidleines.',

},
{
    type: 'input',
    name: 'test',
    message: 'Enter testing information.',

},
{
    type: 'input',
    name: 'license',
    message: 'Enter the licence the is covered by the application.',

},
{
    type: 'input',
    name: 'github username',
    message: 'Enter the GitHub username.',

},
{
    type: 'input',
    name: 'email address',
    message: 'Enter an email address.',

},

];

// TODO: Create a function to write README file
function writeToFile(readmeMD, data) {
    fs.writeFile(readmeMD, data, (err) =>
    err ? console.error(err) : console.log('You have successfully created your README.md.')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
        console.log('Successfully generated README.md');
      })
      .catch((error) => {
        console.log('An error occurred while generating the README.md', error);
      });
  }

// Function call to initialize app
init();
