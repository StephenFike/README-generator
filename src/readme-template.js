module.exports = templateData => {
    console.log(templateData);

    const {title, description, install, usage, contribution, tests, username, email, license} = templateData

return `
# ${title}

## Description

${description}.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Lisence](#lisence)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${install}.

## Usage
${usage}.

## License
This project is covered under the ${license} license.

## Contributions
${contribution}.

## Tests
${tests}.

## Questions
If you have any questions you can reach me here:
Github: [${username}](https://github.com/${username})
Email: [${email}](mailto:${email})`
};