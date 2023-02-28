// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if (license != "none") {
    license = "![License Badge](https://img.shields.io/github/license/-$(data.license)-green.svg)";
  }

  return badge;
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let badgeLink;

  switch(license) {
    case "MIT":
      badgeLink = "https://opensource.org/license/mit/";
      break;
    case "Apache":
      badgeLink = "https://www.apache.org/licenses/LICENSE-2.0";
      break;
    default:
      badgeLink = "";
      break;
  }

  return badgeLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badgeSection = "";
  
  if (license != "none") {
    badgeSection += "## License\n"
    badgeSection += ` Please visit ${renderLicenseLink(license)} to get additional information\n`;
  }

  return badgeSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions regarding this project, please feel free to contact me directly at ${data.email}. 
  For more of my projects, please visit my GitHub profile at https://github.com/${data.github}."
`;
}

module.exports = generateMarkdown;
