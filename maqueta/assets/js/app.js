/* =========================================================
   GESTIÓN SEGUROS — App interactivity
   Tabs, FAQ, simulador, scroll animations, nav móvil,
   WhatsApp, cookies, counter up, form validation.
   ========================================================= */

(() => {
  'use strict';

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ----------------------- Loader ----------------------- */
  window.addEventListener('load', () => {
    const loader = $('#loader');
    if (loader) setTimeout(() => loader.classList.add('hide'), 350);
  });

  /* ----------------------- Nav scroll state & móvil ----------------------- */
  const nav = $('#nav');
  const navToggle = $('#navToggle');
  const navMenu = $('#navMenu');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $$('a', navMenu).forEach(a => a.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  /* ----------------------- Productos: tabs ----------------------- */
  const prodTabs = $$('.prod-tab');
  const prodCards = $$('.prod-card');
  prodTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      prodTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      prodCards.forEach(card => {
        const cats = (card.dataset.category || '').split(' ');
        card.classList.toggle('hidden', filter !== 'all' && !cats.includes(filter));
      });
    });
  });

  /* ----------------------- FAQ accordion ----------------------- */
  $$('.faq-item').forEach(item => {
    const q = $('.faq-q', item);
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // cierra otras del mismo contenedor
      $$('.faq-item', item.parentElement).forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ----------------------- Simulador de cobertura ----------------------- */
  const sim = $('#simulador');
  if (sim) {
    const tipoOpts = $$('[data-sim="tipo"] .sim-option', sim);
    const durOpts  = $$('[data-sim="duracion"] .sim-option', sim);
    const valor    = $('#simValor', sim);
    const resultado = $('#simResultado', sim);
    const ctx = { tipo: 'alquiler-vivienda', duracion: 24, valor: 650000 };

    // Factor base mensual por producto (porcentaje aproximado sobre el valor)
    const FACTORES = {
      'alquiler-vivienda': 0.038,    // ~3.8% mensual — garantía Ley 27.551
      'alquiler-comercial': 0.046,   // locales
      'accidentes-personales': 0.012,
      'vida-colectivo': 0.008,
    };

    const format = n => '$ ' + Math.round(n).toLocaleString('es-AR');

    const calcular = () => {
      const f = FACTORES[ctx.tipo] || 0.03;
      let prima = ctx.valor * f;
      // Ajuste por duración (más largo = pequeño descuento)
      if (ctx.duracion === 36) prima *= 0.96;
      if (ctx.duracion === 48) prima *= 0.92;
      if (ctx.duracion === 12) prima *= 1.05;
      resultado.textContent = format(prima);
    };

    tipoOpts.forEach(o => o.addEventListener('click', () => {
      tipoOpts.forEach(x => x.classList.remove('active'));
      o.classList.add('active');
      ctx.tipo = o.dataset.value;
      calcular();
    }));
    durOpts.forEach(o => o.addEventListener('click', () => {
      durOpts.forEach(x => x.classList.remove('active'));
      o.classList.add('active');
      ctx.duracion = Number(o.dataset.value);
      calcular();
    }));

    if (valor) {
      const parse = v => Number(String(v).replace(/[^0-9]/g, '')) || 0;
      valor.addEventListener('input', () => {
        const raw = parse(valor.value);
        ctx.valor = raw;
        valor.value = raw ? format(raw) : '';
        calcular();
      });
    }

    calcular();
  }

  /* ----------------------- Counter up ----------------------- */
  const counters = $$('[data-counter]');
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = Number(el.dataset.counter);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 1400;
      const start = performance.now();
      const tick = now => {
        const p = Math.min(1, (now - start) / duration);
        const ease = 1 - Math.pow(1 - p, 3);
        const val = Math.round(target * ease);
        el.textContent = prefix + val.toLocaleString('es-AR') + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterObs.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(el => counterObs.observe(el));

  /* ----------------------- Reveal on scroll ----------------------- */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => revealObs.observe(el));

  /* ----------------------- Cookies ----------------------- */
  const cookies = $('#cookies');
  if (cookies && !localStorage.getItem('gs-cookies-ok')) {
    setTimeout(() => cookies.classList.add('show'), 900);
    $('#cookiesOk', cookies)?.addEventListener('click', () => {
      cookies.classList.remove('show');
      localStorage.setItem('gs-cookies-ok', '1');
    });
  }

  /* ----------------------- Formulario contacto ----------------------- */
  const form = $('#contactForm');
  if (form) {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      if (!data.nombre || !data.email) return;
      // Mail fallback: abre el cliente de correo con los datos precargados
      const subject = encodeURIComponent(`Consulta ${data.producto || 'web'} · ${data.nombre}`);
      const body = encodeURIComponent(
        `Nombre: ${data.nombre}\nEmail: ${data.email}\nTeléfono: ${data.telefono || '-'}\nProducto: ${data.producto || '-'}\n\nMensaje:\n${data.mensaje || '-'}`
      );
      const destino = {
        'caucion': 'caucion@gestionseguros.com.ar',
        'personas': 'personas@gestionseguros.com.ar',
        'rc': 'rc@gestionseguros.com.ar',
      }[data.producto] || 'info@gestionseguros.com.ar';
      window.location.href = `mailto:${destino}?subject=${subject}&body=${body}`;
      form.reset();
      const ok = $('#formOk');
      if (ok) { ok.style.display = 'block'; setTimeout(() => ok.style.display = 'none', 6000); }
    });
  }

  /* ----------------------- Smooth scroll para anchors internos ----------------------- */
  $$('a[href^="#"]').forEach(a => {
    const href = a.getAttribute('href');
    if (href.length < 2) return;
    a.addEventListener('click', (e) => {
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  /* ----------------------- Año dinámico en footer ----------------------- */
  const yearEl = $('#currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
