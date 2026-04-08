/* ============================================================
   Fire Line Services — Main JavaScript
   Author: Titan AI / Matt Vincent Walker
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── HAMBURGER MENU ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── SCROLL REVEAL ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ── STAGGERED CHILD REVEALS ── */
  const staggerSelectors = [
    { parent: '.services-grid',    children: '.service-card' },
    { parent: '.services-secondary', children: '.service-card-sm' },
    { parent: '.projects-grid',    children: '.project-card' },
    { parent: '.markets-list',     children: '.market-item' },
    { parent: '.why-features',     children: '.why-feature' },
  ];

  staggerSelectors.forEach(({ parent, children }) => {
    document.querySelectorAll(parent).forEach(grid => {
      grid.querySelectorAll(children).forEach((child, i) => {
        child.style.transitionDelay = `${i * 0.08}s`;
        child.classList.add('reveal');
        revealObserver.observe(child);
      });
    });
  });

});
