// ===================================
// AUTHENTIK DANCE - JAVASCRIPT
// Interactive features and animations
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // NAVIGATION
    // ===================================
    
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Empêche la propagation du clic
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Empêche le scroll du body quand le menu est ouvert
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 968) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = ''; // Rétablit le scroll
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navbar.contains(event.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = ''; // Rétablit le scroll
        }
    });
    
    // Close menu on window resize to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 968 && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    
    // ===================================
    // SCROLL ANIMATIONS
    // ===================================
    
    // Create Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    
    // ===================================
    // SMOOTH SCROLLING
    // ===================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default if it's a real anchor link (not just #)
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    
    // ===================================
    // CONTACT FORM VALIDATION
    // ===================================
    
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const eventType = document.getElementById('eventType').value;
            const message = document.getElementById('message').value.trim();
            
            // Validation
            let isValid = true;
            let errorMessage = '';
            
            if (name === '') {
                isValid = false;
                errorMessage += 'Le nom est requis.\n';
            }
            
            if (email === '') {
                isValid = false;
                errorMessage += 'L\'email est requis.\n';
            } else if (!isValidEmail(email)) {
                isValid = false;
                errorMessage += 'L\'email n\'est pas valide.\n';
            }
            
            if (eventType === '') {
                isValid = false;
                errorMessage += 'Veuillez sélectionner un type d\'événement.\n';
            }
            
            if (message === '') {
                isValid = false;
                errorMessage += 'Le message est requis.\n';
            }
            
            if (!isValid) {
                alert(errorMessage);
                return;
            }
            
            // If validation passes, show success message
            contactForm.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // In a real application, you would send the form data to a server here
            console.log('Form submitted:', {
                name,
                email,
                phone,
                eventType,
                message
            });
            
            // Reset form after 5 seconds
            setTimeout(function() {
                contactForm.reset();
                contactForm.style.display = 'flex';
                successMessage.style.display = 'none';
            }, 5000);
        });
    }
    
    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    
    // ===================================
    // NEWSLETTER FORM
    // ===================================
    
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email === '') {
                alert('Veuillez entrer votre email.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Veuillez entrer un email valide.');
                return;
            }
            
            // Show success message
            alert('Merci de vous être inscrit ! Vous recevrez bientôt nos actualités.');
            
            // Reset form
            newsletterForm.reset();
            
            // In a real application, you would send the email to a server here
            console.log('Newsletter subscription:', email);
        });
    }
    
    
    // ===================================
    // HOVER EFFECTS FOR SERVICE CARDS
    // ===================================
    
    const serviceCards = document.querySelectorAll('.service-card, .platform-card, .value-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    
    // ===================================
    // PARALLAX EFFECT FOR HERO
    // ===================================
    
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroBg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            heroBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }
    
    
    // ===================================
    // GALLERY INTERACTIONS
    // ===================================
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // In a real application, this would open a lightbox or modal
            // For now, we'll just add a subtle scale animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    
    // ===================================
    // ANIMATED COUNTERS (if you want to add stats)
    // ===================================
    
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
    
    // Observe counter elements
    const counterElements = document.querySelectorAll('[data-counter]');
    
    if (counterElements.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    const target = parseInt(entry.target.getAttribute('data-counter'));
                    animateCounter(entry.target, target);
                    entry.target.classList.add('counted');
                }
            });
        }, { threshold: 0.5 });
        
        counterElements.forEach(element => {
            counterObserver.observe(element);
        });
    }
    
    
    // ===================================
    // LOADING ANIMATION
    // ===================================
    
    // Add a simple fade-in effect when page loads
    document.body.style.opacity = '0';
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });
    
    
    // ===================================
    // SCROLL PROGRESS INDICATOR (optional)
    // ===================================
    
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        
        // You can use this to update a progress bar if you want to add one
        // document.getElementById('scrollProgress').style.width = scrollProgress + '%';
    }
    
    window.addEventListener('scroll', updateScrollProgress);
    
    
    // ===================================
    // DYNAMIC YEAR IN FOOTER
    // ===================================
    
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
    
    // Also update copyright year if it exists
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) {
        footerBottom.innerHTML = footerBottom.innerHTML.replace('2024', currentYear);
    }
    
    
    // ===================================
    // PREVENT FORM RESUBMISSION
    // ===================================
    
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
    
    
    // ===================================
    // ACCESSIBILITY IMPROVEMENTS
    // ===================================
    
    // Add keyboard navigation for mobile menu
    if (navToggle) {
        navToggle.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
    
    // Focus trap for mobile menu when open
    if (navMenu) {
        const focusableElements = navMenu.querySelectorAll('a, button');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        navMenu.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
            
            // Close menu on Escape key
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                navToggle.focus();
            }
        });
    }
    
    
    // ===================================
    // CONSOLE MESSAGE (Easter egg)
    // ===================================
    
    console.log('%c AUTHENTIK DANCE', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #FF1493, #00D4FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
    console.log('%cL\'authenticité du mouvement', 'font-size: 14px; color: #666;');
    console.log('%cVous cherchez quelque chose ? Contactez-nous ! ', 'font-size: 12px; color: #FF1493;');
    
});


// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Use throttle for scroll events to improve performance
window.addEventListener('scroll', throttle(function() {
    // Any scroll-based animations can be added here
}, 100));
