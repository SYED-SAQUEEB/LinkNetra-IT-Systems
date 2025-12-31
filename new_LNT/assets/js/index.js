/* =========================
   MOBILE MENU
========================= */
const menuButton = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuButton?.querySelector('i');

function toggleMenu() {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('fa-bars', isHidden);
    menuIcon.classList.toggle('fa-xmark', !isHidden);

    // ✅ Close services dropdown when mobile menu toggles
    closeServicesDropdown();
}

menuButton?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) toggleMenu();
    });
});

document.addEventListener('click', (e) => {
    if (
        mobileMenu &&
        !mobileMenu.classList.contains('hidden') &&
        !mobileMenu.contains(e.target) &&
        e.target !== menuButton
    ) {
        toggleMenu();
    }
});

/* =========================
   SERVICES DROPDOWN (FIXED)
========================= */
const servicesToggle = document.getElementById('servicesToggle');
const servicesDropdown = document.getElementById('servicesDropdown');
const servicesIcon = document.getElementById('servicesIcon');

let isServicesOpen = false;

function openServicesDropdown() {
    servicesDropdown.classList.remove('hidden');
    servicesIcon.classList.add('rotate-180');
    isServicesOpen = true;
}

function closeServicesDropdown() {
    servicesDropdown.classList.add('hidden');
    servicesIcon.classList.remove('rotate-180');
    isServicesOpen = false;
}

servicesToggle?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    isServicesOpen ? closeServicesDropdown() : openServicesDropdown();
});

// ✅ Close ONLY when clicking outside
document.addEventListener('click', (e) => {
    if (
        isServicesOpen &&
        !servicesToggle.contains(e.target) &&
        !servicesDropdown.contains(e.target)
    ) {
        closeServicesDropdown();
    }
});

/* =========================
   HEADER SCROLL
========================= */
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;
    header.classList.toggle('header-sticky', window.scrollY > 50);
});

/* =========================
   FOOTER YEAR
========================= */
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

/* =========================
   SCROLL ANIMATIONS
========================= */
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
});
