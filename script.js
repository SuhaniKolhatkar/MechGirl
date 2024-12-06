// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for your message! This is a demo form - in a real website, this would send your message.');
});

// Add active class to nav items on scroll
window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav ul li a');
    
    sections.forEach(section => {
        let top = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        
        if (window.scrollY >= top && window.scrollY < top + height) {
            navLinks.forEach(link => {
                link.style.color = 'white';
                if (link.getAttribute('href') === '#' + id) {
                    link.style.color = '#3498db';
                }
            });
        }
    });
});
