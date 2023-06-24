// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getLicenseBadge(license) {
  const licenseBadges = {
    MIT: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    Apache: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    GNU: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
};

if (licenseBadges.hasOwnProperty(license)) {
  return `![${license} License](${licenseBadges[license]})`;
}

return '';

}

module.exports = {
  getLicenseBadge,
};

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
