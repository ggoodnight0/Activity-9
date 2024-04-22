const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information for your project:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines for your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions for your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

function generateREADME(answers) {
  return `
# ${answers.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![License](https://img.shields.io/badge/license-${answers.license}-blue.svg "License Badge")

This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

`;
}

function writeREADME(content) {
  fs.writeFile('README.md', content, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md file successfully generated!');
    }
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      const readmeContent = generateREADME(answers);
      writeREADME(readmeContent);
    })
    .catch(err => console.error(err));
}

init();
