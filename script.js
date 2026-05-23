const titles = [
  'Pre-Sales Engineer',
  'Post-Sales Engineer',
  'Network Security Engineer',
  'Palo Alto Specialist'
];

const typedText = document.querySelector('.typed-text');
let titleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = titles[titleIndex];
  typedText.textContent = deleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  let delay = deleting ? 45 : 85;

  if (!deleting && charIndex === current.length + 1) {
    delay = 1200;
    deleting = true;
  } else if (deleting && charIndex < 0) {
    deleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    charIndex = 0;
    delay = 350;
  }

  setTimeout(typeLoop, delay);
}

typeLoop();

document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  document.body.classList.toggle('menu-open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen.toString());
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });

  navItems.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});
