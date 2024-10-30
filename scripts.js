// Function to shuffle and reorder photos
function shufflePhotos() {
    const gallery = document.querySelector('.gallery');
    if (!gallery) return; // Only run if gallery exists (i.e., on photos page)
    
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

// Function to shuffle text on index page
function shuffleText() {
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
        "Venture Capital Beneficiary"
    ];

    const descriptionElement = document.querySelector('#flavor-text');
    if (!descriptionElement) return; // Only run if description element exists (i.e., on index page)

    const randomIndex = Math.floor(Math.random() * descriptions.length);
    descriptionElement.textContent = descriptions[randomIndex];
}

// Unified window.onload function
window.onload = function() {
    if (document.body.classList.contains('photos')) {
        shufflePhotos(); // Shuffle photos on the photos page
    } else if (document.body.classList.contains('landing')) {
        shuffleText(); // Shuffle text on the index page
    }
};
