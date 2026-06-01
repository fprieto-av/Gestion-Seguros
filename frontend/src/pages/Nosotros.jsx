import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import BrandStrip from '../components/BrandStrip'
import ContactCard from '../components/ContactCard'
import PageCta from '../components/PageCta'
import '../assets/css/nosotros.css'
import nosotrosHero from '../assets/img/banners-web/nosotros.jpg'
import institucionalVideo from '../assets/video/Institucional - GS.mp4'
import linkedinImg from '../assets/img/linkedin-perfil-gestion.png'
import equipoImg from '../assets/img/equipocomercial.webp'
function EquipoPhoto({ src, alt, priority = false, className = '' }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`equipo-img-wrap${loaded ? '' : ' equipo-img-wrap--loading'}${className ? ` ${className}` : ''}`}>
      <img
        src={src}
        alt={alt}
        className={`equipo-img${loaded ? ' equipo-img--loaded' : ''}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        ref={(el) => { if (el?.complete) setLoaded(true) }}
      />
    </div>
  )
}

function EquipoSection({ equipoImg }) {
  return (
    <section className="section nosotros-band">
      <div className="section-head reveal">
        <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-users" /></svg>Equipo</span>
        <h2>Nuestro <span className="gradient-text">equipo</span></h2>
        <p>Las personas detrás de cada póliza.</p>
      </div>
      <div className="equipo-grid equipo-grid--single">
        <div>
          <div className="equipo-label-row">
            <span className="section-label" style={{ margin: 0 }}><svg className="icon" style={{ width: '13px' }}><use href="#i-users" /></svg>Equipo Comercial</span>
          </div>
          <EquipoPhoto src={equipoImg} alt="Equipo comercial de Gestión Seguros" />
        </div>
      </div>
    </section>
  )
}

export default function Nosotros() {
  useEffect(() => {
    document.title = 'Nosotros · Compañía argentina de seguros | Gestión Seguros'
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = nosotrosHero
    document.head.appendChild(link)
    return () => document.head.removeChild(link)
  }, [])
  useReveal()

  return (
    <>
      {/* HERO */}
      <header className="page-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(14,23,48,0.45) 0%, rgba(27,79,174,0.30) 100%), url(${nosotrosHero})` }}>
        <div className="page-hero-inner">
          <nav className="breadcrumb"><Link to="/">Home</Link> / <span>Nosotros</span></nav>
          <span className="section-label dark reveal"><svg className="icon" style={{ width: '14px' }}><use href="#i-award" /></svg>Quiénes somos</span>
          <h1 className="reveal delay-1">Una compañía argentina que cree en el <em>beneficio mutuo</em></h1>
          <p className="lead reveal delay-2">Tecnología con alma humana. Detrás de cada póliza hay personas escuchando, analizando y diseñando la cobertura ideal para cada situación.</p>
        </div>
      </header>

      <BrandStrip />

      {/* VALORES */}
      <section className="section proceso nosotros-band">
        <div className="section-head reveal">
          <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-heart" /></svg>Lo que nos mueve</span>
          <h2>Lo que nos hace <span className="gradient-text">diferentes</span></h2>
        </div>
        <div className="proc-grid">
          <div className="proc-item reveal"><div className="proc-num" style={{ background: 'var(--primary)' }}><svg className="icon" style={{ color: '#fff', width: '22px' }}><use href="#i-headphones" /></svg></div><h4>Escucha real</h4><p>Hablás con personas, no con bots. Cada caso se evalúa con foco en tu situación particular.</p></div>
          <div className="proc-item reveal delay-1"><div className="proc-num" style={{ background: 'var(--secondary)' }}><svg className="icon" style={{ color: '#fff', width: '22px' }}><use href="#i-zap" /></svg></div><h4>Agilidad</h4><p>Procesos digitales de punta a punta. Cotizás, emitís, gestionás — todo online.</p></div>
          <div className="proc-item reveal delay-2"><div className="proc-num" style={{ background: 'var(--accent)' }}><svg className="icon" style={{ color: '#fff', width: '22px' }}><use href="#i-shield" /></svg></div><h4>Respaldo</h4><p>Autorizados por la SSN. Reservas técnicas sólidas. Cumplimos siempre.</p></div>
          <div className="proc-item reveal delay-3"><div className="proc-num" style={{ background: 'var(--success)' }}><svg className="icon" style={{ color: 'var(--dark)', width: '22px' }}><use href="#i-heart" /></svg></div><h4>Cercanía</h4><p>Atendemos cada siniestro con humanidad. Sabemos que detrás hay una historia.</p></div>
        </div>
      </section>

      {/* VIDEO INSTITUCIONAL */}
      <section className="nosotros-video-section">
        <div className="nosotros-video-inner">
          <div className="section-head reveal" style={{ marginBottom: '32px' }}>
            <span className="section-label">
              <svg className="icon" style={{ width: '14px' }}><use href="#i-play" /></svg>
              Nuestro día a día
            </span>
            <h2>Conocé <span className="gradient-text">Gestión Seguros</span></h2>
            <p>Una compañía argentina que acompaña a sus clientes antes, durante y después de cada póliza.</p>
          </div>
          <div className="nosotros-video-wrap reveal delay-1">
            <video
              className="nosotros-video"
              src={institucionalVideo}
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </section>

      {/* HISTORIA + SIDEBAR */}
      <section className="section">
        <div className="detail-grid">
          <article className="detail-main detail-main--accent-titles">
            <h2 className="detail-h2-clean">Nuestra historia</h2>
            <p>Gestión Seguros es una compañía argentina especializada en <b>seguros de Caución, Personas y Responsabilidad Civil</b>. Nacimos con el objetivo de ser una aseguradora que no se esconda detrás de procesos burocráticos, sino que <b>acompañe</b> a sus asegurados antes, durante y después de cada póliza emitida.</p>
            <p>Con el respaldo de la <b>Superintendencia de Seguros de la Nación</b> y las principales cámaras del sector, construimos un modelo donde la tecnología y la atención humana conviven: plataforma GestionAr para productores, emisión digital ágil, y un equipo que escucha cada caso con oídos frescos.</p>

            <h2 className="detail-h2-sub">Misión</h2>
            <p>Ofrecer soluciones aseguradoras <b>claras, ágiles y empáticas</b> que permitan a nuestros clientes enfocarse en lo que realmente importa: sus proyectos, sus familias y sus negocios.</p>

            <h2 className="detail-h2-sub">Visión</h2>
            <p>Ser la compañía argentina de referencia en Caución, Personas y Responsabilidad Civil, reconocida por la <b>calidad humana</b> del servicio y la <b>agilidad digital</b> de los procesos.</p>

            <h2 className="detail-h2-sub">Valores</h2>
            <ul>
              <li><b>Escucha activa</b>: cada caso es único y merece atención personalizada.</li>
              <li><b>Beneficio mutuo</b>: crecemos cuando crecen nuestros clientes y productores.</li>
              <li><b>Transparencia</b>: sin letra chica, sin promesas vacías.</li>
              <li><b>Innovación con propósito</b>: tecnología al servicio de la experiencia.</li>
              <li><b>Solidez institucional</b>: cumplimos y excedemos los requerimientos regulatorios.</li>
            </ul>

            <h2 className="detail-h2-sub">Respaldo institucional</h2>
            <p>Somos una compañía <b>autorizada por la Superintendencia de Seguros de la Nación (SSN)</b>. Adicionalmente, somos miembros activos de:</p>
            <ul>
              <li><b>AACS</b> — <a href="https://www.aacs.org.ar" target="_blank" rel="noopener">Asociación Argentina de Compañías de Seguros <svg className="icon" style={{ width: '11px' }}><use href="#i-arrow" /></svg></a></li>
              <li><b>AAPAS</b> — <a href="https://aapas.org.ar/" target="_blank" rel="noopener">Asociación Argentina de Productores Asesores de Seguros <svg className="icon" style={{ width: '11px' }}><use href="#i-arrow" /></svg></a></li>
              <li><b>APF - PASA</b> — <a href="https://www.apfpasa.ch/" target="_blank" rel="noopener">Asociación Panamericana de Fianzas / Panamerican Surety Association <svg className="icon" style={{ width: '11px' }}><use href="#i-arrow" /></svg></a></li>
            </ul>
          </article>

          <aside className="detail-side">
            <div className="side-card">
              <h4>Hablemos</h4>
              <p>¿Querés conocernos más o sumarte al equipo? Estamos disponibles.</p>
              <Link to="/contacto" className="btn btn-primary">Contactar <svg className="icon"><use href="#i-arrow" /></svg></Link>
              <Link to="/productores" className="btn btn-ghost">¿Sos PAS? Sumate</Link>
              <div className="side-contact">
                <b>Oficina central</b>
                <a href="tel:+541152544009">(+54) 5254-4009</a>
                <a href="mailto:info@gestionseguros.com.ar">info@gestionseguros.com.ar</a>
                <span style={{ color: 'var(--ink)', fontSize: '13px' }}>Buenos Aires, Argentina</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <EquipoSection equipoImg={equipoImg} />

      {/* REDES + MAPA */}
      <section className="section nosotros-band">
        <div className="section-head reveal">
          <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-heart" /></svg>Nuestras redes</span>
          <h2>Seguinos y <span className="gradient-text">valoranos</span></h2>
          <p>Seguinos en redes y conocé las opiniones de quienes ya confían en Gestión Seguros.</p>
        </div>

        <div className="social-grid">

          {/* LinkedIn */}
          <div className="social-net-card reveal">
            <div style={{ background: '#0077B5', padding: '24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <svg viewBox="0 0 24 24" style={{ width: '32px', height: '32px', fill: '#fff', flexShrink: 0 }}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div>
                <p style={{ margin: 0, fontWeight: 700, color: '#fff', fontSize: '15px' }}>LinkedIn</p>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: '13px' }}>Gestión Compañía Argentina de Seguros S.A.</p>
              </div>
            </div>
            <a href="https://www.linkedin.com/company/gestionsegurossa/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinImg} alt="Perfil LinkedIn Gestión Seguros" loading="lazy" decoding="async" style={{ width: '100%', display: 'block' }} />
            </a>
            <div style={{ padding: '20px 24px', background: '#fff', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <p style={{ margin: '0 0 16px', fontSize: '14px', color: 'var(--gray)', lineHeight: 1.6, flex: 1 }}>
                Seguinos para estar al día con novedades, productos y noticias del sector asegurador.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="https://www.linkedin.com/company/gestionsegurossa/" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ flex: 1, justifyContent: 'center' }}>
                  Ver perfil <svg className="icon"><use href="#i-arrow" /></svg>
                </a>
                <a href="https://www.linkedin.com/company/gestionsegurossa/" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                  Seguir
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="social-net-card reveal delay-1">
            <iframe
              src="https://www.google.com/maps?q=Gesti%C3%B3n+Argentina+de+Seguros+S.A%2C+Bartolom%C3%A9+Mitre+480+Piso+11%2C+CABA%2C+Argentina&output=embed"
              title="Google Maps — Bartolomé Mitre 480 Piso 11, Gestión Argentina de Seguros S.A"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: '100%', flex: 1, display: 'block', border: 'none', minHeight: '200px' }}
            />
            <div style={{ padding: '20px 24px', background: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '16px' }}>
                <svg className="icon" style={{ width: '18px', flexShrink: 0, marginTop: '2px', color: 'var(--primary)' }}><use href="#i-pin" /></svg>
                <div>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: '14px', color: 'var(--dark)' }}>Bartolomé Mitre 480, Piso 11</p>
                  <p style={{ margin: '2px 0 0', fontSize: '12px', fontWeight: 600, color: 'var(--ink)' }}>Gestión Argentina de Seguros S.A</p>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--gray)' }}>C1036 CABA · Lunes a Viernes 9–18hs</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="https://www.google.com/maps/search/?api=1&query=Gesti%C3%B3n+Argentina+de+Seguros+S.A%2C+Bartolom%C3%A9+Mitre+480+Piso+11%2C+CABA" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ flex: 1, justifyContent: 'center' }}>
                  Ver en Maps <svg className="icon"><use href="#i-arrow" /></svg>
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=Gesti%C3%B3n+Argentina+de+Seguros+S.A%2C+Bartolom%C3%A9+Mitre+480+Piso+11%2C+CABA" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                  Calificanos
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <ContactCard
        title="Contacto directo · Institucional"
        subtitle="Escribinos por consultas generales, información o asistencia sobre nuestros productos y servicios."
        links={[{ label: 'info@gestionseguros.com.ar', href: 'mailto:info@gestionseguros.com.ar', icon: 'i-mail' }]}
      />
      <PageCta
        title="¿Querés hablar con nuestro equipo?"
        subtitle="Estamos para ayudarte en lo que necesites."
      />
    </>
  )
}
