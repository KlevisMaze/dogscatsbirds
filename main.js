// main.js

document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});

// Fetch and display dog photos
async function fetchDogPhotos() {
    const dogPhotosContainer = document.getElementById('dog-photos');
    try {
        const response = await fetch('https://freetestapi.com/api/v1/dogs?limit=5');
        const data = await response.json();
        data.message.forEach(photoUrl => {
            const img = document.createElement('img');
            img.src = photoUrl;
            dogPhotosContainer.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching dog photos:', error);
    }
}

// Fetch and display cat photos
async function fetchCatPhotos() {
    const catPhotosContainer = document.getElementById('cat-photos');
    try {
        const response = await fetch('https://freetestapi.com/api/v1/cats?limit=5');
        const data = await response.json();
        data.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.url;
            catPhotosContainer.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching cat photos:', error);
    }
}

// Fetch and display bird photos
async function fetchBirdPhotos() {
    const birdPhotosContainer = document.getElementById('bird-photos');
    try {
        const response = await fetch('https://freetestapi.com/api/v1/birds?limit=5'); // Replace with a real bird API
        const data = await response.json();
        data.message.forEach(photoUrl => {
            const img = document.createElement('img');
            img.src = photoUrl;
            birdPhotosContainer.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching bird photos:', error);
    }
}

fetchDogPhotos();
fetchCatPhotos();
fetchBirdPhotos();
