/* ============================================================
   MUHAMMAD AHMAD PORTFOLIO — MAIN APPLICATION SCRIPT
   ============================================================ */

'use strict';

// ============================================================
// DATA
// ============================================================

const SKILLS_DATA = [
  {
    name: 'Frontend Development',
    desc: 'Building fast, responsive, and visually stunning user interfaces with modern web technologies.',
    tags: ['React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    name: 'Backend Development',
    desc: 'Scalable server-side solutions, REST APIs, and robust database architecture for production-grade apps.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Firebase']
  },
  {
    name: 'Full Stack Applications',
    desc: 'End-to-end web applications from database design to polished, performant frontend experiences.',
    tags: ['MERN Stack', 'Next.js', 'PostgreSQL', 'REST APIs']
  },
  {
    name: 'Webflow Development',
    desc: 'Premium Webflow websites with custom interactions, CMS collections, and on-page SEO.',
    tags: ['Webflow', 'CMS', 'Custom Interactions', 'SEO']
  },
  {
    name: 'Framer Development',
    desc: 'High-fidelity prototypes and production-ready Framer sites with silky-smooth animations.',
    tags: ['Framer', 'Framer Motion', 'Animations', 'Prototyping']
  },
  {
    name: 'Automation & Workflows',
    desc: 'Smart workflow automation that eliminates manual tasks, saves time, and scales operations.',
    tags: ['Make.com', 'Zapier', 'n8n', 'Webhooks']
  },
  {
    name: 'E-Commerce Development',
    desc: 'High-converting online stores with payment integrations, inventory management, and optimized UX.',
    tags: ['Shopify', 'WooCommerce', 'Stripe', 'E-Commerce']
  },
  {
    name: 'API Integrations',
    desc: 'Seamlessly connecting third-party services — payment gateways, CRMs, social platforms, and more.',
    tags: ['REST APIs', 'GraphQL', 'Third-Party APIs', 'OAuth']
  },
  {
    name: 'UI/UX Implementation',
    desc: 'Translating Figma designs into pixel-perfect, accessible, and animated UI components.',
    tags: ['Figma', 'Responsive Design', 'Accessibility', 'Design Systems']
  },
  {
    name: 'SaaS Development',
    desc: 'Production-grade SaaS platforms with authentication, dashboards, subscriptions, and multi-tenancy.',
    tags: ['SaaS', 'Auth', 'Stripe', 'Dashboards']
  }
];

const TECH_STACK = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'Node.js' },
  { name: 'MongoDB' },
  { name: 'Firebase' },
  { name: 'Tailwind CSS' },
  { name: 'Webflow' },
  { name: 'Framer' },
  { name: 'Shopify' },
  { name: 'PostgreSQL' },
  { name: 'Vue.js' },
  { name: 'Express.js' },
  { name: 'Make.com' },
  { name: 'Figma' }
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Laxura Palace — Luxury Hotel Website',
    shortDesc: 'A stunning 5-star luxury hotel website for Laxura Palace in Eden Garden.',
    fullDesc: 'Designed and developed a complete luxury hotel website for Laxura Palace — a 5-star property in Eden Garden. The site features premium suite showcases, restaurant and spa service pages, an online booking system, and a photo gallery. The design uses rich dark gold and ivory tones to convey exclusivity and elegance. Built for performance with fast load times and fully mobile-responsive layouts.',
    category: 'Web App',
    tags: ['React', 'Vite', 'Luxury', 'Hotel'],
    link: 'https://the-grand-arrival.vercel.app/',
    thumb: 'assets/thumb-laxura.png',
    gallery: ['assets/thumb-laxura.png', 'assets/thumb-laxura.png', 'assets/thumb-laxura.png'],
    featured: true
  },
  {
    id: 2,
    title: 'Learnify — Online Learning Platform',
    shortDesc: 'A premier e-learning platform serving 50,000+ students with expert-led courses.',
    fullDesc: 'Built a full-featured online learning platform for Learnify — a growing EdTech startup. The platform supports 50,000+ students with courses in Web Development, Data Science, Digital Marketing, and more. Key features include course enrollment, progress tracking, video lessons, quizzes, certificates of completion, and a student dashboard. Instructor panel allows course creation and student management.',
    category: 'SaaS',
    tags: ['React', 'Vite', 'EdTech', 'SaaS'],
    link: 'https://courseseekho-f3az.vercel.app/',
    thumb: 'assets/thumb-learnify.png',
    gallery: ['assets/thumb-learnify.png', 'assets/thumb-learnify.png', 'assets/thumb-learnify.png'],
    featured: true
  },
  {
    id: 3,
    title: 'SaaSlyte — B2B GTM Recruiting Platform',
    shortDesc: 'A bilingual B2B SaaS recruiting platform for Go-To-Market roles across Europe.',
    fullDesc: 'Developed SaaSlyte — a specialized B2B SaaS platform that connects companies with Go-To-Market talent across German and English-speaking markets. Features a bilingual interface (DE/EN), candidate shortlisting within 7-10 days, a client dashboard for tracking hiring progress, and integration with major job boards. Built in Webflow with custom CMS structure and advanced filtering.',
    category: 'SaaS',
    tags: ['Webflow', 'B2B', 'SaaS', 'Multilingual'],
    link: 'https://www.saaslyte.com/en',
    thumb: 'assets/thumb-saaslyte.png',
    gallery: ['assets/thumb-saaslyte.png', 'assets/thumb-saaslyte.png', 'assets/thumb-saaslyte.png'],
    featured: true
  },
  {
    id: 4,
    title: 'Tamba — InsurTech Platform',
    shortDesc: 'An enterprise-grade technology platform serving the insurance industry.',
    fullDesc: 'Built the complete marketing and product website for Tamba — a cutting-edge InsurTech platform serving brokers, insurers, and policyholders. The site showcases five core products: Central Platform, Broker Portal, Customer App, Insurer Dashboard, and Claims Management. Built in Webflow with a clean enterprise design system, smooth scroll animations, and a detailed product comparison architecture.',
    category: 'Webflow',
    tags: ['Webflow', 'InsurTech', 'Enterprise', 'Platform'],
    link: 'https://www.tambatech.io/',
    thumb: 'assets/thumb-tamba.png',
    gallery: ['assets/thumb-tamba.png', 'assets/thumb-tamba.png', 'assets/thumb-tamba.png'],
    featured: true
  },
  {
    id: 5,
    title: 'Creative Portfolio — Webflow',
    shortDesc: 'A sleek, animated creative portfolio built in Webflow with CMS-powered content.',
    fullDesc: 'Designed and developed a premium creative portfolio website using Webflow. The site features smooth scroll-triggered animations, a CMS-powered project gallery, custom cursor effects, and a contact form with Webflow Integrations. The design follows a minimal dark aesthetic with typography-led layouts. Built for maximum performance with lazy-loaded images and optimized asset delivery.',
    category: 'Webflow',
    tags: ['Webflow', 'CMS', 'Portfolio', 'Animations'],
    link: 'https://muhammads-awesome-site-de3b47.webflow.io/',
    thumb: 'assets/thumb-portfolio.png',
    gallery: ['assets/thumb-portfolio.png', 'assets/thumb-portfolio.png', 'assets/thumb-portfolio.png'],
    featured: false
  },
  {
    id: 6,
    title: 'DoveHero — Brand Website',
    shortDesc: 'A modern brand website with immersive scroll animations and strong visual identity.',
    fullDesc: 'Built the brand website for DoveHero — a modern company requiring a strong digital presence. The site showcases brand values, services, and team culture through immersive scroll animations, a bold visual hierarchy, and a clean layout system. Built entirely in Webflow with custom interactions, a responsive grid, and integrated contact forms. The design prioritizes brand storytelling and conversion.',
    category: 'Webflow',
    tags: ['Webflow', 'Branding', 'Animations', 'UI/UX'],
    link: 'https://dovehero-909c5f.webflow.io/home-page',
    thumb: 'assets/thumb-dovehero.png',
    gallery: ['assets/thumb-dovehero.png', 'assets/thumb-dovehero.png', 'assets/thumb-dovehero.png'],
    featured: false
  },
  {
    id: 7,
    title: 'Ronasit — Delivery App Case Study',
    shortDesc: 'A detailed UX case study website for a delivery management application.',
    fullDesc: 'Developed a comprehensive case study website for Ronasit showcasing the design and development process of a delivery management application. The page presents the problem statement, user research findings, UX wireframes, solution architecture, technical stack, and measurable results including delivery speed improvements and operational cost reductions. Designed with a clean editorial layout for maximum readability.',
    category: 'Case Study',
    tags: ['UI/UX', 'Case Study', 'Logistics', 'Research'],
    link: 'https://ronasit.com/cases/delivery-case/',
    thumb: 'assets/thumb-ronasit.png',
    gallery: ['assets/thumb-ronasit.png', 'assets/thumb-ronasit.png', 'assets/thumb-ronasit.png'],
    featured: false
  },
  {
    id: 8,
    title: 'Simshop — Racing Simulator Store',
    shortDesc: 'A premium Shopify e-commerce store for high-end racing simulator hardware.',
    fullDesc: 'Developed a high-performance e-commerce store for Simshop — a premium retailer of racing simulator hardware. The store features products from Simagic, Moza, and other top brands including direct drive wheel bases, steering wheels, pedals, and full cockpit setups. Built on Shopify with custom theme development, advanced product filtering, bundle configurator, and real-time stock notifications. The dark, motorsport-inspired design drives strong conversion rates.',
    category: 'E-Commerce',
    tags: ['Shopify', 'E-Commerce', 'Custom Theme', 'Motorsport'],
    link: 'https://simshop.com/',
    thumb: 'assets/thumb-simshop.png',
    gallery: ['assets/thumb-simshop.png', 'assets/thumb-simshop.png', 'assets/thumb-simshop.png'],
    featured: false
  }
];

const WHY_DATA = [
  { title: 'On-Time Delivery', desc: 'Every project is planned with clear milestones. I ship on time, every time, without cutting corners on quality.' },
  { title: 'Premium Design Quality', desc: 'Attention to every pixel. My work consistently meets the standards of world-class agencies.' },
  { title: 'Clean, Scalable Code', desc: 'Well-structured, documented codebases that are easy to maintain and built to grow with your business.' },
  { title: 'Full-Spectrum Skills', desc: 'From design to deployment — I handle the entire product lifecycle so you work with one person, not a team.' },
  { title: 'Clear Communication', desc: 'Daily updates, transparent timelines, and proactive problem-solving throughout every project.' },
  { title: 'Results-Driven Approach', desc: 'Every decision is made with your business goals in mind — conversions, performance, and user experience.' }
];

const TESTIMONIALS_DATA = [
  {
    text: "Muhammad delivered our project ahead of schedule with exceptional quality. The website exceeded all our expectations — it's fast, beautiful, and converts visitors like never before.",
    name: 'Sarah Johnson',
    role: 'CEO, TechStartup Inc.',
    initials: 'SJ',
    stars: 5
  },
  {
    text: "Working with Muhammad was an absolute pleasure. He understood our vision instantly and executed it flawlessly. His attention to the smallest detail is what sets him apart.",
    name: 'Ahmed Hassan',
    role: 'Founder, SaaSlyte',
    initials: 'AH',
    stars: 5
  },
  {
    text: "I've worked with many developers, but Muhammad stands out. His Webflow skills are among the best I've seen, and the quality of his animations is outstanding. Will work together again.",
    name: 'Emma Clarke',
    role: 'Marketing Director, Tamba',
    initials: 'EC',
    stars: 5
  },
  {
    text: "Our e-commerce store's conversions increased by 40% after Muhammad rebuilt it. The design is stunning and the performance is exceptional. He truly understands both design and business.",
    name: 'Michael Chen',
    role: 'Owner, Simshop',
    initials: 'MC',
    stars: 5
  },
  {
    text: "Muhammad built our entire SaaS platform from scratch in record time. The code quality is outstanding, and the UI is something our users constantly compliment. Highly recommended.",
    name: 'Lisa Rodriguez',
    role: 'Product Manager, Learnify',
    initials: 'LR',
    stars: 5
  },
  {
    text: "Exceptional communication throughout the project. Muhammad kept us updated at every step and delivered exactly what we discussed — with extra polish we didn't even ask for.",
    name: 'David Kim',
    role: 'CTO, Digital Agency',
    initials: 'DK',
    stars: 5
  }
];

// ============================================================
// UTILITY
// ============================================================

function getCategories(projects) {
  return ['All', ...new Set(projects.map(p => p.category))];
}

function getFeaturedProjects(projects, count = 4) {
  const featured = projects.filter(p => p.featured);
  if (featured.length >= count) return featured.slice(0, count);
  return [...featured, ...projects.filter(p => !p.featured)].slice(0, count);
}

// ============================================================
// CUSTOM CURSOR
// ============================================================

function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring || window.innerWidth <= 768) return;

  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .skill-card, .project-card, .why-card, .testimonial-card').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('expanded'));
    el.addEventListener('mouseleave', () => ring.classList.remove('expanded'));
  });
}

// ============================================================
// NAVBAR
// ============================================================

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('nav-toggle');
  const mobile = document.getElementById('nav-mobile');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveNav();
  }, { passive: true });

  if (toggle && mobile) {
    toggle.addEventListener('click', () => mobile.classList.toggle('open'));
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.forEach(l => {
    l.classList.remove('active');
    if (l.getAttribute('href') === '#' + current) l.classList.add('active');
  });
}

// ============================================================
// PARTICLES
// ============================================================

function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const count = window.innerWidth < 768 ? 10 : 25;
  const colors = ['rgba(59,130,246,0.5)', 'rgba(139,92,246,0.4)', 'rgba(6,182,212,0.4)'];
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*3)]};animation-duration:${Math.random()*15+10}s;animation-delay:-${Math.random()*10}s;--drift:${(Math.random()-.5)*200}px;border-radius:50%;`;
    container.appendChild(p);
  }
}

// ============================================================
// RENDER SKILLS
// ============================================================

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = SKILLS_DATA.map((s, i) => `
    <div class="skill-card stagger-${(i % 6) + 1}">
      <div class="skill-name">${s.name}</div>
      <div class="skill-desc">${s.desc}</div>
      <div class="skill-tags">${s.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');

  const track = document.getElementById('marquee-track');
  if (track) {
    const badges = TECH_STACK.map(t => `<div class="tech-badge">${t.name}</div>`).join('');
    track.innerHTML = badges + badges;
  }
}

// ============================================================
// PROJECT MODAL
// ============================================================

function openProjectModal(project) {
  let modal = document.getElementById('project-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'project-modal';
    modal.className = 'project-modal-overlay';
    modal.innerHTML = `
      <div class="project-modal-box">
        <button class="modal-close" id="modal-close-btn" aria-label="Close">&#10005;</button>
        <div class="modal-body" id="modal-body"></div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeProjectModal(); });
    document.getElementById('modal-close-btn').addEventListener('click', closeProjectModal);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProjectModal(); });
  }

  const body = document.getElementById('modal-body');
  body.innerHTML = `
    <div class="modal-header">
      <div class="modal-category">${project.category}</div>
      <h2 class="modal-title">${project.title}</h2>
      <div class="modal-tags">${project.tags.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}</div>
    </div>

    <div class="modal-gallery">
      <div class="gallery-main" id="gallery-main">
        <img src="${project.gallery[0]}" alt="${project.title} screenshot 1" class="gallery-main-img" id="gallery-main-img" />
      </div>
      <div class="gallery-thumbs">
        ${project.gallery.map((img, i) => `
          <img src="${img}" alt="${project.title} screenshot ${i+1}" class="gallery-thumb ${i===0?'active':''}" data-index="${i}" />
        `).join('')}
      </div>
    </div>

    <div class="modal-description">
      <h3>About This Project</h3>
      <p>${project.fullDesc}</p>
    </div>

    <div class="modal-footer">
      <a href="${project.link}" target="_blank" rel="noopener" class="btn-primary modal-live-btn">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        View Live Site
      </a>
    </div>
  `;

  // Gallery thumb click
  body.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      body.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      document.getElementById('gallery-main-img').src = project.gallery[parseInt(thumb.dataset.index)];
    });
  });

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) { modal.classList.remove('open'); document.body.style.overflow = ''; }
}

// ============================================================
// RENDER PROJECTS
// ============================================================

function renderProjects() {
  const filterBar = document.getElementById('filter-bar');
  const grid = document.getElementById('projects-grid');
  if (!filterBar || !grid) return;

  const featured = getFeaturedProjects(PROJECTS_DATA, 4);
  const categories = getCategories(featured);
  let activeFilter = 'All';

  filterBar.innerHTML = categories.map(cat =>
    `<button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-filter="${cat}">${cat}</button>`
  ).join('');

  filterBar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderProjectCards(featured, activeFilter);
    });
  });

  renderProjectCards(featured, 'All');
}

function renderProjectCards(projects, filter) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  grid.innerHTML = filtered.map((p, i) => `
    <div class="project-card stagger-${(i % 4) + 1}" data-project-id="${p.id}" role="button" tabindex="0" aria-label="View ${p.title} details">
      <div class="project-thumb">
        <img src="${p.thumb}" alt="${p.title}" class="project-thumb-img" loading="lazy" />
        <span class="project-category-tag">${p.category}</span>
        <div class="project-overlay">
          <button class="project-overlay-btn primary open-modal-btn" data-id="${p.id}">
            View Details
          </button>
          <a href="${p.link}" target="_blank" rel="noopener" class="project-overlay-btn secondary" onclick="event.stopPropagation()">
            Live Preview
          </a>
        </div>
      </div>
      <div class="project-content">
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.shortDesc}</div>
        <div class="project-tech">${p.tags.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');

  setTimeout(() => grid.querySelectorAll('.project-card').forEach(c => c.classList.add('visible')), 50);

  // Bind modal open on card click
  grid.querySelectorAll('.open-modal-btn, .project-card').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') return; // let live preview links pass through
      const id = parseInt(el.dataset.id || el.dataset.projectId || el.closest('[data-project-id]')?.dataset.projectId);
      const project = PROJECTS_DATA.find(p => p.id === id);
      if (project) openProjectModal(project);
    });
  });

  if (window.innerWidth > 768) {
    const ring = document.getElementById('cursor-ring');
    if (ring) {
      grid.querySelectorAll('.project-card').forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('expanded'));
        el.addEventListener('mouseleave', () => ring.classList.remove('expanded'));
      });
    }
  }
}

// ============================================================
// RENDER WHY CARDS
// ============================================================

function renderWhyCards() {
  const grid = document.getElementById('why-grid');
  if (!grid) return;
  grid.innerHTML = WHY_DATA.map((w, i) => `
    <div class="why-card stagger-${(i % 6) + 1}">
      <div class="why-number">0${i + 1}</div>
      <div class="why-title">${w.title}</div>
      <div class="why-desc">${w.desc}</div>
    </div>
  `).join('');
}

// ============================================================
// RENDER TESTIMONIALS
// ============================================================

function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;
  grid.innerHTML = TESTIMONIALS_DATA.map((t, i) => `
    <div class="testimonial-card stagger-${(i % 3) + 1}">
      <div class="testimonial-stars">${'&#9733;'.repeat(t.stars)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.initials}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// CONTACT FORM
// ============================================================

function initContactForm() {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  const submitBtn = document.getElementById('submit-btn');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (submitBtn) { submitBtn.textContent = 'Sending...'; submitBtn.disabled = true; }
    setTimeout(() => {
      form.style.display = 'none';
      if (success) success.classList.add('show');
    }, 1500);
  });
}

// ============================================================
// SCROLL REVEAL
// ============================================================

function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .section-tag, .section-title, .section-subtitle, .skill-card, .project-card, .why-card, .testimonial-card').forEach(el => observer.observe(el));
}

// ============================================================
// MAGNETIC BUTTONS
// ============================================================

function initMagneticButtons() {
  if (window.innerWidth <= 768) return;
  document.querySelectorAll('.btn-primary, .btn-secondary, .btn-nav-primary').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      btn.style.transform = `translate(${(e.clientX - rect.left - rect.width/2) * 0.15}px, ${(e.clientY - rect.top - rect.height/2) * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => btn.style.transform = '');
  });
}

// ============================================================
// ANIMATED COUNTERS
// ============================================================

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target.classList.contains('counted')) return;
      entry.target.classList.add('counted');
      const target = entry.target.textContent;
      const num = target.match(/\d+/);
      if (!num) return;
      const end = parseInt(num[0]);
      const suffix = target.replace(/\d+/, '');
      let current = 0;
      const step = end / 30;
      const counter = setInterval(() => {
        current += step;
        if (current >= end) { current = end; clearInterval(counter); }
        entry.target.textContent = Math.floor(current) + suffix;
      }, 40);
    });
  }, { threshold: 0.8 });
  document.querySelectorAll('.stat-value').forEach(s => observer.observe(s));
}

// ============================================================
// PARALLAX
// ============================================================

function initParallax() {
  const hero = document.querySelector('.hero-img');
  if (!hero) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) hero.style.transform = `translateY(${window.scrollY * 0.08}px)`;
  }, { passive: true });
}

// ============================================================
// GLOW EFFECT ON CARDS
// ============================================================

function initGlowEffect() {
  if (window.innerWidth <= 768) return;
  document.querySelectorAll('.skill-card, .project-card, .why-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
      card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
    });
  });
}

// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  renderWhyCards();
  renderTestimonials();

  initRevealAnimations();
  initCursor();
  initNavbar();
  initParticles();
  initContactForm();
  initMagneticButtons();
  initCounters();
  initParallax();
  initGlowEffect();

  window.addEventListener('scroll', updateActiveNav, { passive: true });
});

window.ALL_PROJECTS_DATA = PROJECTS_DATA;
window.openProjectModal = openProjectModal;
