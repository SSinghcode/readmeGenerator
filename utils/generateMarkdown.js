// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
  let license1= license;

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
      return` ""`
      break;
    default:
      return '""'
      break;
  }


}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
