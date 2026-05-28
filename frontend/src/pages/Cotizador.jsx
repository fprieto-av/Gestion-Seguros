import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import BrandStrip from '../components/BrandStrip'
import PageCta from '../components/PageCta'
import cotizadorBg from '../assets/img/cotizador.png'

export default function Cotizador() {
  useEffect(() => { document.title = 'Cotizador | Gestión Seguros' }, [])
  useReveal()

  return (
    <>
      <header className="page-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(14,23,48,0.45) 0%, rgba(27,79,174,0.30) 100%), url(${cotizadorBg})` }}>
        <div className="page-hero-inner">
          <nav className="breadcrumb"><Link to="/">Home</Link> / <span>Cotizador</span></nav>
          <span className="section-label dark reveal"><svg className="icon" style={{ width: '14px' }}><use href="#i-award" /></svg>Cotizador</span>
          <h1 className="reveal delay-1">Cotizador</h1>
          <p className="lead reveal delay-2">Sección en desarrollo</p>
        </div>
      </header>

      <BrandStrip />

      <section className="section">
        <div className="section-head">
          <h2>Página en <span className="gradient-text">desarrollo</span></h2>
          <p>Esta sección estará disponible próximamente. Mientras tanto podés contactarnos directamente.</p>
          <Link to="/contacto" className="btn btn-primary">Ir a Contacto <svg className="icon"><use href="#i-arrow" /></svg></Link>
        </div>
      </section>

      <PageCta
        title="¿Necesitás ayuda para cotizar?"
        subtitle="Un asesor te acompaña paso a paso."
        btnText="Contactar ahora"
      />
    </>
  )
}
