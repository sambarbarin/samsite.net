/**
 * Script pour les fonctionnalités dynamiques du site
 * Ce fichier contient les fonctions JavaScript nécessaires pour activer
 * les fonctionnalités avancées des améliorations de style
 */

document.addEventListener('DOMContentLoaded', function() {
    // Effet de scroll sur l'en-tête
    setupHeaderScroll();
    
    // Bouton de basculement du mode sombre
    setupDarkModeToggle();
    
    // Bouton "Retour en haut"
    setupBackToTopButton();
    
    // Indicateur de progression de lecture
    setupReadingProgress();
    
    // Estimation du temps de lecture
    calculateReadingTime();
    
    // Ajouter les classes actives aux liens de navigation
    setupActiveNavLinks();
});

/**
 * Configure l'effet de réduction de l'en-tête lors du défilement
 */
function setupHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Configure le bouton de basculement du mode sombre
 */
function setupDarkModeToggle() {
    // Créer le bouton de basculement s'il n'existe pas déjà
    if (!document.querySelector('.theme-toggle')) {
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.setAttribute('aria-label', 'Basculer le mode sombre');
        themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
        document.body.appendChild(themeToggle);
    }
    
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;
    
    // Vérifier les préférences enregistrées
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('darkMode');
    
    if (storedTheme === 'true' || (storedTheme === null && prefersDarkMode)) {
        document.body.classList.add('dark-mode');
        updateThemeToggleIcon(true);
    }
    
    // Ajouter l'écouteur d'événements pour le basculement
    themeToggle.addEventListener('click', function() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        updateThemeToggleIcon(isDarkMode);
    });
}

/**
 * Met à jour l'icône du bouton de basculement du mode sombre
 * @param {boolean} isDarkMode - Indique si le mode sombre est activé
 */
function updateThemeToggleIcon(isDarkMode) {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;
    
    if (isDarkMode) {
        themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
    } else {
        themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    }
}

/**
 * Configure le bouton "Retour en haut"
 */
function setupBackToTopButton() {
    // Créer le bouton s'il n'existe pas déjà
    if (!document.querySelector('.back-to-top')) {
        const backToTop = document.createElement('button');
        backToTop.className = 'back-to-top';
        backToTop.setAttribute('aria-label', 'Retour en haut');
        backToTop.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
        document.body.appendChild(backToTop);
    }
    
    const backToTop = document.querySelector('.back-to-top');
    if (!backToTop) return;
    
    // Afficher/masquer le bouton en fonction du défilement
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Ajouter l'écouteur d'événements pour le clic
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Configure l'indicateur de progression de lecture
 */
function setupReadingProgress() {
    // Créer l'indicateur s'il n'existe pas déjà
    if (!document.querySelector('.reading-progress')) {
        const readingProgress = document.createElement('div');
        readingProgress.className = 'reading-progress';
        document.body.appendChild(readingProgress);
    }
    
    const readingProgress = document.querySelector('.reading-progress');
    if (!readingProgress) return;
    
    // Mettre à jour la largeur de l'indicateur en fonction du défilement
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY / documentHeight * 100;
        readingProgress.style.width = scrolled + '%';
    });
}

/**
 * Calcule et affiche le temps de lecture estimé pour les articles
 */
function calculateReadingTime() {
    const article = document.querySelector('article');
    if (!article) return;
    
    // Calculer le temps de lecture (moyenne de 200 mots par minute)
    const text = article.textContent || article.innerText;
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);
    
    // Créer l'élément d'affichage du temps de lecture s'il n'existe pas déjà
    if (!document.querySelector('.reading-time')) {
        const readingTimeElement = document.createElement('div');
        readingTimeElement.className = 'reading-time';
        readingTimeElement.textContent = `${readingTime} min de lecture`;
        
        // Insérer avant le contenu de l'article
        const articleTitle = article.querySelector('h1');
        if (articleTitle && articleTitle.nextElementSibling) {
            article.insertBefore(readingTimeElement, articleTitle.nextElementSibling);
        } else {
            article.prepend(readingTimeElement);
        }
    }
}

/**
 * Configure les liens de navigation actifs
 */
function setupActiveNavLinks() {
    const currentPath = window.location.pathname;
    
    // Navigation principale
    const mainNavLinks = document.querySelectorAll('.main-nav a');
    mainNavLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath === linkPath || 
            (linkPath !== '/' && currentPath.startsWith(linkPath))) {
            link.classList.add('active');
        }
    });
    
    // Navigation latérale
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

/**
 * Ajoute des catégories aux articles basées sur leur contenu ou leurs tags
 * Cette fonction est appelée manuellement car elle nécessite une configuration spécifique
 */
function setupPostCategories() {
    const postItems = document.querySelectorAll('.post-item');
    
    postItems.forEach(post => {
        // Vérifier si une catégorie existe déjà
        if (post.querySelector('.post-category')) return;
        
        // Logique pour déterminer la catégorie (à adapter selon vos besoins)
        // Par exemple, basée sur le titre ou le contenu
        const title = post.querySelector('h2, h3')?.textContent.toLowerCase() || '';
        let category = 'devops'; // Catégorie par défaut
        
        if (title.includes('automation') || title.includes('workflow') || title.includes('n8n')) {
            category = 'automation';
        } else if (title.includes('cloud') || title.includes('aws') || title.includes('azure')) {
            category = 'cloud';
        } else if (title.includes('ci') || title.includes('cd') || title.includes('pipeline')) {
            category = 'ci-cd';
        }
        
        // Créer l'élément de catégorie
        const categoryElement = document.createElement('span');
        categoryElement.className = `post-category ${category}`;
        categoryElement.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        
        // Ajouter au début de l'article
        const firstChild = post.firstChild;
        post.insertBefore(categoryElement, firstChild);
    });
}
