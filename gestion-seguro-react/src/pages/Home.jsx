import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import introVideo from '../assets/video/intro.mp4'
import partnersLoopVideo from '../assets/video/Para Web Actualizado.mp4'
import bannerHome from '../assets/img/banner-home.jpg'

function Counter({ target, suffix = '', prefix = '' }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      obs.unobserve(el)
      const duration = 1400
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration)
        const ease = 1 - Math.pow(1 - p, 3)
        setValue(Math.round(target * ease))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref}>{prefix}{value.toLocaleString('es-AR')}{suffix}</span>
}


function ProductTabs() {
  const [filter, setFilter] = useState('caucion')

  // Cuando cambia el tab, las nuevas cards tienen clase 'reveal' pero el observer
  // global ya corrió. Las marcamos visibles en el siguiente frame de render.
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'))
    })
    return () => cancelAnimationFrame(id)
  }, [filter])

  const cards = [
    { cat: 'caucion', icon: 'i-doc', title: 'Garantías Contractuales', desc: 'Son las más utilizadas en el mercado y acompañan a las empresas en todo el proceso de contratación, tanto en el ámbito público como privado.', tags: ['Licitaciones', 'B2B'], href: '/caucion#contractuales' },
    { cat: 'caucion', icon: 'i-truck', title: 'Garantías Aduaneras', desc: 'Pensadas para que puedas operar con agilidad, liberar mercadería sin demoras y optimizar tu flujo de fondos.', tags: ['Comex', 'Aduana'], href: '/caucion#aduaneras' },
    { cat: 'caucion', icon: 'i-gavel', title: 'Garantías Judiciales', desc: 'Para sustituir o constituir medidas cautelares, cumpliendo exigencias del proceso sin inmovilizar fondos.', tags: ['Contracautela', 'Judicial'], href: '/caucion#judiciales' },
    { cat: 'caucion', icon: 'i-home', title: 'Garantía de Alquiler', desc: 'Alternativa digital y segura que reemplaza la garantía propietaria tradicional.', tags: ['Vivienda', 'Digital'], href: '/alquileres' },
    { cat: 'personas', icon: 'i-activity', title: 'Accidentes Personales', desc: 'Coberturas pensadas para brindar protección económica inmediata frente a imprevistos, en el ámbito laboral y en la vida cotidiana.', tags: ['Personas', 'AP'], href: '/personas#accidentes', mod: 'succ' },
    { cat: 'personas', icon: 'i-heart', title: 'Seguro de Vida', desc: 'Respaldo económico y tranquilidad, a nivel individual y para empresas.', tags: ['Individual', 'Colectivo'], href: '/personas#vida', mod: 'succ' },
    { cat: 'personas', icon: 'i-coffin', title: 'Sepelio', desc: 'Respaldo y gestión ante el fallecimiento del asegurado, dentro o fuera del país.', tags: ['Familiar', 'Integral'], href: '/personas#sepelio', mod: 'succ' },
    { cat: 'rc', icon: 'i-plane', title: 'RC Turismo Aventura', desc: 'Para prestadores de actividades recreativas y deportivas: cubre daños a terceros.', tags: ['Turismo', 'Agencias'], href: '/responsabilidad-civil#turismo', mod: 'acc' },
    { cat: 'rc', icon: 'i-users', title: 'RC Eventos', desc: 'Protección integral para organizadores frente a daños a terceros en espectáculos y actividades masivas.', tags: ['Eventos', 'Productores'], href: '/responsabilidad-civil#evento', mod: 'acc' },
    { cat: 'rc', icon: 'i-school', title: 'RC Establecimientos Educativos y Clubes', desc: 'Para instituciones educativas y deportivas ante reclamos por daños a alumnos, socios o terceros.', tags: ['Educación', 'Institucional'], href: '/responsabilidad-civil#educativo', mod: 'acc' },
  ]

  const visible = cards.filter(c => c.cat === filter)

  return (
    <section className="section products" id="productos">
      <div className="section-head reveal">
        <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-shield" /></svg>Nuestras Coberturas</span>
        <h2>Todas tus coberturas, <span className="gradient-text">en un solo lugar</span></h2>
        <p>Tres líneas de negocio: Caución, Personas y Responsabilidad Civil.</p>
      </div>
      <div className="prod-tabs reveal">
        {[['caucion', 'Caución'], ['personas', 'Personas'], ['rc', 'Responsabilidad Civil']].map(([key, label]) => (
          <button key={key} type="button" className={`prod-tab${filter === key ? ' active' : ''}`} onClick={() => setFilter(key)}>{label}</button>
        ))}
      </div>
      <div className={`prod-grid${filter !== 'caucion' ? ' prod-grid--count-3' : ''}`}>
        {visible.map((c, i) => (
          <article key={c.title} className={`prod-card reveal${i > 0 ? ` delay-${i}` : ''}`}>
            <div className={`prod-banner${c.mod ? ' ' + c.mod : ''}`}></div>
            <div className="prod-body">
              <div className={`prod-icon${c.mod ? ' ' + c.mod : ''}`}><svg className="icon"><use href={`#${c.icon}`} /></svg></div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="prod-tags">
                {c.tags.map(t => <span key={t} className={`prod-tag${c.mod ? ' ' + c.mod : ''}`}>{t}</span>)}
              </div>
              <Link to={c.href} className="btn-link">Ver detalle</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Simulator() {
  const FACTORES = {
    'alquiler-vivienda': 0.038,
    'alquiler-comercial': 0.046,
    'accidentes-personales': 0.012,
    'vida-colectivo': 0.008,
  }
  const [tipo, setTipo] = useState('alquiler-vivienda')
  const [duracion, setDuracion] = useState(24)
  const [valorRaw, setValorRaw] = useState(650000)
  const [valorDisplay, setValorDisplay] = useState('$ 650.000')

  const fmt = n => '$ ' + Math.round(n).toLocaleString('es-AR')

  const calcular = () => {
    const f = FACTORES[tipo] || 0.03
    let prima = valorRaw * f
    if (duracion === 12) prima *= 1.05
    if (duracion === 36) prima *= 0.96
    if (duracion === 48) prima *= 0.92
    return fmt(prima)
  }

  const handleValor = (e) => {
    const raw = Number(e.target.value.replace(/[^0-9]/g, '')) || 0
    setValorRaw(raw)
    setValorDisplay(raw ? fmt(raw) : '')
  }

  return (
    <section className="section simulator" id="simulador">
      <div className="sim-grid">
        <div className="sim-left reveal">
          <span className="section-label dark"><svg className="icon" style={{ width: '14px' }}><use href="#i-dollar" /></svg>Nuestro Simulador</span>
          <h2>Cotizá tu seguro<br /><em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>en segundos</em></h2>
          <p>Elegí el producto, ingresá algunos datos y obtené una cotización orientativa. Sin compromiso.</p>
          <div className="sim-perks">
            <div className="sim-perk"><div className="ic"><svg className="icon" style={{ width: '18px' }}><use href="#i-zap" /></svg></div> Cálculo orientativo, sin registrarte</div>
            <div className="sim-perk"><div className="ic"><svg className="icon" style={{ width: '18px' }}><use href="#i-shield" /></svg></div> Datos protegidos y confidenciales</div>
            <div className="sim-perk"><div className="ic"><svg className="icon" style={{ width: '18px' }}><use href="#i-headphones" /></svg></div> Asesor asignado post-cotización</div>
          </div>
        </div>
        <div className="sim-card reveal delay-1">
          <h3><span className="dot"></span>Simulador de cobertura</h3>
          <div className="sim-field">
            <label>Tipo de seguro</label>
            <div className="sim-options">
              {[['alquiler-vivienda', 'Alquiler vivienda'], ['alquiler-comercial', 'Alquiler comercial'], ['accidentes-personales', 'Accidentes personales'], ['vida-colectivo', 'Vida colectivo']].map(([val, label]) => (
                <button key={val} type="button" className={`sim-option${tipo === val ? ' active' : ''}`} onClick={() => setTipo(val)}>{label}</button>
              ))}
            </div>
          </div>
          <div className="sim-field">
            <label>Valor del contrato / suma asegurada (mensual)</label>
            <input type="text" className="sim-input" value={valorDisplay} inputMode="numeric" onChange={handleValor} />
          </div>
          <div className="sim-field">
            <label>Duración</label>
            <div className="sim-options cols-4">
              {[12, 24, 36, 48].map(m => (
                <button key={m} type="button" className={`sim-option${duracion === m ? ' active' : ''}`} onClick={() => setDuracion(m)}>{m} meses</button>
              ))}
            </div>
          </div>
          <div className="sim-result">
            <div><small>Prima mensual estimada</small><b>{calcular()}</b></div>
            <svg className="icon" style={{ width: '40px', height: '40px', opacity: 0.5 }}><use href="#i-shield" /></svg>
          </div>
          <Link to="/contacto" className="btn btn-primary sim-submit">Emitir mi póliza ahora <svg className="icon"><use href="#i-arrow" /></svg></Link>
          <p className="sim-disclaimer">* Valor estimado no vinculante. La prima final se determina según evaluación de riesgo y documentación.</p>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  const items = [
    {
      q: '¿Qué documentación necesito para emitir una garantía de alquiler?',
      a: 'Según la información de productos: no tener antecedentes financieros negativos; ingresos demostrables (últimos 3 recibos de sueldo, monotributo o declaración de ganancias); que el alquiler más expensas no supere el 50% de los ingresos.'
    },
    {
      q: '¿Cuánto demora la emisión de la póliza?',
      a: 'Los plazos dependen del producto y documentación. En garantía de alquiler, la emisión puede darse en menos de 24hs cuando corresponda. Para otros ramos, consultá con tu asesor.'
    },
    {
      q: '¿Cómo cotizo un seguro de caución para licitaciones?',
      a: <>Enviá el <b>pliego de la licitación</b> junto con la <b>documentación societaria</b> a <a href="mailto:caucion@gestionseguros.com.ar" style={{ color: 'var(--primary)', fontWeight: 700 }}>caucion@gestionseguros.com.ar</a>. Nuestro equipo evalúa la capacidad del proponente y te responde por ese medio.</>
    },
    {
      q: '¿El seguro de accidentes personales cubre fuera del horario laboral?',
      a: 'Las coberturas dependen del producto contratado (escolar, deportivo, colonia, eventos, etc.). Consultá el detalle en la sección Personas · Accidentes Personales y en las condiciones particulares de tu póliza.'
    },
    {
      q: '¿Cómo denuncio un siniestro?',
      a: <>Tenés tres canales:<br />• <b>Portal online</b>: ingresá a tu panel y cargá la denuncia.<br />• <b>Email</b>: <a href="mailto:comercial@gestionseguros.com.ar" style={{ color: 'var(--primary)', fontWeight: 700 }}>comercial@gestionseguros.com.ar</a>.<br />• <b>Teléfono</b>: 0800-345-1340, lunes a viernes de 9 a 18hs.</>
    },
    {
      q: 'Soy Productor Asesor, ¿cómo me asocio a Gestión Seguros?',
      a: <>Ingresá a la sección <Link to="/productores" style={{ color: 'var(--primary)', fontWeight: 700 }}>Productores</Link> y completá el formulario. Necesitás tu <b>matrícula habilitante de la SSN</b> vigente.</>
    },
  ]

  return (
    <section className="section faq" id="faq">
      <div className="section-head">
        <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-plus" /></svg>Preguntas frecuentes</span>
        <h2>Respondemos tus <span className="gradient-text">dudas</span></h2>
        <p>Las consultas más comunes de nuestros clientes y productores asesores.</p>
      </div>
      <div className="faq-list">
        {items.map((item, idx) => (
          <div key={idx} className={`faq-item${openIdx === idx ? ' open' : ''}`}>
            <button className="faq-q" onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}>
              {item.q}
              <span className="faq-plus"><svg className="icon" style={{ width: '16px' }}><use href="#i-plus" /></svg></span>
            </button>
            <div className="faq-a">{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  useReveal()

  return (
    <>
      {/* HERO */}
      <header className="hero">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={bannerHome} aria-hidden="true">
          <source src={introVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge reveal"><span className="dot"></span>Compañía argentina · Autorizada por la SSN</div>
            <h1 className="reveal delay-1">Estamos <span className="highlight">cuando más</span><br />nos necesitás</h1>
            <p className="lead reveal delay-2">
              Somos una compañía argentina de seguros que cree en el beneficio mutuo.<br />
              Evaluamos cada situación, te escuchamos y ofrecemos la cobertura ideal: Caución, Personas y Responsabilidad Civil.
            </p>
            <div className="hero-ctas reveal delay-2">
              <a href="#simulador" className="btn btn-accent btn-lg">Cotizar mi seguro <svg className="icon"><use href="#i-arrow" /></svg></a>
              <a href="#productos" className="btn btn-ghost btn-lg">Ver coberturas</a>
            </div>
            <div className="hero-badges reveal delay-3">
              <div className="hero-badge-item"><span className="check"><svg className="icon"><use href="#i-check" /></svg></span> Trámites y consultas online</div>
              <div className="hero-badge-item"><span className="check"><svg className="icon"><use href="#i-check" /></svg></span> Atención humana</div>
              <div className="hero-badge-item"><span className="check"><svg className="icon"><use href="#i-check" /></svg></span> Respaldo institucional</div>
            </div>
          </div>
        </div>
      </header>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-label">Respaldado por</div>
        <div className="trust-logos">
          <span className="trust-logo">SSN · Autorizada</span>
          <span className="trust-logo">AACS</span>
          <span className="trust-logo">AAPAS</span>
          <span className="trust-logo">SCVS</span>
          <span className="trust-logo">Cámara Seguros</span>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-row">
        <div className="stat-item reveal">
          <div className="stat-num"><Counter target={15} suffix="+" /></div>
          <div className="stat-label">Años de trayectoria</div>
        </div>
        <div className="stat-item reveal delay-1">
          <div className="stat-num"><Counter target={50} suffix="k+" /></div>
          <div className="stat-label">Pólizas emitidas</div>
        </div>
        <div className="stat-item reveal delay-2">
          <div className="stat-num"><Counter target={800} suffix="+" /></div>
          <div className="stat-label">Productores asociados</div>
        </div>
        <div className="stat-item reveal delay-3">
          <div className="stat-num"><Counter target={98} suffix="%" /></div>
          <div className="stat-label">Clientes satisfechos</div>
        </div>
      </div>

      <ProductTabs />

      {/* POR QUÉ */}
      <section className="section why" id="nosotros">
        <div className="section-head reveal">
          <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-award" /></svg>Por qué elegirnos</span>
        </div>
        <div className="why-grid">
          <div className="why-visual reveal">
            <div className="why-hero-card">
              <div style={{ fontSize: '11px', color: 'var(--secondary)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Sobre nosotros</div>
              <h3>Una compañía argentina que sabe escucharte</h3>
              <p>Estamos siempre atentos a tus necesidades. Evaluamos todos los riesgos posibles y ofrecemos la cobertura ideal para tu situación particular.</p>
              <ul>
                <li><svg className="icon"><use href="#i-check" /></svg> Autorizada por la Superintendencia de Seguros</li>
                <li><svg className="icon"><use href="#i-check" /></svg> Soporte técnico y humano permanente</li>
                <li><svg className="icon"><use href="#i-check" /></svg> Creemos en el beneficio mutuo</li>
                <li><svg className="icon"><use href="#i-check" /></svg> Plataforma GestionAr para productores</li>
              </ul>
            </div>
            <div className="why-rating">
              <div className="big">4.9/5</div>
              <div className="stars">★★★★★</div>
              <div className="txt">Clientes nos recomiendan</div>
            </div>
          </div>
          <div className="reveal delay-1">
            <h2 style={{ margin: '0 0 24px' }}>Seguros con respaldo,<br /><span className="gradient-text">atención humana</span> y gestión digital</h2>
            <div className="why-list">
              <div className="why-item"><div className="why-item-icon"><svg className="icon"><use href="#i-headphones" /></svg></div><div><h4>Escuchamos tu caso</h4><p>Cada póliza se evalúa con foco en tu situación particular. No vendemos productos enlatados.</p></div></div>
              <div className="why-item"><div className="why-item-icon"><svg className="icon"><use href="#i-zap" /></svg></div><div><h4>Emisión digital rápida</h4><p>Cotizá y emití tu póliza 100% online. Plataforma GestionAr para productores y clientes.</p></div></div>
              <div className="why-item"><div className="why-item-icon"><svg className="icon"><use href="#i-shield" /></svg></div><div><h4>Respaldo institucional</h4><p>Compañía autorizada por la SSN, con todas las garantías legales que exige la normativa argentina.</p></div></div>
              <div className="why-item"><div className="why-item-icon"><svg className="icon"><use href="#i-heart" /></svg></div><div><h4>Beneficio mutuo</h4><p>Soporte técnico y humano a colaboradores y clientes en pólizas y ante siniestros. Crecemos juntos.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section partners" id="reaseguradores">
        <div className="partners-inner">
          <div className="section-head reveal partners-head">
            <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-globe" /></svg>Partners</span>
          </div>
          <div className="partners-shell reveal delay-1">
            <video className="partners-video" autoPlay muted loop playsInline preload="auto" poster={bannerHome}>
              <source src={partnersLoopVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <Simulator />

      {/* PROCESO */}
      <section className="section proceso">
        <div className="section-head reveal">
          <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-zap" /></svg>Cómo funciona</span>
          <h2>Tu póliza lista en <span className="gradient-text">4 pasos</span></h2>
          <p>Proceso 100% digital, pensado para que no pierdas tiempo ni tengas que moverte de tu casa o tu oficina.</p>
        </div>
        <div className="proc-grid">
          <div className="proc-item reveal"><div className="proc-num">1</div><h4>Elegí el producto</h4><p>Navegá nuestras coberturas y elegí la que se adapta a tu necesidad: Caución, Personas o RC.</p></div>
          <div className="proc-item reveal delay-1"><div className="proc-num">2</div><h4>Cotizá online</h4><p>Ingresá los datos básicos y recibí una cotización orientativa, clara y sin compromiso.</p></div>
          <div className="proc-item reveal delay-2"><div className="proc-num">3</div><h4>Subí documentación</h4><p>Cargá los documentos requeridos desde el celular o computadora. Validamos según el producto.</p></div>
          <div className="proc-item reveal delay-3"><div className="proc-num">4</div><h4>Recibí tu póliza</h4><p>Una vez aprobada la solicitud, recibís la póliza por email y podés gestionarla desde tu panel online.</p></div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section testimonials">
        <div className="section-head reveal">
          <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-star" /></svg>Testimonios</span>
          <h2>Lo que dicen de <span className="gradient-text">Gestión Seguros</span></h2>
          <p>Clientes y productores asesores que confían en nosotros para proteger lo que más les importa.</p>
        </div>
        <div className="test-grid">
          <div className="test-card reveal">
            <div className="test-stars">★★★★★</div>
            <p className="test-quote">"Cotizamos una garantía de alquiler y el trámite fue claro y rápido. Atención impecable y precios muy competitivos."</p>
            <div className="test-author"><div className="test-avatar">MR</div><div><b>María R.</b><small>Inquilina · CABA</small></div></div>
          </div>
          <div className="test-card reveal delay-1">
            <div className="test-stars">★★★★★</div>
            <p className="test-quote">"Como PAS valoro muchísimo la plataforma GestionAr. El soporte técnico responde rápido y el equipo de suscripción es muy ágil con las cauciones."</p>
            <div className="test-author"><div className="test-avatar" style={{ background: 'linear-gradient(135deg,var(--accent),#FFB85C)' }}>JP</div><div><b>Juan P.</b><small>Productor Asesor · Córdoba</small></div></div>
          </div>
          <div className="test-card reveal delay-2">
            <div className="test-stars">★★★★★</div>
            <p className="test-quote">"Necesitábamos RC para un evento corporativo. En Gestión nos resolvieron con cobertura a medida."</p>
            <div className="test-author"><div className="test-avatar" style={{ background: 'linear-gradient(135deg,var(--success),#5AFFC7)', color: 'var(--dark)' }}>LF</div><div><b>Laura F.</b><small>Productora de eventos · Rosario</small></div></div>
          </div>
        </div>
      </section>

      {/* PAS TEASER */}
      <section className="section home-pas-teaser">
        <div className="home-pas-teaser-inner reveal">
          <div className="home-pas-teaser-copy">
            <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-users" /></svg>Canal productores</span>
            <h2>¿Trabajás como <span className="gradient-text">PAS</span>?</h2>
            <p>Beneficios, plataforma GestionAr, requisitos y alta: todo está reunido en la sección <b>Productores</b>.</p>
          </div>
          <div className="home-pas-teaser-cta">
            <Link to="/productores" className="btn btn-primary btn-lg">Ir al programa PAS <svg className="icon"><use href="#i-arrow" /></svg></Link>
            <Link to="/productores#beneficios" className="btn btn-ghost">Ver beneficios</Link>
          </div>
        </div>
      </section>

      <FAQ />


      {/* CTA GRANDE */}
      <section className="cta-big">
        <div className="cta-big-inner">
          <h2>Tu seguro, <span style={{ color: 'var(--accent)' }}>a un click</span></h2>
          <p>Cotizá ahora o contactá a un asesor para la cobertura que necesites.</p>
          <div className="btn-stack">
            <a href="#simulador" className="btn btn-primary btn-lg">Cotizar mi seguro <svg className="icon"><use href="#i-arrow" /></svg></a>
            <Link to="/contacto" className="btn btn-ghost btn-lg">Hablar con un asesor</Link>
          </div>
        </div>
      </section>
    </>
  )
}
