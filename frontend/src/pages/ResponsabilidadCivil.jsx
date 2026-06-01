import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import ContactCard from '../components/ContactCard'
import PageCta from '../components/PageCta'
import BrandStrip from '../components/BrandStrip'
import bannerRc from '../assets/img/banners-web/responsabilidad-civil.jpg'
import '../assets/css/detail-index.css'

export default function ResponsabilidadCivil() {
  useEffect(() => { document.title = 'Seguros de Responsabilidad Civil | Gestión Seguros' }, [])
  useReveal()

  return (
    <>
      <header className="page-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(14,23,48,0.58) 0%, rgba(27,79,174,0.42) 100%), url(${bannerRc})` }}>
        <div className="page-hero-inner">
          <nav className="breadcrumb"><Link to="/">Home</Link> / <span>Responsabilidad Civil</span></nav>
          <span className="section-label dark reveal"><svg className="icon" style={{ width: '14px' }}><use href="#i-shield" /></svg>Responsabilidad Civil</span>
          <h1 className="reveal delay-1">Seguros de <em>Responsabilidad Civil</em></h1>
          <p className="lead reveal delay-2">En Gestión Seguros te ayudamos a proteger tu patrimonio frente a reclamos de terceros.<br />Son una herramienta clave para operar con tranquilidad, especialmente en contextos donde los riesgos y las exigencias legales son cada vez mayores.</p>
          <div className="hero-ctas reveal delay-3" style={{ marginTop: '30px' }}>
            <a href="mailto:rc@gestionseguros.com.ar" className="btn btn-accent btn-lg"><svg className="icon"><use href="#i-mail" /></svg> rc@gestionseguros.com.ar</a>
            <a href="#rc-indice" className="btn btn-ghost btn-lg">Ver coberturas</a>
          </div>
        </div>
      </header>

      <BrandStrip />

      <section className="section" id="productos">
        <div className="detail-grid">
          <article className="detail-main detail-main--accent-titles">

            <nav className="detail-index">
              <span className="detail-index-title">En esta página</span>
              <ul className="detail-index-list">
                <li><a href="#evento">Eventos</a></li>
                <li><a href="#rc-refacciones">Refacciones y/o Construcciones</a></li>
                <li><a href="#rc-comprensiva">Comprensiva</a></li>
                <li><a href="#rc-empresas-seguridad">Empresas de Seguridad</a></li>
                <li><a href="#educativo">Establecimientos Educativos y Clubes</a></li>
                <li><a href="#rc-calderas">Calderas</a></li>
                <li><a href="#rc-ascensores">Ascensores y/o Montacargas</a></li>
                <li><a href="#rc-colonia">Colonia de Vacaciones</a></li>
                <li><a href="#rc-alquiler-viviendas">RC Inquilinos</a></li>
                <li><a href="#turismo">Turismo Aventura</a></li>
                <li><a href="#rc-garage">Garage</a></li>
                <li><a href="#rc-carteles">Carteles, Letreros y Antenas</a></li>
              </ul>
            </nav>

            <div id="evento">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-users" /></svg>Eventos</span>
              <h2>Eventos</h2>
              <p>Protección integral para organizadores de eventos frente a daños a terceros durante la realización de espectáculos, ferias, congresos y actividades masivas. Cubre tanto daños personales como materiales derivados de la organización.</p>
            </div>

            <div id="rc-refacciones">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-home" /></svg>Refacciones y/o Construcciones</span>
              <h2>Refacciones y/o Construcciones</h2>
              <p>Cobertura diseñada para protegerte ante daños ocasionados a terceros durante el tiempo que dure la obra.</p>
            </div>

            <div id="rc-comprensiva">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-shield" /></svg>Comprensiva</span>
              <h2>Comprensiva</h2>
              <p>Brinda cobertura ante reclamos por daños a terceros derivados de la actividad comercial o industrial asegurada, incluyendo la responsabilidad de directivos y responsables de la empresa.</p>
            </div>

            <div id="rc-empresas-seguridad">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-check" /></svg>Empresas de Seguridad</span>
              <h2>Empresas de Seguridad</h2>
              <p>Cobertura diseñada para proteger a empresas de seguridad ante reclamos por daños a terceros ocasionados en el ejercicio de sus funciones, incluyendo errores, omisiones o negligencia del personal.</p>
            </div>

            <div id="educativo">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-school" /></svg>Establecimientos Educativos y Clubes</span>
              <h2>Establecimientos Educativos y Clubes</h2>
              <p>Cobertura para instituciones educativas y deportivas ante reclamos por daños a alumnos, socios o terceros, ocurridos dentro de sus instalaciones o en actividades organizadas.</p>
            </div>

            <div id="rc-calderas">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-zap" /></svg>Calderas</span>
              <h2>Calderas</h2>
              <p>Protege frente a daños a terceros causados por el uso o funcionamiento de calderas, incluyendo explosiones, fallas o desperfectos que puedan generar perjuicios materiales o personales.</p>
            </div>

            <div id="rc-ascensores">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-building" /></svg>Ascensores y/o Montacargas</span>
              <h2>Ascensores y/o Montacargas</h2>
              <p>Cubre los daños a terceros ocasionados por el uso de ascensores y montacargas dentro del establecimiento asegurado, ya sea por lesiones, fallecimiento o daños a bienes.</p>
            </div>

            <div id="rc-colonia">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-heart" /></svg>Colonia de Vacaciones</span>
              <h2>Colonia de Vacaciones</h2>
              <p>Cobertura especialmente diseñada para proteger a organizadores de colonias de vacaciones frente a reclamos por daños a los participantes o a terceros durante el desarrollo de actividades recreativas, deportivas y educativas. Brinda respaldo ante accidentes ocurridos tanto dentro de las instalaciones como en salidas programadas, ofreciendo seguridad y tranquilidad a la organización.</p>
            </div>

            <div id="rc-alquiler-viviendas">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-home" /></svg>RC Inquilinos</span>
              <h2>RC Inquilinos</h2>
              <p>Ampara al propietario frente a reclamos de terceros por daños ocasionados por el inmueble alquilado, brindando tranquilidad ante imprevistos que puedan afectar a inquilinos o vecinos.</p>
            </div>

            <div id="turismo">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-plane" /></svg>Turismo Aventura</span>
              <h2>Turismo Aventura</h2>
              <p>Pensada para prestadores de actividades recreativas y deportivas, cubre daños a terceros derivados de la práctica de turismo aventura, como excursiones, deportes extremos y actividades al aire libre.</p>
            </div>

            <div id="rc-garage">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-truck" /></svg>Garage</span>
              <h2>Garage</h2>
              <p>Protege al asegurado ante reclamos por pérdida o daños a vehículos de terceros en garajes u otras actividades similares. Cubre siniestros como incendio, explosión, robo, hurto o caída de vehículos desde plataformas o elevadores. También incluye lesiones o fallecimiento de terceros dentro del establecimiento asegurado, cuando los incidentes ocurran durante maniobras realizadas por el personal de la empresa.</p>
            </div>

            <div id="rc-carteles">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-pin" /></svg>Carteles, Letreros y Antenas</span>
              <h2>Carteles, Letreros y Antenas</h2>
              <p>Cubre los daños a terceros ocasionados por la instalación, uso, mantenimiento, reparación o desmantelamiento de carteles, letreros, antenas y objetos similares. También incluye la Responsabilidad civil por incendio o descargas eléctricas en estas instalaciones.</p>
            </div>

          </article>

          <aside className="detail-side">
            <div className="side-card">
              <h4>Cotización RC</h4>
              <p>Consultá a nuestro equipo comercial para cotizar según tu actividad.</p>
              <Link to="/contacto" className="btn btn-primary">Solicitar cotización <svg className="icon"><use href="#i-arrow" /></svg></Link>
              <a href="mailto:rc@gestionseguros.com.ar" className="btn btn-ghost">Escribir por email</a>
              <div className="side-contact">
                <b>Contacto directo</b>
                <a href="mailto:rc@gestionseguros.com.ar">rc@gestionseguros.com.ar</a>
                <a href="tel:+541152544009">(+54) 5254-4009</a>
                <a href="tel:08003451340">0800-345-1340</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ContactCard
        title="Contacto directo · Responsabilidad Civil"
        subtitle="Canal rápido para consultas y cotizaciones de RC."
        links={[{ label: 'rc@gestionseguros.com.ar', href: 'mailto:rc@gestionseguros.com.ar', icon: 'i-mail' }]}
      />
      <PageCta
        title="¿Necesitás cotizar una RC?"
        subtitle="Contanos tu actividad y te asesoramos en la cobertura ideal."
        btnText="Solicitar cotización"
      />
    </>
  )
}

