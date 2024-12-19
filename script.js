// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

// Toggle the menu on click
mobileMenuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for header height
            behavior: 'smooth'
        });
    });
});
