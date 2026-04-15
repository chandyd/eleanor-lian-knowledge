// Eleanor Lian Complete Experience - Main JavaScript

// Character Data
const characters = [
    {
        id: 1,
        name: "AILEEN",
        title: "Princess of Nuvolandia",
        image: "images/Sigillum Maximum Personaggi/Aileen, 18 anni.png",
        description: "Reincarnation of Aer, must save her kingdom from petrification. Master of cloud magic and light powers.",
        tags: ["Protagonist", "Nuvolana", "Light Magic", "Princess", "Reincarnation"],
        story: "Sigillum Maximum",
        powers: ["Cloud molding", "Teleportation", "Levitation", "Light magic"],
        relationships: ["Dorcha (love interest)", "Grogher (companion)", "Queen Eloria (mother)"]
    },
    {
        id: 2,
        name: "DORCHA",
        title: "Former Dark Lord",
        image: "images/Sigillum Maximum Personaggi/Dorcha.png",
        description: "Redeemed antagonist turned companion and love interest of Aileen. Master of combat and former dark magic.",
        tags: ["Co-protagonist", "Human", "Redemption", "Love Interest", "Former Villain"],
        story: "Sigillum Maximum",
        powers: ["Dark magic (former)", "Combat skills", "Leadership"],
        relationships: ["Aileen (love interest)", "Grogher (ally)"]
    },
    {
        id: 3,
        name: "GROGHER",
        title: "Cloud Creature",
        image: "images/Sigillum Maximum Personaggi/Grogher su Sidae.jpg",
        description: "Loyal companion who can transform into a dragon. Protector and friend to Aileen throughout her journey.",
        tags: ["Companion", "Creature", "Dragon", "Loyal", "Shape-shifter"],
        story: "Sigillum Maximum",
        powers: ["Shape-shifting", "Flight", "Cloud manipulation"],
        relationships: ["Aileen (companion)", "Dorcha (ally)"]
    },
    {
        id: 4,
        name: "QUEEN ELORIA",
        title: "Queen of Nuvolandia",
        image: "images/Sigillum Maximum Personaggi/Regina Eloria.png",
        description: "Mother of Aileen who sacrifices herself to save her daughter and kingdom. Master of royal cloud magic.",
        tags: ["Queen", "Mother", "Nuvolana", "Sacrifice", "Royalty"],
        story: "Sigillum Maximum",
        powers: ["Royal magic", "Cloud manipulation", "Protective spells"],
        relationships: ["Aileen (daughter)", "King Eadwig (husband)"]
    },
    {
        id: 5,
        name: "KING EADWIG",
        title: "King of Nuvolandia",
        image: "images/Sigillum Maximum Personaggi/Re Eadwg e i suoi soldati morti e tramutati in pietra.png",
        description: "Father of Aileen, turned to stone along with his army. His fate drives Aileen's quest.",
        tags: ["King", "Father", "Nuvolana", "Petrified", "Royalty"],
        story: "Sigillum Maximum",
        powers: ["Royal magic", "Leadership", "Combat"],
        relationships: ["Aileen (daughter)", "Queen Eloria (wife)"]
    },
    {
        id: 6,
        name: "ASHER",
        title: "The Clown",
        image: "images/Il Pagliaccio e il Castello di Ghiaccio Personaggi/Asher.png",
        description: "Mysterious clown with a tragic past, searching for redemption in the Ice Castle.",
        tags: ["Protagonist", "Clown", "Tragic", "Redemption", "Mysterious"],
        story: "The Clown & Ice Castle",
        powers: ["Acrobatics", "Illusions", "Emotional manipulation"],
        relationships: ["Thalìa (companion)", "Ice Castle Guardians (enemies)"]
    },
    {
        id: 7,
        name: "THALÌA",
        title: "Ice Princess",
        image: "images/Il Pagliaccio e il Castello di Ghiaccio Personaggi/Thalìa 18 anni.jpeg",
        description: "Princess of the Ice Castle, trapped by a curse. Seeks freedom and connection with Asher.",
        tags: ["Princess", "Ice Magic", "Cursed", "Companion", "Royalty"],
        story: "The Clown & Ice Castle",
        powers: ["Ice magic", "Cryokinesis", "Royal authority"],
        relationships: ["Asher (companion)", "Ice Castle Guardians (family/enemies)"]
    },
    {
        id: 8,
        name: "GEORGE",
        title: "Bein's Companion",
        image: "images/Bein Personaggi/George.png",
        description: "Loyal friend and guide to Bein in the World of Colors. Provides wisdom and support.",
        tags: ["Companion", "Guide", "Wise", "Loyal", "Support"],
        story: "Bein & World of Colors",
        powers: ["Wisdom", "Guidance", "Support"],
        relationships: ["Bein (companion)", "Color Guardians (allies)"]
    }
];

// Story Data
const stories = [
    {
        id: 1,
        title: "Sigillum Maximum",
        subtitle: "The Seal of the Seven Secrets",
        description: "Aileen must save her kingdom from petrification by finding the seven magical seals. A journey of magic, love, and redemption.",
        image: "images/Sigillum Maximum Personaggi/Aileen, 18 anni.png",
        characters: ["Aileen", "Dorcha", "Grogher", "Queen Eloria", "King Eadwig"],
        world: "Nuvolandia",
        status: "In Progress"
    },
    {
        id: 2,
        title: "The Clown & Ice Castle",
        subtitle: "A Tale of Redemption",
        description: "Asher the clown seeks redemption in a magical ice castle, where he meets Thalìa, a cursed ice princess.",
        image: "images/Il Pagliaccio e il Castello di Ghiaccio Personaggi/Asher.png",
        characters: ["Asher", "Thalìa"],
        world: "The Ice Castle Realm",
        status: "In Progress"
    },
    {
        id: 3,
        title: "Bein & World of Colors",
        subtitle: "A Journey Through Chromatic Realms",
        description: "Bein explores a world where colors have magical properties and personalities, guided by his companion George.",
        image: "images/Bein Personaggi/George.png",
        characters: ["Bein", "George"],
        world: "World of Colors",
        status: "In Progress"
    }
];

// World Data
const worlds = [
    {
        id: 1,
        name: "Nuvolandia",
        description: "A kingdom in the clouds where inhabitants can mold clouds and travel on them. Ruled by cloud magic.",
        image: "images/Sigillum Maximum Personaggi/Regina Eloria.png",
        magic: "Cloud manipulation, light magic",
        inhabitants: "Nuvolanas (cloud people), humans, magical creatures"
    },
    {
        id: 2,
        name: "The Ice Castle Realm",
        description: "A frozen kingdom with a magical ice castle at its center. Home to ice magic and crystalline creatures.",
        image: "images/Il Pagliaccio e il Castello di Ghiaccio Personaggi/Thalìa 18 anni.jpeg",
        magic: "Ice magic, cryokinesis",
        inhabitants: "Ice beings, crystalline creatures, magical guardians"
    },
    {
        id: 3,
        name: "World of Colors",
        description: "A vibrant realm where colors are alive and have magical properties. Each color region has unique characteristics.",
        image: "images/Bein Personaggi/George.png",
        magic: "Color magic, chromatic energy",
        inhabitants: "Color beings, chromatic creatures, magical entities"
    }
];

// Load Stories
function loadStories() {
    const storiesGrid = document.getElementById('storiesGrid');
    if (!storiesGrid) return;
    
    storiesGrid.innerHTML = '';
    
    stories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.className = 'story-card';
        storyCard.innerHTML = `
            <div class="story-image">
                <img src="${story.image}" alt="${story.title}" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/e94560?text=${story.title}'">
            </div>
            <div class="story-content">
                <h3>${story.title}</h3>
                <p class="text-gold">${story.subtitle}</p>
                <p>${story.description}</p>
                <div class="story-meta">
                    <span><i class="fas fa-globe"></i> ${story.world}</span>
                    <span><i class="fas fa-users"></i> ${story.characters.length} characters</span>
                    <span><i class="fas fa-circle"></i> ${story.status}</span>
                </div>
            </div>
        `;
        storiesGrid.appendChild(storyCard);
    });
}

// Load Characters
function loadCharacters() {
    const charactersGrid = document.getElementById('charactersGrid');
    if (!charactersGrid) return;
    
    charactersGrid.innerHTML = '';
    
    characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <div class="character-image">
                <img src="${character.image}" alt="${character.name}" onerror="this.src='https://via.placeholder.com/300x400/1a1a2e/e94560?text=${character.name}'">
            </div>
            <div class="character-content">
                <h3>${character.name}</h3>
                <p class="text-gold">${character.title}</p>
                <p>${character.description}</p>
                <div class="character-tags">
                    ${character.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <button class="btn btn-outline mt-2" onclick="showCharacterDetails(${character.id})">
                    View Details
                </button>
            </div>
        `;
        charactersGrid.appendChild(card);
    });
}

// Character Details Modal
function showCharacterDetails(characterId) {
    const character = characters.find(c => c.id === characterId);
    
    if (!character) return;
    
    const modalHtml = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal()">&times;</button>
                <div class="modal-header">
                    <h2>${character.name}</h2>
                    <p class="text-gold">${character.title}</p>
                </div>
                <div class="modal-body">
                    <div class="modal-image">
                        <img src="${character.image}" alt="${character.name}" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/e94560?text=${character.name}'">
                    </div>
                    <div class="modal-info">
                        <h3>About</h3>
                        <p>${character.description}</p>
                        
                        <h3>Story</h3>
                        <p><strong>${character.story}</strong></p>
                        
                        <h3>Powers & Abilities</h3>
                        <ul>
                            ${character.powers.map(power => `<li>${power}</li>`).join('')}
                        </ul>
                        
                        <h3>Relationships</h3>
                        <ul>
                            ${character.relationships.map(rel => `<li>${rel}</li>`).join('')}
                        </ul>
                        
                        <h3>Tags</h3>
                        <div class="character-tags">
                            ${character.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove any existing modal
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add new modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Show the modal
    const modal = document.querySelector('.modal-overlay');
    modal.style.display = 'flex';
}

// Close Modal Function
function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.style.display = 'none';
        // Remove after animation
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Load Gallery Images
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    // Sample gallery images (in a real implementation, this would scan the images directory)
    const galleryImages = [
        { src: 'images/Sigillum Maximum Personaggi/Aileen, 18 anni.png', category: 'sigillum', title: 'Aileen' },
        { src: 'images/Sigillum Maximum Personaggi/Dorcha.png', category: 'sigillum', title: 'Dorcha' },
        { src: 'images/Sigillum Maximum Personaggi/Grogher su Sidae.jpg', category: 'sigillum', title: 'Grogher' },
        { src: 'images/Sigillum Maximum Personaggi/Regina Eloria.png', category: 'sigillum', title: 'Queen Eloria' },
        { src: 'images/Sigillum Maximum Personaggi/Re Eadwg e i suoi soldati morti e tramutati in pietra.png', category: 'sigillum', title: 'King Eadwig' },
        { src: 'images/Il Pagliaccio e il Castello di Ghiaccio Personaggi/Asher.png', category: 'clown', title: 'Asher' },
        { src: 'images/Il Pagliaccio e il Castello di Ghiaccio Personaggi/Thalìa 18 anni.jpeg', category: 'clown', title: 'Thalìa' },
        { src: 'images/Bein Personaggi/George.png', category: 'bein', title: 'George' }
    ];
    
    galleryImages.forEach(img => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', img.category);
        galleryItem.innerHTML = `
            <img src="${img.src}" alt="${img.title}" onerror="this.src='https://via.placeholder.com/300x300/1a1a2e/e94560?text=${img.title}'">
            <div class="gallery-overlay">
                <h4>${img.title}</h4>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
    
    // Setup gallery filtering
    setupGalleryFilter();
}

// Setup Gallery Filter
function setupGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Load Worlds
function loadWorlds() {
    const worldsGrid = document.getElementById('worldsGrid');
    if (!worldsGrid) return;
    
    worldsGrid.innerHTML = '';
    
    worlds.forEach(world => {
        const worldCard = document.createElement('div');
        worldCard.className = 'world-card';
        worldCard.innerHTML = `
            <div class="world-image">
                <img src="${world.image}" alt="${world.name}" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/e94560?text=${world.name}'">
            </div>
            <div class="world-content">
                <h3>${world.name}</h3>
                <p>${world.description}</p>
                <div class="world-meta">
                    <p><strong>Magic:</strong> ${world.magic}</p>
                    <p><strong>Inhabitants:</strong> ${world.inhabitants}</p>
                </div>
            </div>
        `;
        worldsGrid.appendChild(worldCard);
    });
}

// Load Downloads
function loadDownloads() {
    const downloadsGrid = document.getElementById('downloadsGrid');
    if (!downloadsGrid) return;
    
    downloadsGrid.innerHTML = '';
    
    const downloads = [
        { title: 'Complete Character Pack', description: 'All character images in high resolution', format: 'ZIP', size: '45 MB', icon: 'fas fa-images' },
        { title: 'Story Summaries', description: 'PDF summaries of all three stories', format: 'PDF', size: '3 MB', icon: 'fas fa-book' },
        { title: 'World Maps', description: 'Interactive maps of all magical worlds', format: 'HTML', size: '8 MB', icon: 'fas fa-map' },
        { title: 'Character Database', description: 'JSON database of all characters with metadata', format: 'JSON', size: '1 MB', icon: 'fas fa-database' },
        { title: 'Style Guide', description: 'Complete design system and branding', format: 'PDF', size: '5 MB', icon: 'fas fa-palette' },
        { title: 'Press Kit', description: 'Media assets for press and promotion', format: 'ZIP
    ];
    
    downloads.forEach(item => {
        const downloadCard = document.createElement("div");
        downloadCard.className = "download-card";
        downloadCard.innerHTML = `
            <div class="download-icon">
                <i class="${item.icon}"></i>
            </div>
            <div class="download-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="download-meta">
                    <span>${item.format}</span>
                    <span>${item.size}</span>
                </div>
                <button class="btn btn-primary mt-2">
                    <i class="fas fa-download"></i> Download
                </button>
            </div>
        `;
        downloadsGrid.appendChild(downloadCard);
    });
}

// Setup Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.querySelector(".nav-menu");
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove("active"));
                this.classList.add("active");
                
                // Close mobile menu if open
                if (navMenu.classList.contains("show")) {
                    navMenu.classList.remove("show");
                }
            }
        });
    });
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function() {
            navMenu.classList.toggle("show");
        });
    }
    
    // Update active link on scroll
    window.addEventListener("scroll", function() {
        const scrollPos = window.scrollY + 100;
        
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (section) {
                if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                    navLinks.forEach(l => l.classList.remove("active"));
                    link.classList.add("active");
                }
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Load all data
    loadStories();
    loadCharacters();
    loadGallery();
    loadWorlds();
    loadDownloads();
    
    // Setup navigation
    setupNavigation();
    
    // Hide loading indicator
    setTimeout(() => {
        const loading = document.getElementById("loading");
        if (loading) {
            loading.style.display = "none";
        }
    }, 1000);
});
