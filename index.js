//* Define variables for:
    //* const inquirer 
    //* const fs = require


// require the Inquirer module 
const inquirer = require('inquirer');
// require the File System module 
const fs = require ('fs'); 

//* Create the Markdown and insert template literals 

const generateMD = (questions) =>
`
# ${questions.title}
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
${questions.license}
<br />
## Description
${questions.description}
<br />
## Installation
${questions.installation}
<br />
## Usage
${questions.usage}
<br />
## Contribution Guidelines
${questions.contributing}
<br />
## Test Instructions 
${questions.testing}
<br />
## Questions?
Reach out! 
[${questions.username}] (https://github.com/${questions.username})
${questions.email}
`
;

//* Create an array of questions for user input
    //* prompt the user for Description, Installation, Usage, Contributing, and Tests
    //* specify the input type 
        //* see https://www.npmjs.com/package/inquirer

const questions = [
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
        type: 'list',
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
];


//* Create a function to write to the generated README file
    //* using fs.writefile 
    //* Add table of contents with anchors to the corresponding sections in the doc


//* In a function initialize the inquirer package 

