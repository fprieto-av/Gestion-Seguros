import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/mediosdepago.css'
import mediosdepago from '../assets/img/mediosdepago.png'

export default function MediosDePago() {
  useEffect(() => {
    document.title = 'Medios de pago | Gestión Seguros'
  }, [])

  return (
    <>
      {/* HERO */}
      <header className="page-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(14,23,48,0.88) 0%, rgba(27,79,174,0.7) 100%), url(${mediosdepago})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero-inner">
          <nav className="breadcrumb"><Link to="/">Home</Link> / <span>Pagos</span></nav>
          <span className="section-label dark reveal"><svg className="icon" style={{ width: '14px' }}><use href="#i-award" /></svg>Pagos</span>
          <h1 className="reveal delay-1">Medios de <em>Pago</em></h1>
          <p className="lead reveal delay-2">Medios de pago oficiales. Elegí el que más te quede cómodo en base a tu preferencia y necesidades</p>
        </div>
      </header>

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
              <span>eChecks</span>
              <span>Tarjetas</span>
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
                  <span>CBU: 0340010400100611022016</span>
                  <span>Cuenta: CC $ 10-100611022-1</span>
                  <span>CUIT: 30-71483881-0</span>
                </div>
                <div className="pay-account">
                  <b>Cuenta para accidentes personales, responsabilidad civil y caución</b>
                  <span>CBU: 0340010400100611022009</span>
                  <span>Cuenta: CC $ 10-100611022-0</span>
                  <span>CUIT: 30-71483881-0</span>
                </div>
                <div className="pay-account">
                  <b>Cuenta en dólares</b>
                  <span>CBU: 0340010409100611022008</span>
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
                <span className="pay-title-text">Cheque bancario - eChecks</span>
              </h3>
              <p>Emitir cheques a nombre de: <strong>GESTIÓN COMPAÑÍA ARGENTINA DE SEGUROS S.A.</strong></p>
            </article>

            {/* DÉBITO DIRECTO */}
            <article className="pay-card">
              <div className="pay-chip">Automático</div>
              <h3>
                <svg className="icon"><use href="#i-doc" /></svg>
                <span className="pay-title-text">Débito directo en cuenta</span>
              </h3>
              <p>A través de su CBU puede adherirse a este medio de pago.</p>
              <p className="pay-note">Enviar solicitud a: <strong><a href="mailto:cobranzas@gestionseguros.com.ar">cobranzas@gestionseguros.com.ar</a></strong></p>
            </article>

            {/* TARJETA */}
            <article className="pay-card">
              <div className="pay-chip">Tarjetas</div>
              <h3>
                <svg className="icon"><use href="#i-dollar" /></svg>
                <span className="pay-title-text">Tarjeta de crédito</span>
              </h3>
              <p>Solicitar adhesión por mail a <a href="mailto:cobranzas@gestionseguros.com.ar">cobranzas@gestionseguros.com.ar</a>.</p>
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
              <p><strong>IMPORTANTE:</strong> En los casos de <strong>transferencia bancaria, depósito en banco y DEBIN</strong>, una vez realizado el pago de la operación, le solicitamos por favor nos informe el mismo detallando:</p>
              <p className="pay-note"><strong>N° de Póliza</strong> y <strong>N° de Endoso o cobertura abonada</strong> mediante correo electrónico a la siguiente dirección:</p>
              <p><strong><a href="mailto:cobranzas@gestionseguros.com.ar">cobranzas@gestionseguros.com.ar</a></strong></p>
            </article>

          </div>

          {/* SIDEBAR */}
          <aside className="pay-side">
            <h4>Gestión de cobranzas</h4>
            <p>Para adhesiones, imputaciones y envío de comprobantes, te asistimos desde cobranzas.</p>
            <ul>
              <li>Adhesión a débito directo</li>
              <li>Adhesión con tarjeta de crédito</li>
              <li>Confirmación de pagos bancarios</li>
            </ul>
            <a href="mailto:cobranzas@gestionseguros.com.ar" className="btn btn-primary pay-mail-btn">
              cobranzas@gestionseguros.com.ar
            </a>
          </aside>
        </div>
      </section>
    </>
  )
}
