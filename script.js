// Class selection navigation
function navigateToClass(className) {
    console.log('Navigating to class:', className);
    // This can be integrated with your class pages
    window.location.href = `#${className}`;
}

// Smooth scrolling
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add hover effects to class buttons
document.addEventListener('DOMContentLoaded', function() {
    const classButtons = document.querySelectorAll('.class-btn');
    classButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const className = this.getAttribute('href');
            navigateToClass(className);
        });
    });
    
    // Animate review cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.review-card, .feature-box').forEach(el => {
        observer.observe(el);
    });
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Prevent default link behavior for hash navigation
window.addEventListener('hashchange', function() {
    const section = document.querySelector(window.location.hash);
    if (section) {
        smoothScroll(window.location.hash);
    }
});

console.log('StudyNotes Pro - CBSE Notes Platform initialized');

// PDF Generate button handler
const pdfGenerateBtn = document.querySelector('.pdf-generate-btn');
if (pdfGenerateBtn) {
  pdfGenerateBtn.addEventListener('click', function() {
    window.location.href = 'generate-pdf.html';
  });
}
