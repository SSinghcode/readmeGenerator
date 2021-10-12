// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let license1 = license;

  // ["MIT","APACHE 2.0","GPL 3.0","BSD 3","None"],

  switch (license1) {
    case "MIIT":
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;

      break;
    case "APACHE 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
      break;

    case "GPL 3.0":
      return `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      break;
    case "BSD 3":
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]'
      break;
    case "None":
      return ` ""`
      break;
    default:
      return '""'
      break;
  }


}



// TODO: Create a function to generate markdown for README
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Github username ${data.username}

  ## Table of Contents
  [Description](#description)

  [Installations](#installations)

  [Usage](#usage)

  [Contributing](#contributing)

  [License](#license)

  [Questions](#questions)










  ## license  
  ${renderLicenseBadge(data.license)}
  ## App Name 
  ${data.projectname}
  ## Email :- 
  ${data.email}

  ## Installations

  ${data.installation}

  ## Description
  ${data.description}
  ## Usage
  ${data.usage}
  ## Tests
  ${data.test}
  ## Dependencies
  ${data.dependencies}
  ## Contributing
  ${data.contributuion}
  ## Questions
    What is your Github uername 
    What is the command to run dependencies 
    What is your Github uername
    What is your email address 
    What is your APP name 
    Please write short description  of your project 
    What kind of license should your project have MIIT
    What is the title of the project        
    What is the command to run dependencies 
    What is the command to run tests
    What does user need to know about using the repo?
    What does user need to know about contributing to the repo? 
`;
}

module.exports = generateMarkdown;

