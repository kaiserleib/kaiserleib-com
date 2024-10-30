// description shuffler
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


//photo shuffler
function shufflePhotos() {
    const gallery = document.querySelector('.gallery');
    const photos = Array.from(gallery.children);

    // Shuffle the photos array using Fisher-Yates algorithm
    for (let i = photos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [photos[i], photos[j]] = [photos[j], photos[i]];
    }

    // Clear the current gallery and append photos in the new random order
    gallery.innerHTML = '';
    photos.forEach(photo => gallery.appendChild(photo));
}

// Call shufflePhotos on page load
window.onload = function() {
    shufflePhotos();
};
