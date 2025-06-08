// Remove previous scroll event listeners
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the current active section (either parallax or content)
        const currentActive = document.querySelector('.parallax-section.active, .content-section.active');
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Remove active class from all nav links
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to clicked link
        this.classList.add('active');

        // If the target section is already active, do nothing
        if (currentActive && currentActive.id === targetId) {
            return;
        }

        // Remove 'active' from all sections (both parallax and content)
        document.querySelectorAll('.parallax-section, .content-section').forEach(sec => {
            sec.classList.remove('active');
        });

        // Add 'active' to the target section
        targetSection.classList.add('active');
    });
});

// Add welcome message fade effect
window.addEventListener('DOMContentLoaded', () => {
    // Initialize home section and nav as active
    document.querySelector('a[href="#home"]').classList.add('active');
    document.getElementById('home').classList.add('active');

    // Get welcome message element
    const welcomeMessage = document.querySelector('.welcome-message');

    // Fade in after a short delay
    setTimeout(() => {
        welcomeMessage.classList.add('fade-in');
    }, 500);

    // Fade out after 3 seconds
    setTimeout(() => {
        welcomeMessage.classList.add('fade-out');
    }, 3500);
});

// Keep the mobile menu functionality
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});