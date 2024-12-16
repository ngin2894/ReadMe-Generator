// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "Description",
        message: "Please provide a description of your project.",
    },
    {
        type: "input",
        name: "Installation",
        message: "Please provide installation instructions.",
    },
    {
        type: "input",
        name: "Usage",
        message: "Please provide usage information.",
    },
    {
        type: "list",
        name: "License",
        message: "Please provide license information.",
        choices: ["MIT", "Apache", "GPL", "BSD", "None"],
    },
    {
        type: "input",
        name: "Contributing",
        message: "Please provide contributing information.",
    },
    {
        type: "input",
        name: "Tests",
        message: "Please provide test information.",
    },
    {
        type: "input",
        name: "Username",
        message: "Please provide your GitHub username.",
    },
    {
        type: "input",
        name: "Email",
        message: "Please provide your email address.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md file generated successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            const markdownContent = generateMarkdown(answers);
            writeToFile('README.md', markdownContent);
        })
        .catch((error) => {
            console.error('Error prompting questions:', error);
        });
}

// Function call to initialize app
init();
