// Romantic Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselDots = document.getElementById('carouselDots');
    const typewriterText = document.getElementById('typewriter-text');
    const signature = document.getElementById('signature');

    // Variables
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.carousel-slide').length;
    let typewriterIndex = 0;
    let isTyping = false;

    // Romantic message text
    const messageText = `Mi pequeña hermosa,

Hoy celebramos 8 meses juntos y mi corazón se llena de gratitud al pensar en todo lo que has traído a mi vida.

Gracias por ser esa luz que ilumina mis días más grises, por tu sonrisa que puede cambiar cualquier momento difícil en algo hermoso.

Gracias por tu paciencia cuando soy testarudo, por tu comprensión cuando las palabras no me salen como quisiera.

En estos 8 meses has logrado que me enamore no solo de ti, sino también de la versión de mí mismo que soy cuando estoy contigo.

Me has enseñado que el amor puede ser tierno y fuerte a la vez, que puede ser aventura y paz al mismo tiempo.

Gracias por cada abrazo que sana, por cada risa compartida, por cada plan que hacemos juntos y por cada momento de silencio cómodo a tu lado.

Gracias por elegirme cada día y permitirme elegirte a ti.

Mi pequeña, eres mi lugar favorito en este mundo, y estos 8 meses han sido solo el comienzo de todo lo hermoso que construiremos juntos.

Te amo más de lo que las palabras pueden expresar.`;

    // Initialize the website
    init();

    async function init() {
        // Preload images while showing loading screen
        await preloadImages();
        
        // Show loading screen for 3 seconds
        setTimeout(() => {
            hideLoadingScreen();
        }, 3000);

        // Initialize carousel after images are loaded
        initCarousel();

        // Set up intersection observer for animations
        setupScrollAnimations();
    }

    function hideLoadingScreen() {
        loadingScreen.classList.add('fade-out');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            showMainContent();
        }, 1000);
    }

    function showMainContent() {
        mainContent.classList.remove('hidden');
        mainContent.classList.add('show');

        // Animate hero elements
        animateHeroElements();

        // Show floating hearts
        setTimeout(() => {
            showFloatingHearts();
        }, 2000);

        // Start typewriter effect after delay
        setTimeout(() => {
            startTypewriter();
        }, 8000);
    }

    function animateHeroElements() {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroHeart = document.querySelector('.hero-heart');
        const heroMessage = document.querySelector('.hero-message');

        // Animate title
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'scale(1)';
            heroTitle.style.transition = 'all 1s ease';
        }, 1000);

        // Animate subtitle
        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
            heroSubtitle.style.transition = 'all 0.8s ease';
        }, 1500);

        // Animate heart
        setTimeout(() => {
            heroHeart.style.opacity = '1';
            heroHeart.style.transform = 'scale(1)';
            heroHeart.style.transition = 'all 0.8s ease';
        }, 2000);

        // Animate message
        setTimeout(() => {
            heroMessage.style.opacity = '0.8';
            heroMessage.style.transition = 'all 0.8s ease';
        }, 2500);
    }

    function showFloatingHearts() {
        const hearts = document.querySelectorAll('.heart-particle');
        hearts.forEach((heart, index) => {
            setTimeout(() => {
                heart.classList.add('show');
            }, index * 200);
        });
    }

    function initCarousel() {
        // Preload images for better performance
        preloadImages();
        
        // Create dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            carouselDots.appendChild(dot);
        }

        // Add event listeners
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        // Auto-advance slides (slower for better viewing)
        setInterval(nextSlide, 5000);
    }

    function preloadImages() {
        const imagePromises = [];
        for (let i = 1; i <= 5; i++) {
            const img = new Image();
            img.src = `FOTOS/${i}.jpg`;
            imagePromises.push(new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve; // Still resolve to prevent hanging
            }));
        }
        return Promise.all(imagePromises);
    }

    function updateCarousel() {
        const offset = -currentSlide * 20; // 20% per slide since we have 5 slides
        carouselTrack.style.transform = `translateX(${offset}%)`;

        // Update dots
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }

    function startTypewriter() {
        if (isTyping) return;
        isTyping = true;
        typewriterIndex = 0;
        typewriterText.innerHTML = '';
        typewriterEffect();
    }

    function typewriterEffect() {
        if (typewriterIndex < messageText.length) {
            const char = messageText.charAt(typewriterIndex);
            
            if (char === '\n') {
                typewriterText.innerHTML += '<br>';
            } else {
                typewriterText.innerHTML += char;
            }
            
            typewriterIndex++;
            setTimeout(typewriterEffect, 30);
        } else {
            // Typing complete
            typewriterText.classList.add('complete');
            
            // Show signature
            setTimeout(() => {
                signature.classList.remove('hidden');
                signature.classList.add('show');
            }, 500);
        }
    }

    function setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    if (element.classList.contains('section-title')) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                        element.style.transition = 'all 0.8s ease';
                    }
                    
                    if (element.classList.contains('carousel')) {
                        element.style.opacity = '1';
                        element.style.transform = 'scale(1)';
                        element.style.transition = 'all 0.8s ease 0.3s';
                    }
                    
                    if (element.classList.contains('message-content')) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                        element.style.transition = 'all 0.8s ease';
                    }
                    
                    if (element.classList.contains('video-container')) {
                        element.style.opacity = '1';
                        element.style.transform = 'scale(1)';
                        element.style.transition = 'all 0.8s ease 0.3s';
                    }
                    
                    if (element.classList.contains('video-message')) {
                        element.style.opacity = '0.8';
                        element.style.transition = 'all 0.8s ease 0.6s';
                    }
                    
                    if (element.classList.contains('footer-heart')) {
                        element.style.opacity = '1';
                        element.style.transform = 'scale(1)';
                        element.style.transition = 'all 0.8s ease';
                    }
                    
                    if (element.classList.contains('footer-message')) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                        element.style.transition = 'all 0.8s ease 0.3s';
                    }
                }
            });
        }, observerOptions);

        // Observe elements
        const elementsToObserve = [
            ...document.querySelectorAll('.section-title'),
            ...document.querySelectorAll('.carousel'),
            ...document.querySelectorAll('.message-content'),
            ...document.querySelectorAll('.video-container'),
            ...document.querySelectorAll('.video-message'),
            ...document.querySelectorAll('.footer-heart'),
            ...document.querySelectorAll('.footer-message')
        ];

        elementsToObserve.forEach(el => observer.observe(el));
    }

    // Add some interactive effects
    document.addEventListener('mousemove', (e) => {
        const hearts = document.querySelectorAll('.heart-particle');
        hearts.forEach((heart, index) => {
            const speed = (index + 1) * 0.0001;
            const x = e.clientX * speed;
            const y = e.clientY * speed;
            heart.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Add click effect for hearts
    document.addEventListener('click', (e) => {
        createClickHeart(e.clientX, e.clientY);
    });

    function createClickHeart(x, y) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.fontSize = '1.5rem';
        heart.style.color = '#FF073A';
        heart.style.animation = 'heartFloat 2s ease-out forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            document.body.removeChild(heart);
        }, 2000);
    }

    // Add CSS for click heart animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes heartFloat {
            0% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-100px) scale(0.5);
            }
        }
    `;
    document.head.appendChild(style);
});