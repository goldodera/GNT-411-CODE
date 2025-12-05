// ========== MOBILE MENU TOGGLE ==========
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active');
}

// ========== FORM SUBMISSION ==========
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // ========== SMOOTH SCROLLING ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== SKILL BAR ANIMATION ==========
    const skillBars = document.querySelectorAll('.bar span');
    
    const animateSkills = () => {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if (barPosition < screenPosition) {
                bar.style.width = bar.style.width || '0%';
            }
        });
    };

    // Initial check
    animateSkills();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkills);

    // ========== CLOSE MOBILE MENU ON OUTSIDE CLICK ==========
    document.addEventListener('click', function(event) {
        const navLinks = document.getElementById('navLinks');
        const toggler = document.querySelector('.navbar-toggler');
        const nav = document.querySelector('nav');
        
        if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});