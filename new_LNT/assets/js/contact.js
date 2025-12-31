/* =========================
   FOOTER / HEADER YEAR
========================= */
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

/* =========================
   NAVBAR ELEMENTS
========================= */
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuBtn?.querySelector('i');

const servicesToggle = document.getElementById('servicesToggle');
const servicesDropdown = document.getElementById('servicesDropdown');
const servicesIcon = document.getElementById('servicesIcon');

/* =========================
   STATE
========================= */
let isMenuOpen = false;
let isServicesOpen = false;

/* =========================
   MOBILE MENU FUNCTIONS
========================= */
function openMenu() {
    if (!mobileMenu || !menuIcon) return;
    mobileMenu.classList.remove('hidden');
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
    isMenuOpen = true;
    closeServicesDropdown();
}

function closeMenu() {
    if (!mobileMenu || !menuIcon) return;
    mobileMenu.classList.add('hidden');
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-xmark');
    isMenuOpen = false;
}

function toggleMenu(e) {
    e?.stopPropagation();
    isMenuOpen ? closeMenu() : openMenu();
}

/* =========================
   SERVICES DROPDOWN FUNCTIONS
========================= */
function openServicesDropdown() {
    if (!servicesDropdown || !servicesIcon) return;
    servicesDropdown.classList.remove('hidden');
    servicesIcon.classList.add('rotate-180');
    isServicesOpen = true;
}

function closeServicesDropdown() {
    if (!servicesDropdown || !servicesIcon) return;
    servicesDropdown.classList.add('hidden');
    servicesIcon.classList.remove('rotate-180');
    isServicesOpen = false;
}

function toggleServicesDropdown(e) {
    e?.preventDefault();
    e?.stopPropagation();
    isServicesOpen ? closeServicesDropdown() : openServicesDropdown();
}

/* =========================
   EVENT LISTENERS
========================= */
menuBtn?.addEventListener('click', toggleMenu);

mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

servicesToggle?.addEventListener('click', toggleServicesDropdown);

/* =========================
   GLOBAL OUTSIDE CLICK HANDLER
========================= */
document.addEventListener('click', (e) => {
    if (
        isMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        closeMenu();
    }

    if (
        isServicesOpen &&
        servicesDropdown &&
        !servicesDropdown.contains(e.target) &&
        !servicesToggle.contains(e.target)
    ) {
        closeServicesDropdown();
    }
});

/* =========================
   STICKY HEADER
========================= */
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;
    header.classList.toggle('header-sticky', window.scrollY > 50);
});
