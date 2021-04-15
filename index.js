//* Define variables for:
    //* const inquirer 
    //* const fs = require


// require the Inquirer module 
const inquirer = require('inquirer');
// require the File System module 
const fs = require ('fs'); 

//* Create the Markdown and insert template literals 

const generateMD = (answers) =>
`
# ${answers.title}
<br />
## Table of Contents
<br />
- License
- Description 
- Installation
- Usage 
- Contribution Guidelines
- Test Instructions
- Questions 
<br />
## License
${answers.license}
<br />
## Description
${answers.description}
<br />
## Installation
${answers.installation}
<br />
## Usage
${answers.usage}
<br />
## Contribution Guidelines
${answers.contributing}
<br />
## Test Instructions 
${answers.testing}
<br />
## Questions?
Reach out! 
[${answers.username}] (https://github.com/${answers.username})
${answers.email}
`
;

//* Create a function to write to the generated README file
    //* using fs.writefile 

//* Create an array of questions for user input
    //* prompt the user for Description, Installation, Usage, Contributing, and Tests
    //* specify the input type 
        //* see https://www.npmjs.com/package/inquirer

inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            message: '⭐️  What is the name of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: '📝 Provide a description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: '🔧 Provide installation instructions.',
            name: 'installation',
        },
        {
            type: 'input',
            message: '🧩 Describe how to use your project.',
            name: 'usage',
        },
        {
            type: 'input',
            message: '💃 Describe any contribution guidelines.',
            name: 'contributing',
        },
        {
            type: 'input',
            message: '🎯 Describe any test instructions.',
            name: 'testing',
        },
        {
            type: 'input',
            message: '🏷 Select a license type.',
            name: 'license',
        },
        {
            type: 'input',
            message: '😸 Enter your GitHiub username.',
            name: 'username',
        },
        {
            type: 'input',
            message: '✉ Enter your email address.',
            name: 'email',
        },
    ])
    .then(answers => {
        // pass in our answers to a new var for the content
        const readmeContent = generateMD(answers);
        // write to the FS
        fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Awesome! You successfully created README.md!')
        );
    });
    

//* In a function initialize the inquirer package 

