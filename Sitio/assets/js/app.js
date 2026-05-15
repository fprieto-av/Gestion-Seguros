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

  /* ----------------------- Topbar compartida ----------------------- */
  const sharedTopbar = document.querySelector('.topbar');
  if (sharedTopbar) {
    sharedTopbar.innerHTML = `
  <div class="topbar-left">
    <a href="tel:+541152544009"><svg class="icon"><use href="#i-phone"/></svg> (+54) 5254-4009</a>
    <a href="tel:08003451340"><svg class="icon"><use href="#i-phone"/></svg> 0800-345-1340</a>
    <span class="topbar-item">Lunes a Viernes · 9 a 18hs</span>
  </div>
  <div class="topbar-right">
    <a href="mailto:info@gestionseguros.com.ar"><svg class="icon"><use href="#i-mail"/></svg> info@gestionseguros.com.ar</a>
    <a href="#">Denunciar siniestro</a>
  </div>`;
  }

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
        contactLink.style.display = 'inline-flex';
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
    if (!viewport || !track || !prevBtn || !nextBtn) {
      // Section can be rendered as a video block.
    } else {
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

  /* ----------------------- Branding bloques internos ----------------------- */
  const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const isHome = path === '' || path === 'index.html';
  const pageCfg = {
    'caucion.html': {
      unidad: 'Caución',
      email: 'caucion@gestionseguros.com.ar',
      whatsappText: 'Hola! Quiero cotizar un seguro de caución',
      ctaTitle: '¿Necesitás una cobertura a medida?',
      ctaText: 'Nuestro equipo de caución te asesora en minutos.',
      ctaHref: 'contacto.html?producto=caucion'
    },
    'alquileres.html': {
      unidad: 'Alquileres',
      email: 'caucion@gestionseguros.com.ar',
      whatsappText: 'Hola! Quiero cotizar una garantía de alquiler',
      ctaTitle: '¿Querés avanzar con tu garantía?',
      ctaText: 'Recibí asistencia personalizada para tu alquiler.',
      ctaHref: 'contacto.html?producto=alquileres'
    },
    'personas.html': {
      unidad: 'Personas',
      email: 'personas@gestionseguros.com.ar',
      whatsappText: 'Hola! Quiero cotizar un seguro de personas',
      ctaTitle: '¿Buscás protección personal o familiar?',
      ctaText: 'Te guiamos para elegir la cobertura ideal.',
      ctaHref: 'contacto.html?producto=personas'
    },
    'responsabilidad-civil.html': {
      unidad: 'Responsabilidad Civil',
      email: 'rc@gestionseguros.com.ar',
      whatsappText: 'Hola! Quiero cotizar una cobertura de responsabilidad civil',
      ctaTitle: '¿Necesitás respaldo para tu actividad?',
      ctaText: 'Cotizá RC con acompañamiento de especialistas.',
      ctaHref: 'contacto.html?producto=rc'
    },
    'productores.html': {
      unidad: 'Productores',
      email: 'productores@gestionseguros.com.ar',
      whatsappText: 'Hola! Soy PAS y quiero sumarme',
      ctaTitle: '¿Sos PAS y querés sumarte?',
      ctaText: 'Conocé beneficios y comenzá tu alta hoy.',
      ctaHref: 'productores.html#form-pas'
    },
    'nosotros.html': {
      unidad: 'Institucional',
      email: 'info@gestionseguros.com.ar',
      whatsappText: 'Hola! Quiero conocer más sobre Gestión Seguros',
      ctaTitle: '¿Querés hablar con nuestro equipo?',
      ctaText: 'Estamos para ayudarte en lo que necesites.',
      ctaHref: 'contacto.html'
    },
    'formularios.html': {
      unidad: 'Gestión y Formularios',
      email: 'info@gestionseguros.com.ar',
      whatsappText: 'Hola! Necesito ayuda con formularios',
      ctaTitle: '¿No encontrás el formulario correcto?',
      ctaText: 'Te orientamos para completar la gestión.',
      ctaHref: 'contacto.html'
    },
    'contacto.html': {
      unidad: 'Contacto',
      email: 'info@gestionseguros.com.ar',
      whatsappText: 'Hola! Quiero hacer una consulta',
      ctaTitle: '¿Preferís hablar por WhatsApp?',
      ctaText: 'Estamos disponibles para responderte rápido.',
      ctaHref: 'https://wa.me/5491152544009?text=Hola!%20Quiero%20hacer%20una%20consulta'
    },
    'cotizador.html': {
      unidad: 'Cotizador',
      email: 'info@gestionseguros.com.ar',
      whatsappText: 'Hola! Quiero que me ayuden a cotizar',
      ctaTitle: '¿Necesitás ayuda para cotizar?',
      ctaText: 'Un asesor te acompaña paso a paso.',
      ctaHref: 'contacto.html'
    },
    'mediosdepago.html': {
      unidad: 'Medios de pago',
      email: 'info@gestionseguros.com.ar',
      whatsappText: 'Hola! Necesito información sobre medios de pago',
      ctaTitle: '¿Querés confirmar un medio de pago?',
      ctaText: 'Te asistimos para gestionar pagos e imputaciones.',
      ctaHref: 'contacto.html'
    },
    '404.html': {
      unidad: 'Gestión Seguros',
      email: 'info@gestionseguros.com.ar',
      whatsappText: 'Hola! Necesito ayuda para encontrar una sección',
      ctaTitle: '¿No encontraste lo que buscabas?',
      ctaText: 'Te ayudamos a llegar rápido a la sección correcta.',
      ctaHref: 'contacto.html'
    }
  };
  const cfg = pageCfg[path];
  if (!isHome && !document.querySelector('.gs-brand-strip')) {
    const stripAnchor = document.querySelector('.page-hero') || document.querySelector('.nav');
    if (stripAnchor) {
      const strip = document.createElement('section');
      strip.className = 'gs-brand-strip';
      strip.innerHTML = `<div class="gs-brand-strip-inner"><b>Gestión Seguros</b><span>Respaldo institucional, respuesta ágil y atención humana en todo el país</span></div>`;
      stripAnchor.insertAdjacentElement('afterend', strip);
    }
  }

  if (!isHome && cfg) {
    const pagesWithoutBlueCta = new Set(['caucion.html', 'responsabilidad-civil.html', 'personas.html']);
    const footer = document.querySelector('footer');
    if (footer && !document.querySelector('.gs-page-cta')) {
      const cardWrap = document.createElement('section');
      cardWrap.className = 'gs-unit-card-wrap';
      cardWrap.innerHTML = `
        <div class="gs-unit-card">
          <div>
            <h4>Contacto directo · ${cfg.unidad}</h4>
            <p>Canal rápido para consultas y seguimiento de tu gestión.</p>
          </div>
          <div class="gs-unit-card-links">
            <a href="mailto:${cfg.email}"><svg class="icon" style="width:16px"><use href="#i-mail"/></svg>${cfg.email}</a>
          </div>
        </div>`;
      footer.insertAdjacentElement('beforebegin', cardWrap);

      if (!pagesWithoutBlueCta.has(path)) {
        const cta = document.createElement('section');
        cta.className = 'gs-page-cta';
        cta.innerHTML = `
          <div class="gs-page-cta-inner">
            <div class="gs-page-cta-copy">
              <b>${cfg.ctaTitle}</b>
              <span>${cfg.ctaText}</span>
            </div>
            <a class="btn btn-accent" href="${cfg.ctaHref}">Contactar ahora <svg class="icon" style="width:16px"><use href="#i-arrow"/></svg></a>
          </div>`;
        footer.insertAdjacentElement('beforebegin', cta);
      }
    }
  }

  /* ----------------------- WhatsApp flotante consistente ----------------------- */
  const waFloat = document.querySelector('.wa-float');
  if (waFloat) {
    waFloat.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.93 11.93 0 0012.05 0C5.49 0 .13 5.36.13 11.92a11.9 11.9 0 001.6 5.94L0 24l6.3-1.66a11.88 11.88 0 005.73 1.46h.01c6.56 0 11.92-5.36 11.92-11.92 0-3.18-1.24-6.18-3.44-8.4zM12.05 21.77h-.01a9.85 9.85 0 01-5.02-1.38l-.36-.21-3.74.98 1-3.64-.23-.37a9.85 9.85 0 0115.27-12.1 9.82 9.82 0 01-6.91 16.72zm5.71-7.38c-.31-.16-1.85-.91-2.14-1.01-.29-.1-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.52-1.55-.93-.82-1.56-1.84-1.74-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.25-.61-.52-.53-.71-.54l-.61-.01c-.21 0-.55.08-.84.39-.29.31-1.11 1.08-1.11 2.63 0 1.55 1.14 3.05 1.3 3.26.16.21 2.24 3.42 5.43 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37z"/></svg>`;
  }

  /* ----------------------- Footer compartido (single source of truth) ----------------------- */
  const sharedFooter = document.querySelector('footer');
  if (sharedFooter) {
    sharedFooter.innerHTML = `
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="Gestión Seguros"></a>
      <p>Compañía argentina de seguros. Caución, Personas y Responsabilidad Civil.</p>
      <div class="social">
        <a href="https://ar.linkedin.com/company/gestionsegurossa" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><svg class="icon" style="width:18px" aria-hidden="true"><use href="#i-li"/></svg></a>
        <a href="https://www.instagram.com/gestionseguros.sa/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg class="icon" style="width:18px" aria-hidden="true"><use href="#i-ig"/></svg></a>
        <a href="https://www.facebook.com/gestionseguros.sa" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><svg class="icon" style="width:18px" aria-hidden="true"><use href="#i-fb"/></svg></a>
        <a href="https://www.youtube.com/channel/UCnAyg1zeqZ5_QcsXsoBoGWw" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><svg class="social-svg" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-yt"/></svg></a>
      </div>
      <div class="ssn-block"><strong>Organismo de control</strong>SSN · <a href="https://www.argentina.gob.ar/ssn" target="_blank" rel="noopener">www.argentina.gob.ar/ssn</a></div>
    </div>
    <div class="footer-col"><h5>Coberturas</h5><a href="caucion.html">Caución</a><a href="alquileres.html">Alquileres</a><a href="personas.html">Personas</a><a href="responsabilidad-civil.html">Resp. Civil</a></div>
    <div class="footer-col"><h5>Sitio</h5><a href="cotizador.html">Cotizador</a><a href="formularios.html">Formularios</a><a href="productores.html">Productores</a></div>
    <div class="footer-col"><h5>Empresa</h5><a href="nosotros.html">Nosotros</a><a href="contacto.html">Contacto</a></div>
    <div class="footer-col"><h5>Contacto</h5><a href="tel:+541152544009"><svg class="icon"><use href="#i-phone"/></svg> (+54) 5254-4009</a><a href="tel:08003451340"><svg class="icon"><use href="#i-phone"/></svg> 0800-345-1340</a><a href="mailto:info@gestionseguros.com.ar"><svg class="icon"><use href="#i-mail"/></svg> info@gestionseguros.com.ar</a></div>
  </div>
  <div class="footer-bottom">
    <div>© <span id="currentYear">2026</span> Gestión Seguros S.A.</div>
    <div><a href="#">Privacidad</a> · <a href="#">Términos</a></div>
  </div>`;
  }

  /* ----------------------- Año dinámico en footer ----------------------- */
  const yearEl = $('#currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
