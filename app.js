const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description of your project.',
            validate: descInput => {
                if(descInput){
                    return true;
                } else {
                    console.log('Please enter your projects descriptio!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please enter the installation instructions.',
            validate: installInput => {
                if(installInput){
                    return true;
                } else {
                    console.log('Please enter your installation instructions!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter the usage information.',
            validate: usageInput => {
                if(usageInput){
                    return true;
                } else {
                    console.log('Please enter the usage information!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter the contribution guidelines.',
            validate: contInput => {
                if(contInput){
                    return true;
                } else {
                    console.log('Please enter the contribution guidelines!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter the test instructions.',
            validate: testInput => {
                if(testInput){
                    return true;
                } else {
                    console.log('Please enter the test instructions!')
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select the license you are using.',
            choices: ['Apache', 'MIT', 'GPL v3'],
            validate: licenseInput => {
                if(licenseInput){
                    return true;
                } else {
                    console.log('Please enter the license you are using!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your github username',
            validate: userInput => {
                if(userInput){
                    return true;
                } else {
                    console.log('Please enter your github username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email',
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log('Please enter you email!')
                    return false;
                }
            }
        }
    ]);
};

promptUser()
    .then(projectData => {
        const readme = generateReadme(projectData);

        fs.writeFile('./result/README.md', readme, err => {
            if(err) throw err;

            console.log('README complete! Check out README.md in the result folder to see the output!');
        });
    });