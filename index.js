const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, description1, description2, description3, installation, usage, contributions, contributions2, tests, license, questions, questions2, questions3 }) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>READMEgenerator</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${name}</h1>
    <h2 class="list-group-item">Description:</h2>
        <li class="list-group-item">${description1}</li>
        <li class="list-group-item">My motivation for creating this application was ${description2}</li>
        <li class="list-group-item">While completing the development of the application, I learned ${description3}</li>
    <h2 class="list-group-item">Installation:</h2>
        <li class="list-group-item">You can access this application at the following link: ${installation}</li>
    <h2 class="list-group-item">Usage:</h2>
        <li class="list-group-item">${usage}</li>
    <h2 class="list-group-item">Contributing:</h2>
        <li class="list-group-item">The technologies used during development are: ${contributions}</li>
        <li class="list-group-item">The following individuals contributed to application development: ${contributions2}</li>
    <h2 class="list-group-item">Tests:</h2>
        <li class="list-group-item">${tests}</li>
    <h2 class="list-group-item">License:</h2>
        <li class="list-group-item">${license}</li>
    <h2 class="list-group-item">Questions?</h2>
    <li class="list-group-item">Feel free tontact me directly with any additional questions.</li>
    <li class="list-group-item">${questions}</li>
    <li class="list-group-item">Github Username: ${questions2}</li>
    <li class="list-group-item">Email: ${questions3}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your project name?',
        },
        {
            type: 'input',
            name: 'description1',
            message: 'Describe what your project does, in one 1-2 sentences.',
        },
        {
            type: 'input',
            name: 'description2',
            message: 'Finish the prompt: My motivation for creating this application was...',
        },
        {
            type: 'input',
            name: 'description3',
            message: 'Finish the prompt: While completing the development of the application, I learned...',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Copy and paste the deployed application link here:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how to use the application functions.',
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'What technologies did you use to create this application?',
        },
        {
            type: 'input',
            name: 'contributions2',
            message: 'List the names and github usernames of all contributors, separated by a comma. If none, type "NA".',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Describe your applications test insructions:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use for this application?',
            choices: ["NA - no license", "Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause Simplified license", "BSD 3-clause New or Revised license", "BSD 3-clause Clear license", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "Microsoft Public License", "MIT", "Mozilla Public License 2.0", "Open Software License 3.0"]
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'questions2',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'questions3',
            message: 'What is your email?',
        },
    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });
