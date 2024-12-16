// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === "None") {
      return '';
  }

  const licenseBadge = {
      'MIT': 'https://img.shields.io/badge/license-MIT-brightgreen',
      'Apache': 'https://img.shields.io/badge/license-Apache%202.0-blue',
      'GPL': 'https://img.shields.io/badge/license-GPL%20v3-blue',
      'BSD': 'https://img.shields.io/badge/license-BSD%202--Clause-orange',
  };

  return `![License](${licenseBadge[license]})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === "None") {
    return '';
}

const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache': 'https://opensource.org/licenses/Apache-2.0',
    'GPL': 'https://opensource.org/licenses/GPL-3.0',
    'BSD': 'https://opensource.org/licenses/BSD-2-Clause',
};

return `[License](${licenseLinks[license]})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "None") {
    return '';
}

return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.License);
  const licenseSection = renderLicenseSection(data.License);

  return `# ${data.title}

${licenseBadge}

## Description
${data.Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

${licenseSection}

## Contributing
${data.Contributing}

## Tests
${data.Tests}

## Questions
If you have any questions, please contact me at [${data.Email}](mailto:${data.Email}) or find me on GitHub [${data.Username}](https://github.com/${data.Username}).

`;
}

export default generateMarkdown;
