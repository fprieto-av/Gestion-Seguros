import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import ContactCard from '../components/ContactCard'
import PageCta from '../components/PageCta'
import BrandStrip from '../components/BrandStrip'
import '../assets/css/mediosdepago.css'
import mediosdepago from '../assets/img/banners-web/pagos.jpg'
import { instructivos as instructivosPdf } from '../assets/instructivosUrls'

function CbuCopy({ value }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <span className="cbu-copy-row">
      <span>CBU: {value}</span>
      <button type="button" className={`cbu-copy-btn${copied ? ' copied' : ''}`} onClick={copy} title="Copiar CBU">
        <svg className="icon" style={{ width: '14px' }}><use href={copied ? '#i-check' : '#i-copy'} /></svg>
      </button>
    </span>
  )
}

export default function MediosDePago() {
  useEffect(() => {
    document.title = 'Medios de pago | Gestión Seguros'
  }, [])
  useReveal()

  return (
    <>
      {/* HERO */}
      <header className="page-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(14,23,48,0.88) 0%, rgba(27,79,174,0.7) 100%), url(${mediosdepago})` }}>
        <div className="page-hero-inner">
          <nav className="breadcrumb"><Link to="/">Home</Link> / <span>Pagos</span></nav>
          <span className="section-label dark reveal"><svg className="icon" style={{ width: '14px' }}><use href="#i-award" /></svg>Pagos</span>
          <h1 className="reveal delay-1">Medios de <em>Pago</em></h1>
          <p className="lead reveal delay-2">Te ofrecemos distintas alternativas para que tus pagos sean simples. Elegí la opción que más se adecúe a tus necesidades.</p>
        </div>
      </header>

      <BrandStrip />

      <section className="section">
        <div className="section-head">
          <h2>Canales <span className="gradient-text">disponibles</span></h2>
          <p>Estos son los medios oficiales vigentes para abonar pólizas de Gestión Seguros y reportar comprobantes.</p>
        </div>

        {/* VISUAL */}
        <div className="pay-visual">
          <div className="pay-visual-copy">
            <h3>Pagá como te quede más cómodo</h3>
            <p>Centralizamos medios bancarios, electrónicos y redes de cobranza para que puedas operar con rapidez y trazabilidad.</p>
            <div className="pay-visual-list">
              <span>Transferencia</span>
              <span>DEBIN</span>
              <span>E-cheqs</span>
              <span>Tarjetas</span>
              <span>MercadoPago</span>
              <span>Pago Fácil</span>
              <span>Rapipago</span>
            </div>
          </div>
          <div className="pay-mini-card" aria-hidden="true">
            <div className="line-top">
              <div className="chip" />
              <b>Gestión Seguros</b>
            </div>
            <div className="num">•••• •••• •••• 1022</div>
            <div className="bottom">
              <span>Pagos y cobranzas</span>
              <span>ARS / USD</span>
            </div>
          </div>
        </div>

        {/* LAYOUT */}
        <div className="pay-layout">
          <div className="pay-grid">

            {/* TRANSFERENCIA */}
            <article className="pay-card full">
              <div className="pay-chip">Bancario</div>
              <h3>
                <svg className="icon"><use href="#i-dollar" /></svg>
                <span className="pay-title-text">Transferencia y depósito de efectivo en cuenta</span>
              </h3>
              <p><strong>Banco Patagonia</strong>. A través de su CBU también puede operar con DEBIN.</p>
              <div className="pay-accounts">
                <div className="pay-account">
                  <b>Cuenta para vida y sepelio</b>
                  <CbuCopy value="0340010400100611022016" />
                  <span>Cuenta: CC $ 10-100611022-1</span>
                  <span>CUIT: 30-71483881-0</span>
                </div>
                <div className="pay-account">
                  <b>Cuenta para accidentes personales, responsabilidad civil y caución</b>
                  <CbuCopy value="0340010400100611022009" />
                  <span>Cuenta: CC $ 10-100611022-0</span>
                  <span>CUIT: 30-71483881-0</span>
                </div>
                <div className="pay-account">
                  <b>Cuenta en dólares</b>
                  <CbuCopy value="0340010409100611022008" />
                  <span>Cuenta: CA USD 010-100611022-000</span>
                  <span>CUIT: 30-71483881-0</span>
                </div>
              </div>
            </article>

            {/* eCHECKS */}
            <article className="pay-card">
              <div className="pay-chip">Digital</div>
              <h3>
                <svg className="icon"><use href="#i-doc" /></svg>
                <span className="pay-title-text">Cheque bancario E-cheqs</span>
              </h3>
              <p>Emitir a nombre de: <strong>GESTIÓN COMPAÑÍA ARGENTINA DE SEGUROS S.A.</strong></p>
            </article>

            {/* DÉBITO DIRECTO */}
            <article className="pay-card">
              <div className="pay-chip">Automático</div>
              <h3>
                <svg className="icon"><use href="#i-doc" /></svg>
                <span className="pay-title-text">Débito directo en cuenta</span>
              </h3>
              <p> Adherí tu CBU y olvidate de los vencimientos.</p>
              <p className="pay-note">📩<strong><a href="mailto:cobranzas@segurosgestion.com.ar">cobranzas@segurosgestion.com.ar</a></strong></p>
            </article>

            {/* TARJETA */}
            <article className="pay-card">
              <div className="pay-chip">Tarjetas</div>
              <h3>
                <svg className="icon"><use href="#i-dollar" /></svg>
                <span className="pay-title-text">Tarjeta de crédito</span>
              </h3>
              <p>Solicitar adhesión por mail a: <p className="pay-note">📩<strong><a href="mailto:cobranzas@segurosgestion.com.ar">cobranzas@segurosgestion.com.ar</a></strong></p></p>
              <div className="pay-inline-logos">
                <span className="pay-logo-pill">VISA</span>
                <span className="pay-logo-pill">Master</span>
                <span className="pay-logo-pill">AMEX</span>
              </div>
            </article>

            {/* PAGO FÁCIL / RAPIPAGO */}
            <article className="pay-card">
              <div className="pay-chip">Recaudación</div>
              <h3>
                <svg className="icon"><use href="#i-doc" /></svg>
                <span className="pay-title-text">Pago Fácil y Rapipago</span>
              </h3>
              <p>Para utilizar estos medios, disponés del código de barras en el cupón de pago enviado con la póliza.</p>
              <div className="pay-inline-logos">
                <span className="pay-logo-pill">Pago Fácil</span>
                <span className="pay-logo-pill">Rapipago</span>
              </div>
            </article>

            {/* IMPORTANTE */}
            <article className="pay-card full pay-important">
              <h3>
                <svg className="icon"><use href="#i-award" /></svg>
                Recordatorios importantes
              </h3>
              <p><strong>IMPORTANTE:</strong>Si realizaste el pago mediante<strong>transferencia bancaria, depósito bancario o DEBIN</strong>,  y aún no lo informaste a través de la Web, por favor envialo a <strong><a href="mailto:cobranzas@segurosgestion.com.ar" className="pay-mail-link">cobranzas@segurosgestion.com.ar</a></strong> indicando el N.º de póliza y endoso, o bien el N.º de factura. </p>
            </article>

          </div>

          {/* SIDEBAR */}
          <aside className="pay-side">

            <div className="pay-preliq-card">
              <div className="pay-preliq-header">
                <svg className="icon" style={{ width: '15px' }}><use href="#i-zap" /></svg>
                <span>Rendí tus pagos online</span>
              </div>
              <div className="pay-preliq-body">
                <p>Ingresá a <a href="https://gestionar.segurosgestion.com.ar/" target="_blank" rel="noopener"><strong>GestionAR</strong></a> y gestioná tus preliquidaciones en minutos.</p>
                <a href={instructivosPdf.cargaPreliquidaciones} target="_blank" rel="noopener" className="pay-preliq-link">
                  💡 Descargá el instructivo acá <svg className="icon" style={{ width: '12px' }}><use href="#i-arrow" /></svg>
                </a>
              </div>
            </div>

            <div className="pay-side-contact">
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg className="icon" style={{ width: '18px', color: 'var(--primary)', flexShrink: 0 }}><use href="#i-briefcase" /></svg>
                Gestión de cobranzas
              </h4>
              <p>Para consultas sobre adhesiones o pagos, escribinos directamente a: </p>
              <a href="mailto:cobranzas@segurosgestion.com.ar" className="btn btn-primary pay-mail-btn">
                cobranzas@segurosgestion.com.ar
              </a>
            </div>
          </aside>
        </div>
      </section>

      <ContactCard
        title="Contacto directo · Cobranzas"
        subtitle="Canal rápido para consultas y seguimiento de tu gestión."
        links={[
          { label: 'cobranzas@segurosgestion.com.ar', href: 'mailto:cobranzas@segurosgestion.com.ar', icon: 'i-mail' },
          { label: 'WhatsApp Cobranzas', href: 'https://wa.me/5491138917326', icon: 'i-whatsapp' },
        ]}
      />
      <PageCta
        title="¿Tenés dudas sobre tu pago?"
        subtitle="Contactanos y te ayudamos a resolver cualquier consulta de cobranza."
        btnText="Contactar ahora"
      />
    </>
  )
}
