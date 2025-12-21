// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Switch between class tabs
function switchClass(className) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Here you can add logic to filter products by class
    console.log('Switched to:', className);
}

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});

// PDF Generator form
const generateBtn = document.querySelector('.btn-generate');
if (generateBtn) {
    generateBtn.addEventListener('click', function() {
        alert('PDF generation feature will be integrated with your Gotenberg API.');
    });
}

// Add scroll animation on page load
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.feature-card, .category-card, .benefit-card');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
});

// Mobile menu toggle (for future implementation)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
