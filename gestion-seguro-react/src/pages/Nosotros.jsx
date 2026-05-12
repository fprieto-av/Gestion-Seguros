import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import BrandStrip from '../components/BrandStrip'
import ContactCard from '../components/ContactCard'
import PageCta from '../components/PageCta'
import '../assets/css/nosotros.css'
import nosotrosImg from '../assets/img/nosotros.png'
import linkedinImg from '../assets/img/linkedin-perfil-gestion.png'

export default function Nosotros() {
  useEffect(() => {
    document.title = 'Nosotros · Compañía argentina de seguros | Gestión Seguros'
  }, [])
  useReveal()

  return (
    <>
      {/* HERO */}
      <header className="page-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(14,23,48,0.88) 0%, rgba(27,79,174,0.7) 100%), url(${nosotrosImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
              <li><b>AACS</b> — Asociación Argentina de Compañías de Seguros.</li>
              <li><b>AAPAS</b> — Asociación Argentina de Productores Asesores de Seguros.</li>
              <li><b>SCVS</b> — Sector de Compañías de Vida y Seguros.</li>
              <li><b>Cámara de Seguros</b>.</li>
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

      {/* REDES + MAPA */}
      <section className="section nosotros-band">
        <div className="section-head reveal">
          <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-heart" /></svg>Comunidad</span>
          <h2>Seguinos y valoranos</h2>
          <p>Mirá novedades de Gestión Seguros en LinkedIn y dejá tu reseña en Google Maps.</p>
        </div>
        <div className="social-proof-grid">
          <article className="social-card reveal">
            <div className="social-card-head">
              <h3>LinkedIn · Novedades y publicaciones</h3>
              <p>Imagen de referencia del perfil; abrí LinkedIn para ver el contenido actualizado.</p>
            </div>
            <div className="social-card-media social-card-media--linkedin">
              <a href="https://www.linkedin.com/company/gestionsegurossa/" className="social-linkedin-preview-link" target="_blank" rel="noopener noreferrer" aria-label="Abrir perfil en LinkedIn">
                <img src={linkedinImg} alt="Perfil de Gestión Seguros en LinkedIn" loading="lazy" />
              </a>
            </div>
            <div className="social-card-actions">
              <a href="https://www.linkedin.com/company/gestionsegurossa/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Ver en LinkedIn <svg className="icon"><use href="#i-arrow" /></svg></a>
            </div>
          </article>

          <article className="social-card reveal delay-1">
            <div className="social-card-head">
              <h3>Google Maps · Ubicación y reseñas</h3>
              <p>Conocé cómo llegar y ayudanos con tu calificación y comentario.</p>
            </div>
            <div className="social-card-media">
              <iframe
                className="social-embed"
                src="https://www.google.com/maps?q=Bartolom%C3%A9+Mitre+480%2C+Piso+11%2C+Comuna+3%2C+C1036+CABA%2C+Argentina&output=embed"
                title="Google Maps — Bartolomé Mitre 480, Gestión Seguros"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="social-card-actions">
              <a href="https://www.google.com/maps/search/?api=1&query=Bartolom%C3%A9+Mitre+480%2C+Piso+11%2C+C1036+CABA" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Ver en Maps <svg className="icon"><use href="#i-arrow" /></svg></a>
              <a href="https://www.google.com/maps/search/?api=1&query=Bartolom%C3%A9+Mitre+480%2C+Piso+11%2C+C1036+CABA" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">Dejar valoración</a>
            </div>
          </article>
        </div>
      </section>

      <ContactCard
        title="Contacto directo · Institucional"
        subtitle="Canal rápido para consultas y seguimiento de tu gestión."
        links={[{ label: 'info@gestionseguros.com.ar', href: 'mailto:info@gestionseguros.com.ar', icon: 'i-mail' }]}
      />
      <PageCta
        title="¿Querés hablar con nuestro equipo?"
        subtitle="Estamos para ayudarte en lo que necesites."
      />
    </>
  )
}
