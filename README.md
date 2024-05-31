# Inquirer-README-Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Table of Contents
* [Installation](#installation)
* [Description](#description)
* [License](#license)
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation
To install, please clone this repository to your computer using the following steps:

1. Click the "Code" dropdown menu and copy the SSH URL.
2. Open your terminal and navigate to the directory you would like to clone this repository into.
3. Type "git clone <paste SSH URL>", replacing <paste SSH URL> with your copied SSH URL.
4. Press enter.

## Description
This is a node-baed program that generates a professional README.md file based on the user's input. It utilizes the Inquirer package.

To run the program, navigate to the Inquirer-README-Generator folder and enter "node index.js" into your local terminal. Follow the steps as prompted.

![Screenshot](assets/screenshots/screenshot1.png)

Once all the prompts have been answered, a message will be displayed stating the README has been generated. You will find it in the subdirectory "utils" in your Inquirer-README-Generator program.

![Screenshot](assets/screenshots/screenshot2.png)

Note - if you generate another README after creating your first one, it will overwrite the README that already exists in your utils folder.

Once the program has been run, the user will be able to input a title, installation steps, description, license, credits, list of tests, and questions to be automatically populated into the README format. The user will also be able to enter their e-mail and Github account, for population into a "Contact Me" section at the bottom of the page that includes links to the user's e-mail and Github profile.

The README takes the same format as this README does.

A Table of Contents section is automatically created in the README, which takes the user to each section of the document.

For the license step, the user can select a license from a list provided by the program. Once one is selected, a license badge is added at the top of the README, and a notice populates to the License section of the README explaining the license the application is covered under.

## License
This project is licensed under the MIT License. For more information, please see the [MIT License](https://opensource.org/licenses/MIT).

## Credits
This program was created by Jacob McAuliffe for the UC Berkeley eDX Coding Boot Camp.

## Tests
In the future, it might be beneficial to try and add other features to this README generator. Options to include in future versions of this could be the ability to automatically upload screenshots, edit the Table of Contents, a section listing known bugs, and functionality to create multiple READMEs without overwriting the first one in the utils subdirectory..

## Questions
If you have further questions, you can reach me at [mcauliffemedia@gmail.com](mailto:mcauliffemedia@gmail.com).

GitHub Account: [jacobmca](https://github.com/jacobmca)
