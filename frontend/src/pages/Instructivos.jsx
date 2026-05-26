import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import BrandStrip from '../components/BrandStrip'
import PageCta from '../components/PageCta'
import '../assets/css/instructivos.css'
import instructivos from '../assets/img/instructivos.png'
import { instructivos as instructivosPdf } from '../assets/instructivosUrls'

export default function Instructivos() {
  useEffect(() => {
    document.title = 'Instructivos | Gestión Seguros'
  }, [])
  useReveal()

  return (
    <>
      {/* HERO */}
      <header className="page-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(14,23,48,0.88) 0%, rgba(27,79,174,0.7) 100%), url(${instructivos})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero-inner">
          <nav className="breadcrumb"><Link to="/">Home</Link> / <span>Instructivos</span></nav>
          <span className="section-label dark reveal"><svg className="icon" style={{ width: '14px' }}><use href="#i-award" /></svg>Instructivos</span>
          <h1 className="reveal delay-1">Instructivos y <em>Manuales</em></h1>
          <p className="lead reveal delay-2">Accedé a guías prácticas para operar con Gestión Seguros: altas, pólizas, preliquidaciones, certificados y validaciones.</p>
        </div>
      </header>

      <BrandStrip />

      <section className="section">
        <div className="section-head reveal">
          <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-award" /></svg>Instructivos</span>
        </div>
        {/* INTRO */}
        <div className="guides-hero">
          <img src={instructivos} alt="Gestión Seguros instructivos" />
          <div>
            <h2>Seleccioná el instructivo que necesitás</h2>
            <h3>Descargalo y seguí el paso a paso según tu gestión</h3>
          </div>
        </div>

        {/* ACCESO RÁPIDO */}
        <div className="guides-tabs">
          <h4>Acceso rápido</h4>
          <div className="guides-links-row">
            <a href={instructivosPdf.cargaPreliquidaciones} target="_blank" rel="noopener">Carga de preliquidaciones</a>
            <a href={instructivosPdf.extraccionPoliza} target="_blank" rel="noopener">Extracción de póliza</a>
            <a href={instructivosPdf.validacionFirmaDigital} target="_blank" rel="noopener">Validación de firma digital</a>
          </div>
        </div>

        {/* SECCIONES */}
        <div className="guides-sections">

          {/* TODO: actualizar formulario antes de publicar
          <article className="guides-col">
            <h5>Altas y acceso web</h5>
            <div className="guides-links-grid">
              <a href={instructivosPdf.webInstructivo} target="_blank" rel="noopener">
                <span className="guide-link-meta">Portal</span>
                Web instructivo
              </a>
            </div>
          </article>
          */}

          <article className="guides-col">
            <h5>Pólizas e ítems</h5>
            <div className="guides-links-grid">
              <a href={instructivosPdf.extraccionPoliza} target="_blank" rel="noopener">
                <span className="guide-link-meta">Pólizas de Caución</span>
                Extracción de póliza
              </a>
              <a href={instructivosPdf.inclusionItem} target="_blank" rel="noopener">
                <span className="guide-link-meta">Ítems AP</span>
                Inclusión de ítem
              </a>
              <a href={instructivosPdf.exclusionItem} target="_blank" rel="noopener">
                <span className="guide-link-meta">Ítems AP</span>
                Exclusión de ítem
              </a>
            </div>
          </article>

          <article className="guides-col">
            <h5>Facturación y certificados</h5>
            <div className="guides-links-grid">
              <a href={instructivosPdf.cargaFacturaPas} target="_blank" rel="noopener">
                <span className="guide-link-meta">Facturación</span>
                Carga de factura PAS
              </a>
              <a href={instructivosPdf.cargaPreliquidaciones} target="_blank" rel="noopener">
                <span className="guide-link-meta">Liquidaciones</span>
                Carga de preliquidaciones
              </a>
              <a href={instructivosPdf.libreDeudaCertificadoGrupal} target="_blank" rel="noopener">
                <span className="guide-link-meta">Certificados AP & VIDA</span>
                Libre deuda y certificado grupal
              </a>
            </div>
          </article>

          <article className="guides-col">
            <h5>Validaciones</h5>
            <div className="guides-links-grid">
              <a href={instructivosPdf.validacionFirmaDigital} target="_blank" rel="noopener">
                <span className="guide-link-meta">Firma digital</span>
                Validación de firma digital
              </a>
            </div>
          </article>

        </div>
      </section>

      <PageCta
        title="¿Necesitás ayuda con los instructivos?"
        subtitle="Nuestro equipo te guía paso a paso en cualquier gestión."
      />
    </>
  )
}
