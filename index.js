// Packages used by this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions the user will be asked to verify README information
const questions = [
    {
        type: "input",
        message: "What is the name of your application?",
        name: "name",
    },
    {
        type: "input",
        message: "Please explain how to install your program here.",
        name: "install",
    },
    {
        type: "input",
        message: "Please describe the purpose and usage of your program here.",
        name: "usage",
    },
    {
        type: "list",
        message: "What license does this use?",
        name: "license",
        choices: ["Apache License 2.0", "GNU General Public License", "MIT License", "Boost Software License", "Creative Commons Zero", "Other"],
    },
    {
        type: "input",
        message: "Please add credits/contributing information here.",
        name: "credits",
    },
    {
        type: "input",
        message: "Please add your tests here.",
        name: "tests",
    },
    {
        type: "input",
        message: "Please add any further questions here.",
        name: "questions",
    },
    {
        type: "input",
        message: "Please enter your Github username",
        name: "github",
    }
];

// TODO: Function that writes REAADME file
function writeToFile(fileName, data) {
    const filePath = path.join(process.cwd(), fileName);
    fs.writeFile(filePath, data, (err) => 
        err ? console.error(err) : console.log("Your README has been generated.", filePath)
    );
}

// TODO: Function that initilizes app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile("README.md", markdownContent);
    })
}

// Function call to initialize app
init();