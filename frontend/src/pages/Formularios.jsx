import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import ContactCard from '../components/ContactCard'
import PageCta from '../components/PageCta'
import BrandStrip from '../components/BrandStrip'
import '../assets/css/formularios.css'
import formulariosBg from '../assets/img/formularios.png'
import formulariosHero from '../assets/img/formularios-hero.png'
import { formularios } from '../assets/formulariosUrls'

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
          <div className="forms-hero-media">
            <img src={formulariosHero} alt="Gestión Seguros formularios" />
          </div>
          <div>
            <h2>Seleccioná el formulario que necesitás</h2>
            <h3>Descargá y completá para iniciar la gestión</h3>
          </div>
        </div>

        <div className="forms-tabs">
          <h4>Acceso rápido</h4>
          <div className="forms-links-row">
            <a href={formularios.caucionSolicitudConvenio} target="_blank" rel="noopener">Solicitud convenio (Caución)</a>
            <a href={formularios.caucionManifestacionBienes} target="_blank" rel="noopener">Manifestación de bienes</a>
            <a href={formularios.caucionAval} target="_blank" rel="noopener">Aval</a>
            <a href={formularios.caucionAvalIngles} target="_blank" rel="noopener">Aval inglés</a>
            <a href={formularios.rcDenunciaSiniestros} target="_blank" rel="noopener">Denuncia de siniestros RC</a>
            <a href={formularios.rcTurismoAventura} target="_blank" rel="noopener">Turismo aventura</a>
            <a href={formularios.personasHumanasAsegurados} target="_blank" rel="noopener">Personas humanas</a>
            <a href={formularios.personasJuridicasAsegurados} target="_blank" rel="noopener">Personas jurídicas</a>
            <a href={formularios.accidentesPersonasTomador} target="_blank" rel="noopener">Accidentes personales</a>
            <a href={formularios.vidaColectivoTomador} target="_blank" rel="noopener">Vida colectivo</a>
            <a href={formularios.sepelioTomador} target="_blank" rel="noopener">Sepelio</a>
            <a href={formularios.vidaObligatorioBeneficiario} target="_blank" rel="noopener">Vida obligatorio</a>
          </div>
        </div>

        <div className="forms-sections">
          <article className="forms-col">
            <h5>Formularios de Caución</h5>
            <div className="forms-links-grid">
              <a href={formularios.caucionSolicitudConvenio} target="_blank" rel="noopener">
                <span className="forms-link-meta">Alta</span>Solicitud convenio
              </a>
              <a href={formularios.caucionManifestacionBienes} target="_blank" rel="noopener">
                <span className="forms-link-meta">Patrimonial</span>Manifestación de bienes
              </a>
              <a href={formularios.caucionAval} target="_blank" rel="noopener">
                <span className="forms-link-meta">Garantía</span>Aval
              </a>
              <a href={formularios.caucionAvalIngles} target="_blank" rel="noopener">
                <span className="forms-link-meta">Garantía</span>Aval inglés
              </a>
              <a href={formularios.documentacionBajaPolizaCaucion} target="_blank" rel="noopener">
                <span className="forms-link-meta">Baja</span>Baja de póliza
              </a>
            </div>
          </article>

          <article className="forms-col">
            <h5>Formularios de Responsabilidad Civil</h5>
            <div className="forms-links-grid">
              <a href={formularios.rcContratistasEducativos} target="_blank" rel="noopener">
                <span className="forms-link-meta">RC Establecimientos educativos</span>Contratistas establecimientos educativos
              </a>
              <a href={formularios.rcContratistas} target="_blank" rel="noopener">
                <span className="forms-link-meta">Contratistas</span>Contratistas
              </a>
              <a href={formularios.rcEmpresasTurismo} target="_blank" rel="noopener">
                <span className="forms-link-meta">Turismo</span>Empresas de turismo
              </a>
              <a href={formularios.rcDenunciaSiniestros} target="_blank" rel="noopener">
                <span className="forms-link-meta">Siniestros</span>Denuncia de siniestros
              </a>
              <a href={formularios.rcCarteles} target="_blank" rel="noopener">
                <span className="forms-link-meta">Publicidad</span>Carteles
              </a>
              <a href={formularios.rcEmpresasSeguridad} target="_blank" rel="noopener">
                <span className="forms-link-meta">Seguridad</span>Empresas de seguridad
              </a>
              <a href={formularios.rcTurismoAventura} target="_blank" rel="noopener">
                <span className="forms-link-meta">Turismo</span>Turismo aventura
              </a>
              <a href={formularios.rcRestaurants} target="_blank" rel="noopener">
                <span className="forms-link-meta">Gastronomía</span>Restaurants
              </a>
              <a href={formularios.rcObrasVialesHidraulicas} target="_blank" rel="noopener">
                <span className="forms-link-meta">Obras</span>Obras viales e hidráulicas
              </a>
              <a href={formularios.rcComprensivas} target="_blank" rel="noopener">
                <span className="forms-link-meta">General</span>Comprensivas
              </a>
              <a href={formularios.rcEstadiosCerrados} target="_blank" rel="noopener">
                <span className="forms-link-meta">Eventos</span>Estadios cerrados
              </a>
              <a href={formularios.rcExposiciones} target="_blank" rel="noopener">
                <span className="forms-link-meta">Eventos</span>Exposiciones
              </a>
              <a href={formularios.rcObras} target="_blank" rel="noopener">
                <span className="forms-link-meta">Obras</span>Obras
              </a>
            </div>
          </article>

          <article className="forms-col">
            <h5>Formularios de Personas</h5>
            <div className="forms-links-grid">
              <a href={formularios.personasHumanasAsegurados} target="_blank" rel="noopener">
                <span className="forms-link-meta">Personas Humanas</span>Formulario asegurados
              </a>
              <a href={formularios.personasJuridicasAsegurados} target="_blank" rel="noopener">
                <span className="forms-link-meta">Personas Jurídicas</span>Formulario asegurados
              </a>
              <a href={formularios.accidentesPersonasTomador} target="_blank" rel="noopener">
                <span className="forms-link-meta">Accidentes Personales</span>Tomador Accidentes Personales
              </a>
              <a href={formularios.accidentesPersonasAsegurable} target="_blank" rel="noopener">
                <span className="forms-link-meta">Accidentes Personales</span>Individual asegurable
              </a>
              <a href={formularios.accidentesPersonasDenuncia} target="_blank" rel="noopener">
                <span className="forms-link-meta">Accidentes Personales</span>Denuncia de siniestros
              </a>
              <a href={formularios.vidaColectivoTomador} target="_blank" rel="noopener">
                <span className="forms-link-meta">Vida Colectivo</span>Tomador Vida Colectivo
              </a>
              <a href={formularios.vidaColectivoCuestionarioSalud} target="_blank" rel="noopener">
                <span className="forms-link-meta">Vida Colectivo</span>Cuestionario de salud simplificado
              </a>
              <a href={formularios.solicitudIndividualVidaColectivo} target="_blank" rel="noopener">
                <span className="forms-link-meta">Vida Colectivo</span>Solicitud individual del asegurable
              </a>
              <a href={formularios.vidaObligatorioBeneficiario} target="_blank" rel="noopener">
                <span className="forms-link-meta">Vida Obligatorio</span>Designación de beneficiario
              </a>
              <a href={formularios.continuidadEscolarTomador} target="_blank" rel="noopener">
                <span className="forms-link-meta">Continuidad Escolar</span>Tomador Escolar
              </a>
              <a href={formularios.continuidadEscolarSolicitudVida} target="_blank" rel="noopener">
                <span className="forms-link-meta">Continuidad Escolar</span>Solicitud de vida asegurable
              </a>
              <a href={formularios.continuidadEscolarCuestionarioSalud} target="_blank" rel="noopener">
                <span className="forms-link-meta">Continuidad Escolar</span>Cuestionario de salud simplificado
              </a>
              <a href={formularios.convenioMercantilTomador} target="_blank" rel="noopener">
                <span className="forms-link-meta">Convenio Mercantil</span>Tomador Mercantil
              </a>
              <a href={formularios.convenioMercantilBeneficiarios} target="_blank" rel="noopener">
                <span className="forms-link-meta">Convenio Mercantil</span>Designación de beneficiarios
              </a>
              <a href={formularios.empleadosOptativoTomador} target="_blank" rel="noopener">
                <span className="forms-link-meta">Empleados Optativo</span>Tomador Empleados
              </a>
              <a href={formularios.empleadosOptativoSolicitudEmpleado} target="_blank" rel="noopener">
                <span className="forms-link-meta">Empleados Optativo</span>Solicitud individual del empleado
              </a>
              <a href={formularios.empleadosOptativoCuestionarioSalud} target="_blank" rel="noopener">
                <span className="forms-link-meta">Empleados Optativo</span>Cuestionario de salud simplificado
              </a>
              <a href={formularios.sepelioTomador} target="_blank" rel="noopener">
                <span className="forms-link-meta">Sepelio</span>Tomador Sepelio
              </a>
              <a href={formularios.sepelioAsegurable} target="_blank" rel="noopener">
                <span className="forms-link-meta">Sepelio</span>Solicitud del asegurable
              </a>
              <a href={formularios.formularioLavadoActivos} target="_blank" rel="noopener">
                <span className="forms-link-meta">General</span>Formulario lavado de activos
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
