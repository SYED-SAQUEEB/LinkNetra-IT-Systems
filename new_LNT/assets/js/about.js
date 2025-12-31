 // Real-time Footer Year Update
    document.getElementById("year").textContent = new Date().getFullYear();

   /* -------- MOBILE MENU -------- */
const menuButton = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuButton.querySelector('i');

menuButton.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('fa-bars', isHidden);
    menuIcon.classList.toggle('fa-xmark', !isHidden);
});

// Close menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-xmark');
    });
});

/* -------- SERVICES DROPDOWN (Desktop) -------- */
const servicesToggle = document.getElementById("servicesToggle");
const servicesDropdown = document.getElementById("servicesDropdown");
const servicesIcon = document.getElementById("servicesIcon");

servicesToggle.addEventListener("click", (e) => {
    e.stopPropagation();  
    servicesDropdown.classList.toggle("hidden");

    // Rotate icon
    servicesIcon.classList.toggle("rotate-180");
});

// Close when clicking outside
document.addEventListener("click", () => {
    servicesDropdown.classList.add("hidden");
    servicesIcon.classList.remove("rotate-180");
});

/* -------- STICKY HEADER -------- */
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    window.scrollY > 50
        ? header.classList.add('header-sticky')
        : header.classList.remove('header-sticky');
});
    // Fade In Up Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));