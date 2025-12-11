// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Add scroll animation on page load
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.feature-card');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
});
