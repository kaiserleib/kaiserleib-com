// Array of descriptions
const descriptions = [
    "Former Gifted Kid",
    "Failed Entrepreneur",
    "Enthusiastic Open Mic Performer",
    "Occasional Computer Repairman",
    "Very Bad Dancer",
    "2024 Libertarian Candidate for Governor",
    "David's Best Friend",
    "Licensed Driver",
    "Competent Dishwasher",
    "Venture Capital Beneficiary",
];

// Function to select a random description
function getRandomDescription() {
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
}

// Update the text content on page load
window.onload = function() {
    const descriptionElement = document.querySelector('.header-text');
    descriptionElement.textContent = getRandomDescription();
};
