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
  const NAV_MOBILE_MAX = 1280;
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
      if (!open) {
        $$('.has-submenu.open', navMenu).forEach(item => item.classList.remove('open'));
      }
    });
    const submenuItems = $$('.has-submenu', navMenu);
    submenuItems.forEach(item => {
      const trigger = $('a', item);
      if (!trigger) return;
      trigger.addEventListener('click', (ev) => {
        if (window.innerWidth > NAV_MOBILE_MAX) return;
        ev.preventDefault();
        const isOpen = item.classList.contains('open');
        submenuItems.forEach(x => x.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });
    $$('a', navMenu).forEach(a => a.addEventListener('click', () => {
      if (window.innerWidth <= NAV_MOBILE_MAX && a.closest('.has-submenu') && !a.closest('.submenu')) {
        return;
      }
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      $$('.has-submenu.open', navMenu).forEach(item => item.classList.remove('open'));
    }));
  }

  /* ----------------------- Productos: tabs (solo una rama visible; sin "Todos") ----------------------- */
  const productosSection = $('#productos');
  const prodGrid = productosSection ? $('.prod-grid', productosSection) : null;
  const prodTabs = productosSection ? $$('.prod-tab', productosSection) : [];
  const prodCards = prodGrid ? $$('.prod-card', prodGrid) : [];
  function applyProdFilter(filter) {
    if (!filter || !prodCards.length) return;
    prodCards.forEach(card => {
      const cats = (card.dataset.category || '').split(' ').filter(Boolean);
      card.classList.toggle('hidden', !cats.includes(filter));
    });
    // Ajusta columnas según cards visibles (desktop): 4 para Caución, 3 para Personas/RC.
    if (prodGrid) {
      const visibleCount = prodCards.filter(card => !card.classList.contains('hidden')).length;
      const cols = Math.min(4, Math.max(1, visibleCount));
      prodGrid.style.setProperty('--prod-cols', String(cols));
      // Tablet: evita cards huérfanas (3 en una fila para Personas/RC, 2 para Caución).
      const tabletCols = visibleCount === 3 ? 3 : 2;
      prodGrid.style.setProperty('--prod-cols-tablet', String(tabletCols));
    }
  }
  prodTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      prodTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      applyProdFilter(tab.dataset.filter);
    });
  });
  const initialProdTab = prodTabs.find(t => t.classList.contains('active')) || prodTabs[0];
  if (initialProdTab) applyProdFilter(initialProdTab.dataset.filter);

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

  /* ----------------------- Simulador Alquileres ----------------------- */
  const alqForm = $('#alqForm');
  if (alqForm) {
    const ambBtns = $$('.alq-opts button[data-amb]', alqForm);
    const valorAlquiler = $('#alqValor', alqForm);
    const valorExpensas = $('#alqExpensas', alqForm);
    const duracion = $('#alqDuracion', alqForm);
    const provincia = $('#alqProvincia', alqForm);
    const email = $('#alqEmail', alqForm);
    const area = $('#alqArea', alqForm);
    const telefono = $('#alqTelefono', alqForm);
    const errorEl = $('#alqError', alqForm);
    const resultEl = $('#alqResultado', alqForm);
    const contactLink = $('#alqContactoLink', alqForm);

    let ambientes = Number($('.alq-opts button.active', alqForm)?.dataset.amb || 2);
    const formatMoney = n => '$ ' + Math.round(n).toLocaleString('es-AR');
    const toNumber = v => Number(String(v || '').replace(/[^0-9]/g, '')) || 0;
    const isEmail = v => /\S+@\S+\.\S+/.test(v);
    const calcularPrima = (alquiler, expensas, meses, amb) => {
      // Formula estimativa: base sobre alquiler + expensas, ajustada por plazo y ambientes.
      let prima = alquiler * 0.036 + expensas * 0.012;
      if (meses === 12) prima *= 1.05;
      if (meses === 36) prima *= 0.94;
      if (amb >= 4) prima *= 1.06;
      if (amb === 1) prima *= 0.96;
      return prima;
    };

    const setError = msg => {
      if (!errorEl) return;
      errorEl.textContent = msg || '';
      errorEl.style.display = msg ? 'block' : 'none';
    };

    ambBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        ambBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        ambientes = Number(btn.dataset.amb || 0);
        preview();
      });
    });

    [valorAlquiler, valorExpensas].forEach(input => {
      if (!input) return;
      input.addEventListener('input', () => {
        const raw = toNumber(input.value);
        input.value = raw ? formatMoney(raw) : '';
        preview();
      });
      input.addEventListener('blur', () => {
        const value = toNumber(input.value);
        input.value = value ? formatMoney(value) : '';
        preview();
      });
    });

    [duracion, provincia].forEach(input => {
      if (!input) return;
      input.addEventListener('change', () => preview());
    });

    const preview = () => {
      const alquiler = toNumber(valorAlquiler?.value);
      const expensas = toNumber(valorExpensas?.value);
      const meses = Number(duracion?.value || 0);
      if (!alquiler || !expensas || !meses || !ambientes || !resultEl) {
        if (resultEl) resultEl.style.display = 'none';
        return;
      }
      const prima = calcularPrima(alquiler, expensas, meses, ambientes);
      const totalContrato = prima * meses;
      resultEl.innerHTML = `Prima mensual estimada: <strong>${formatMoney(prima)}</strong><br>Total estimado del contrato (${meses} meses): <strong>${formatMoney(totalContrato)}</strong>`;
      resultEl.style.display = 'block';
    };

    alqForm.addEventListener('submit', (ev) => {
      ev.preventDefault();
      setError('');
      if (resultEl) resultEl.style.display = 'none';
      if (contactLink) contactLink.style.display = 'none';

      const alquiler = toNumber(valorAlquiler?.value);
      const expensas = toNumber(valorExpensas?.value);
      const meses = Number(duracion?.value || 0);
      const mail = (email?.value || '').trim();
      const codArea = (area?.value || '').trim();
      const tel = (telefono?.value || '').trim();

      if (!ambientes) return setError('Seleccioná la cantidad de ambientes.');
      if (!alquiler || !expensas) return setError('Completá valor de alquiler y expensas.');
      if (!meses) return setError('Seleccioná la duración del contrato.');
      if (!provincia?.value) return setError('Seleccioná una provincia.');
      if (!isEmail(mail)) return setError('Ingresá un e-mail válido.');
      if (!codArea || !tel) return setError('Completá código de área y teléfono.');

      const prima = calcularPrima(alquiler, expensas, meses, ambientes);
      const totalContrato = prima * meses;

      if (resultEl) {
        resultEl.innerHTML = `Prima mensual estimada: <strong>${formatMoney(prima)}</strong><br>Total estimado del contrato (${meses} meses): <strong>${formatMoney(totalContrato)}</strong>`;
        resultEl.style.display = 'block';
      }
      if (contactLink) {
        contactLink.href = `contacto.html?producto=alquileres&alquiler=${alquiler}&expensas=${expensas}&duracion=${meses}&ambientes=${ambientes}&provincia=${encodeURIComponent(provincia.value)}`;
        contactLink.style.display = 'inline-block';
      }
    });
    preview();
  }

  /* ----------------------- Partners / reaseguradores carousel ----------------------- */
  const partnersRoot = $('#reaseguradores');
  if (partnersRoot) {
    const viewport = $('.partners-viewport', partnersRoot);
    const track = $('.partners-track', partnersRoot);
    const prevBtn = $('.partners-prev', partnersRoot);
    const nextBtn = $('.partners-next', partnersRoot);
    const items = $$('.partner-item', track);
    let offsetPx = 0;

    const gapPx = () => {
      const g = getComputedStyle(track).gap;
      const n = parseFloat(g);
      return Number.isFinite(n) ? n : 48;
    };

    const stepSize = () => {
      if (!items[0]) return 200;
      return items[0].getBoundingClientRect().width + gapPx();
    };

    const maxOffset = () => Math.max(0, track.scrollWidth - viewport.clientWidth);

    const render = () => {
      const max = maxOffset();
      offsetPx = Math.max(0, Math.min(offsetPx, max));
      track.style.transform = `translateX(${-offsetPx}px)`;
      prevBtn.disabled = offsetPx <= 0;
      nextBtn.disabled = offsetPx >= max - 1;
    };

    prevBtn.addEventListener('click', () => {
      offsetPx -= stepSize();
      render();
    });
    nextBtn.addEventListener('click', () => {
      offsetPx += stepSize();
      render();
    });
    window.addEventListener('resize', () => {
      offsetPx = Math.min(offsetPx, maxOffset());
      render();
    }, { passive: true });
    render();
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
    if (form.dataset.serverSubmit === 'true') return;
    const params = new URLSearchParams(window.location.search);
    const qProducto = params.get('producto');
    const qAlquiler = params.get('alquiler');
    const qExpensas = params.get('expensas');
    const qDuracion = params.get('duracion');
    const qAmbientes = params.get('ambientes');
    const qProvincia = params.get('provincia');
    const productoField = $('select[name="producto"]', form);
    const mensajeField = $('textarea[name="mensaje"]', form);
    if (qProducto && productoField) productoField.value = qProducto;
    if (qAlquiler || qExpensas || qDuracion || qAmbientes || qProvincia) {
      const bloque = [
        'Simulación de Alquileres:',
        qAlquiler ? `- Alquiler: $ ${Number(qAlquiler).toLocaleString('es-AR')}` : '',
        qExpensas ? `- Expensas: $ ${Number(qExpensas).toLocaleString('es-AR')}` : '',
        qDuracion ? `- Duración: ${qDuracion} meses` : '',
        qAmbientes ? `- Ambientes: ${qAmbientes}` : '',
        qProvincia ? `- Provincia: ${qProvincia}` : ''
      ].filter(Boolean).join('\n');
      if (mensajeField && !mensajeField.value.trim()) mensajeField.value = bloque;
    }

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
        'pas': 'comercial@gestionseguros.com.ar',
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
