/* ============================================
   J+S — MAIN JS
   Loader · Navbar · Reveal · Page Transitions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- LOADER ----
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader && loader.classList.add('hidden');
      // trigger hero reveals after loader
      document.querySelectorAll('#hero [data-reveal]').forEach((el, i) => {
        setTimeout(() => el.classList.add('revealed'), 200 + i * 150);
      });
    }, 1500);
  });

  // ---- NAVBAR SCROLL ----
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- MOBILE TOGGLE ----
  const toggle   = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  toggle && toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  // close on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // ---- SCROLL REVEAL ----
  const revealEls = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => {
    // don't double-observe hero items (handled by loader)
    if (!el.closest('#hero')) io.observe(el);
  });

  // ---- PAGE TRANSITION ----
  const overlay = document.createElement('div');
  overlay.className = 'page-transition';
  document.body.appendChild(overlay);

  let transitioning = false;

  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') ||
        href.startsWith('mailto') || href.startsWith('tel')) return;

    link.addEventListener('click', e => {
      if (e.metaKey || e.ctrlKey || transitioning) return;
      e.preventDefault();
      transitioning = true;

      // slide in overlay
      overlay.style.transition = 'transform 0.45s cubic-bezier(0.7,0,0.84,0)';
      overlay.style.transform = 'translateY(0)';

      setTimeout(() => {
        window.location.href = href;
      }, 450);
    });
  });

  // slide out on arrive
  overlay.style.transform = 'translateY(0)';
  overlay.style.transition = 'none';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.style.transition = 'transform 0.55s cubic-bezier(0.16,1,0.3,1)';
      overlay.style.transform = 'translateY(-100%)';
      setTimeout(() => { transitioning = false; }, 600);
    });
  });

  // ---- CURSOR GLOW (desktop only) ----
  if (window.matchMedia('(hover: hover)').matches) {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    window.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    });
    window.addEventListener('mouseleave', () => glow.style.opacity = '0');
    window.addEventListener('mouseenter', () => glow.style.opacity = '1');
  }

  // Lang switch is handled by i18n.js

  // ---- SMOOTH ANCHOR SCROLL ----
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- MARK ACTIVE NAV ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) link.classList.add('active');
    else link.classList.remove('active');
  });

});
