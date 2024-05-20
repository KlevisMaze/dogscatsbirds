document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const sections = {
        home: `
            <h1>Welcome to Our Pet Website</h1>
            <div class="search-container">
                <input type="text" id="search-bar" placeholder="Search for dogs...">
                <span id="search-icon">&#128269;</span>
            </div>
            <div id="dog-section">
                <h2>Dogs</h2>
                <div id="dog-photos"></div>
                <button id="view-all-btn">View All</button>
            </div>
            <p>Select a section from the header to learn more about our pets.</p>
        `,
        cats: `
            <h1>Cats</h1>
            <div id="cat-section">
                <h2>Cats</h2>
                <div id="cat-photos"></div>
                <button id="view-all-btn">View All</button>
            </div>
        `,
        dogs: `
            <h1>Dogs</h1>
            <div id="dog-section">
                <h2>Dogs</h2>
                <div id="dog-photos"></div>
                <button id="view-all-btn">View All</button>
            </div>
        `,
        birds: `
            <h1>Birds</h1>
            <div id="bird-section">
                <h2>Birds</h2>
                <div id="bird-photos"></div>
                <button id="view-all-btn">View All</button>
            </div>
        `,
        aboutUs: `
            <h1>About Us</h1>
            <p>We are a pet-loving community dedicated to providing information and care for your pets.</p>
        `
    };

    document.getElementById('menu-icon').addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('open');
    });

    const fetchPhotos = async (url, containerId) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            if (data && data.length > 0) {
                data.forEach(item => {
                    const div = document.createElement('div');
                    const img = document.createElement('img');
                    const p = document.createElement('p');
                    
                    img.src = item.imageUrl; // Assuming the API returns an imageUrl field
                    img.alt = item.name; // Assuming the API returns a name field
                    p.textContent = item.name;
                    
                    div.appendChild(img);
                    div.appendChild(p);
                    container.appendChild(div);
                });
            } else {
                container.innerHTML = `<p>No results found.</p>`;
            }
        } catch (error) {
            console.error(`Error fetching photos from ${url}:`, error);
            const container = document.getElementById(containerId);
            container.innerHTML = '<p>Error loading photos. Please try again later.</p>';
        }
    };

    const loadHomePage = () => {
        content.innerHTML = sections.home;
        fetchPhotos('https://freetestapi.com/api/v1/dogs?limit=5', 'dog-photos');
        document.getElementById('view-all-btn').addEventListener('click', () => {
            window.location.href = 'https://freetestapi.com/api/v1/dogs';
        });
        document.getElementById('search-bar').addEventListener('input', (event) => {
            fetchPhotos(`https://freetestapi.com/api/v1/dogs?limit=5`, 'dog-photos');
        });
    };

    document.getElementById('home-link').addEventListener('click', loadHomePage);
    document.getElementById('cats-link').addEventListener('click', () => {
        content.innerHTML = sections.cats;
        fetchPhotos('https://freetestapi.com/api/v1/cats?limit=5', 'cat-photos');
    });
    document.getElementById('dogs-link').addEventListener('click', () => {
        content.innerHTML = sections.dogs;
        fetchPhotos('https://freetestapi.com/api/v1/dogs?limit=5', 'dog-photos');
    });
    document.getElementById('birds-link').addEventListener('click', () => {
        content.innerHTML = sections.birds;
        fetchPhotos('https://freetestapi.com/api/v1/birds?limit=5', 'bird-photos');
    });
    document.getElementById('about-us-link').addEventListener('click', () => {
        content.innerHTML = sections.aboutUs;
    });

    // Load home page on initial load
    loadHomePage();
});
