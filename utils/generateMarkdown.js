// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "GNU General Public License":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case "MIT License":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Boost Software License":
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    case "Creative Commons Zero":
      return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    case "Other":
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      return `[Apache License 2.0](https://opensource.org/license/apache-2-0)`;
    case "GNU General Public License":
      return `[GNU General Public License](https://www.gnu.org/licenses/gpl-3.0)`;
    case "MIT License":
      return `[MIT License](https://opensource.org/licenses/MIT)`;
    case "Boost Software License":
      return `[Boost Software License](https://www.boost.org/LICENSE_1_0.txt)`;
    case "Creative Commons Zero":
      return `[Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/)`;
    case "Other":
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "Other") {
    return "";
  }
  return `This project is licensed under the ${license}. For more information, please see the ${renderLicenseLink(
    license
  )}.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Installation](#installation)
* [Description](#description)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation
${data.installation}

## Description
${data.description}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Credits
${data.credits}

## Tests
${data.tests}

## Questions
If you have further questions, you can reach me at [${data.email}](mailto:${data.email}).

GitHub Account: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
