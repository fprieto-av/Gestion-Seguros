import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import ContactCard from '../components/ContactCard'
import PageCta from '../components/PageCta'
import BrandStrip from '../components/BrandStrip'
import '../assets/css/formularios.css'
import formulariosBg from '../assets/img/formularios.png'
import formulariosHero from '../assets/img/formularios-hero.png'

export default function Formularios() {
  useEffect(() => { document.title = 'Formularios | Gestión Seguros' }, [])
  useReveal()

  return (
    <>
      <header className="page-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(14,23,48,0.88) 0%, rgba(27,79,174,0.7) 100%), url(${formulariosBg})`, backgroundSize: 'cover', backgroundPosition: 'center 100%' }}>
        <div className="page-hero-inner">
          <nav className="breadcrumb"><Link to="/">Home</Link> / <span>Formularios</span></nav>
          <span className="section-label dark reveal"><svg className="icon" style={{ width: '14px' }}><use href="#i-award" /></svg>Formularios</span>
          <h1 className="reveal delay-1">Nuestros <em>Formularios</em></h1>
          <p className="lead reveal delay-2">Desde esta sección podrás acceder a formularios operativos de Caución, Personas y documentación general.<br />Descargá solicitudes, declaraciones y documentación de respaldo para iniciar gestiones, actualizar datos y presentar información requerida según el tipo de cobertura.</p>
        </div>
      </header>

      <BrandStrip />

      <section className="section">
        <div className="section-head reveal">
          <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-award" /></svg>Formularios</span>
        </div>
        <div className="forms-hero">
          <img src={formulariosHero} alt="Gestión Seguros formularios" />
          <div>
            <h2>Seleccioná el formulario que necesitás</h2>
            <h3>Descargá y completá para iniciar la gestión</h3>
          </div>
        </div>

        <div className="forms-tabs">
          <h4>Acceso rápido</h4>
          <div className="forms-links-row">
            <a href="/formularios/Caucion%20-%20Solicitud%20Convenio.pdf" target="_blank" rel="noopener">Solicitud convenio (Caución)</a>
            <a href="/formularios/Caucion%20-%20Manifestacion%20de%20Bienes.pdf" target="_blank" rel="noopener">Manifestación de bienes</a>
            <a href="/formularios/Caucion%20-%20Aval.pdf" target="_blank" rel="noopener">Aval</a>
            <a href="/formularios/Caucion%20-%20Aval%20Ingles%20.pdf" target="_blank" rel="noopener">Aval inglés</a>
            <a href="/formularios/RC%20-%20Formulario%20Denuncia%20de%20Siniestros.pdf" target="_blank" rel="noopener">Denuncia de siniestros RC</a>
            <a href="/formularios/RC%20-%20Formulario%20Turismo%20Aventura.pdf" target="_blank" rel="noopener">Turismo aventura</a>
          </div>
        </div>

        <div className="forms-sections">
          <article className="forms-col">
            <h5>Formularios de Caución</h5>
            <div className="forms-links-grid">
              <a href="/formularios/Caucion%20-%20Solicitud%20Convenio.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Alta</span>Solicitud convenio
              </a>
              <a href="/formularios/Caucion%20-%20Manifestacion%20de%20Bienes.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Patrimonial</span>Manifestación de bienes
              </a>
              <a href="/formularios/Caucion%20-%20Aval.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Garantía</span>Aval
              </a>
              <a href="/formularios/Caucion%20-%20Aval%20Ingles%20.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Garantía</span>Aval inglés
              </a>
              <a href="/formularios/DOCUMENTACI%C3%93N%20PARA%20DAR%20DE%20BAJA%20UNA%20POLIZA%20DE%20CAUC%C3%93N.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Baja</span>Baja de póliza
              </a>
            </div>
          </article>

          <article className="forms-col">
            <h5>Formularios de Responsabilidad Civil</h5>
            <div className="forms-links-grid">
              <a href="/formularios/RC%20-%20Formulario%20Contratistas%20Establecimientos%20Educativos.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Contratistas</span>Contratistas establecimientos educativos
              </a>
              <a href="/formularios/RC%20-%20Formulario%20Contratistas%20.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Contratistas</span>Contratistas
              </a>
              <a href="/formularios/RC%20-%20Formulario%20Empresas%20de%20Turismo.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Turismo</span>Empresas de turismo
              </a>
              <a href="/formularios/RC%20-%20Formulario%20Denuncia%20de%20Siniestros.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Siniestros</span>Denuncia de siniestros
              </a>
              <a href="/formularios/RC%20-%20Formulario%20Carteles.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Publicidad</span>Carteles
              </a>
              <a href="/formularios/RC%20-%20Formulario%20Carteles(1).pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Publicidad</span>Carteles (versión 2)
              </a>
              <a href="/formularios/RC%20-%20Formulario%20Empresas%20de%20Seguridad.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Seguridad</span>Empresas de seguridad
              </a>
              <a href="/formularios/RC%20-%20Formulario%20Turismo%20Aventura.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Turismo</span>Turismo aventura
              </a>
              <a href="/formularios/RC%20-%20Formulario%20Restaurants.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Gastronomía</span>Restaurants
              </a>
              <a href="/formularios/RC%20-%20Formulario%20Obras%20Viales%2C%20Hidraulicas.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Obras</span>Obras viales e hidráulicas
              </a>
              <a href="/formularios/RC-%20Formulario%20Comprensivas.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">General</span>Comprensivas
              </a>
              <a href="/formularios/RC-%20Formulario%20Estadios%20Cerrados.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Eventos</span>Estadios cerrados
              </a>
              <a href="/formularios/RC-%20Formulario%20Exposiciones.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Eventos</span>Exposiciones
              </a>
              <a href="/formularios/RC-%20Formulario%20Obras.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Obras</span>Obras
              </a>
              <a href="/formularios/RC-%20Formulario%20Productos.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Productos</span>Productos
              </a>
              <a href="/formularios/RC-%20Formulario%20Profesional%20Individual.pdf" target="_blank" rel="noopener">
                <span className="forms-link-meta">Profesional</span>Profesional individual
              </a>
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
        title="¿Necesitás ayuda con algún formulario?"
        subtitle="Nuestro equipo te asesora en la documentación requerida."
      />
    </>
  )
}
