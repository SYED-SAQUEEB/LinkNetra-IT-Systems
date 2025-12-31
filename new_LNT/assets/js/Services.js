/* =========================
   FOOTER YEAR
========================= */
const footerYear = document.getElementById('year');
if (footerYear) footerYear.textContent = new Date().getFullYear();

/* =========================
   MOBILE MENU (NAVBAR)
========================= */
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuBtn?.querySelector('i');

function toggleMenu() {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuIcon?.classList.toggle('fa-bars', isHidden);
    menuIcon?.classList.toggle('fa-xmark', !isHidden);
    closeServicesDropdown();
}

menuBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) toggleMenu();
    });
});

/* =========================
   SERVICES DROPDOWN
========================= */
const servicesToggle = document.getElementById('servicesToggle');
const servicesDropdown = document.getElementById('servicesDropdown');
const servicesIcon = document.getElementById('servicesIcon');

let isServicesOpen = false;

function openServicesDropdown() {
    servicesDropdown?.classList.remove('hidden');
    servicesIcon?.classList.add('rotate-180');
    isServicesOpen = true;
}

function closeServicesDropdown() {
    servicesDropdown?.classList.add('hidden');
    servicesIcon?.classList.remove('rotate-180');
    isServicesOpen = false;
}

servicesToggle?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    isServicesOpen ? closeServicesDropdown() : openServicesDropdown();
});

/* =========================
   GLOBAL OUTSIDE CLICK
========================= */
document.addEventListener('click', (e) => {
    if (
        isServicesOpen &&
        !servicesToggle.contains(e.target) &&
        !servicesDropdown.contains(e.target)
    ) {
        closeServicesDropdown();
    }

    if (
        mobileMenu &&
        !mobileMenu.classList.contains('hidden') &&
        !mobileMenu.contains(e.target) &&
        e.target !== menuBtn
    ) {
        toggleMenu();
    }
});

/* =========================
   STICKY HEADER
========================= */
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header?.classList.toggle('header-sticky', window.scrollY > 60);
});

/* =========================
   SCROLL REVEAL (FAST)
========================= */
const revealElements = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    }
);

revealElements.forEach(el => revealObserver.observe(el));
