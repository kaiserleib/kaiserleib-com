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

function getRandomDescription() {
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
}

function updateFlavorText() {
    const descriptionElement = document.querySelector('#flavor-text');
    descriptionElement.textContent = getRandomDescription();
}

window.onload = function() {
    updateFlavorText();
    const descriptionElement = document.querySelector('#flavor-text');
    
    descriptionElement.addEventListener('click', function() {
        updateFlavorText();
    });
};
