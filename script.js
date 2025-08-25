document.addEventListener('DOMContentLoaded', function() {
    // Animation pour le bouton CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Animation de transition douce
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 200);
        });
    }

    // Menu actif
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});