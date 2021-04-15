//* Define variables for:
    //* const inquirer 
    //* const fs = require
    //* const axios for get 

// require the Inquirer module 
const inquirer = require('inquirer');
// require the File System module 
const fs = require ('fs'); 

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

