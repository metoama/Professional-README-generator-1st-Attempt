// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = {
    MIT:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    ISC:"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    Mozilla:"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",

  }
  return badges[license]
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT:'[MIT](https://choosealicense.com/licenses/mit/)', 
    ISC:'[ISC](https://choosealicense.com/licenses/isc/)',
    Mozilla:'[Mozilla](https://choosealicense.com/licenses/mpl-2.0/)',
  }

  return licenseLinks(license)
}
  

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `Licensed under the ${this.renderLicenseLink(license)} license`
  } else {
      return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}



## Table of Contents
-[description](#description)
-[installation](#installation)
-[usage](#usage)
-[contributing](#contributing)
-[test](#test)
-[questions](#questions)
-[license](#license)

### Description
${answers.description}

### Installation
${answers.installation}

### Usage 
${answers.usage}

### Contributing
${answers.contributing}

### Test 
${answers.test}

### Questions 
${answers.username} 
${answers.email}
  
### License 
${answers.license}  
`;
}

module.exports = generateMarkdown;
