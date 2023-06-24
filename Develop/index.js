// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {getLicenseBadge} = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
},
{
    type: 'input',
    name: 'description',
    message: 'Enter a brief description of the project:',
},
{
    type: 'input',
    name: 'installation',
    message: 'Detail installation instructions:',
},
{
    type: 'input',
    name: 'usage',
    message: 'Detail usage information:',
},
{
    type: 'input',
    name: 'issuereporting',
    message: 'Detail how to report issues:',
},
{
    type: 'input',
    name: 'contribution',
    message: 'Detail how to contribute to this project:',
},
{
    type: 'input',
    name: 'testing',
    message: 'Detail how to test the application:',
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your github username:',
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
},
{
    type: 'list',
    name: 'license',
    message: 'Select a license for your project:',
    choices: ['MIT', 'Apache', 'GNU'],
  },
];



inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const generateREADME = (answers) => {
    const licenseBadge = getLicenseBadge(answers.license);

    let githubSection = '';
    if (answers.github) {
      githubSection = `## GitHub\n\n[${answers.github}](https://github.com/${answers.github})`;
    }
    
    return `
    # ${answers.title}

    ${licenseBadge}

    ## Description
    ${answers.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Issue Reporting](#issuereporting)
    - [Contribution](#contribution)



    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## Issue Reporting
    ${answers.issuereporting}

    ## Contribution
    ${answers.contribution}

    ## Testing
    ${answers.testing}

    ## Questions
    For further questions, visit ${githubSection} or send a message to ${answers.email}

    
    
    ## License
    This project is licensed under the ${answers.license} License.
    For more information please see the LICENSE file.
    `;

    };

    const readmeContent = generateREADME(answers);

    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README file has been successfully generated!');
        }
    });


})

