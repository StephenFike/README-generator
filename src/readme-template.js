let generateMarkdown = templateData => {
    console.log(templateData);

    const {title, description, install, usage, contribution, tests, username, email, license, madewith} = templateData

return `
# ${title}  
${renderLicenseBadge(license)}

## Description

${description}.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Made with](#madewith)
- [Lisence](#lisence)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${install}.

## Usage
${usage}.

## Made with
${madewith.join(', ')}

## Contributions
${contribution}.

## Tests
${tests}.

## Questions
If you have any questions you can reach me here:  
Github: [${username}](https://github.com/${username})  
Email: [${email}](mailto:${email})
${renderLicenseText(license, title)}
`
};

let renderLicenseText = (license, title) => {
    if (license === 'MIT'){
        return `
## License
Copyright (c) ${new Date().getFullYear()} ${title}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`

    } else if (license === 'Apache 2.0'){
        return `
## License
Copyright ${new Date().getFullYear()} ${title}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`

    } else if (license === 'GPL v3'){
        return `
## License
Copyright (C) ${new Date().getFullYear()} ${title}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`
    }
};

const renderLicenseBadge = license => {
    if (license === 'MIT'){
        return `
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license === 'Apache 2.0'){
        return`
![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    } else if (license === 'GPL v3'){
        return `
![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`
    }
}

module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseText}