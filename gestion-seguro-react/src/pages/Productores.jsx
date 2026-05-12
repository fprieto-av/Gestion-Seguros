import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import BrandStrip from '../components/BrandStrip'
import ContactCard from '../components/ContactCard'
import '../assets/css/productores.css'
import bannerPas from '../assets/img/banner-pas.jpg'

export default function Productores() {
  useEffect(() => { document.title = 'Productores Asesores · ¡PASate a Gestión! | Gestión Seguros' }, [])
  useReveal()

  return (
    <>
      <header className="page-hero page-hero--pas-wide" style={{ backgroundImage: `linear-gradient(135deg, rgba(14,23,48,0.88) 0%, rgba(27,79,174,0.7) 100%), url(${bannerPas})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero-inner page-hero-inner--pas-wide">
          <nav className="breadcrumb"><Link to="/">Home</Link> / <span>Productores</span></nav>
          <span className="section-label dark reveal"><svg className="icon" style={{ width: '14px' }}><use href="#i-award" /></svg>Programa PAS</span>
          <h1 className="reveal delay-1" id="pas-hero-title">Si sos <em>PAS</em>,<br />¡<span className="pas-ink">PAS</span>ate a Gestión!</h1>
          <p className="lead reveal delay-2">Sumate a nuestro equipo de <b>Productores Asesores de Seguros</b> y tené un respaldo de confianza. Plataforma GestionAr, capacitación continua, comisiones competitivas y soporte humano todos los días.</p>
          <div className="hero-ctas reveal delay-3 page-hero-pas-ctas">
            <a href="#form-pas" className="btn btn-accent btn-lg">Quiero asociarme <svg className="icon"><use href="#i-arrow" /></svg></a>
            <a href="#beneficios" className="btn btn-ghost btn-lg">Ver beneficios</a>
          </div>
        </div>
      </header>

      <BrandStrip />

      {/* BENEFICIOS */}
      <section className="section proceso" id="beneficios">
        <div className="section-head reveal">
          <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-award" /></svg>Beneficios</span>
          <h2>Todo lo que <span className="gradient-text">encontrás con nosotros</span></h2>
          <p>Pensamos al PAS como socio estratégico, no como un canal más. Te damos las herramientas que te hacen la vida más fácil y rentable.</p>
        </div>
        <div className="proc-grid">
          <div className="proc-item reveal"><div className="proc-num" style={{ background: 'var(--primary)' }}><svg className="icon" style={{ color: '#fff', width: '22px' }}><use href="#i-zap" /></svg></div><h4>Plataforma GestionAr</h4><p>Cotizá, emití, cobrá y gestionás tu cartera online. Sin llamar, sin esperar.</p></div>
          <div className="proc-item reveal delay-1"><div className="proc-num" style={{ background: 'var(--secondary)' }}><svg className="icon" style={{ color: '#fff', width: '22px' }}><use href="#i-dollar" /></svg></div><h4>Comisiones competitivas</h4><p>Esquemas transparentes. Facturación mensual y liquidación puntual.</p></div>
          <div className="proc-item reveal delay-2"><div className="proc-num" style={{ background: 'var(--accent)' }}><svg className="icon" style={{ color: '#fff', width: '22px' }}><use href="#i-headphones" /></svg></div><h4>Soporte dedicado</h4><p>Ejecutivo comercial asignado. Mesa técnica que responde en minutos.</p></div>
          <div className="proc-item reveal delay-3"><div className="proc-num" style={{ background: 'var(--success)' }}><svg className="icon" style={{ color: 'var(--dark)', width: '22px' }}><use href="#i-doc" /></svg></div><h4>Capacitación continua</h4><p>Cursos y workshops de producto, regulación y ventas. Sin costo para el PAS.</p></div>
        </div>
      </section>

      {/* FORM PAS */}
      <section className="section" id="form-pas">
        <div className="section-head" style={{ maxWidth: '1060px', width: 'min(100%, 1060px)', margin: '0 auto 22px' }}>
          <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-award" /></svg>Programa PAS</span>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h3 style={{ position: 'relative' }}>Sumate como Productor Asesor de Seguros</h3>
            <p style={{ position: 'relative' }}>Trabajamos con Productores Asesores habilitados por la Superintendencia de Seguros de la Nación. El proceso es simple y rápido.</p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="ic"><svg className="icon" style={{ width: '22px' }}><use href="#i-check" /></svg></div>
                <div><b>Matrícula</b><span>Matrícula SSN vigente y sin inhabilitaciones</span></div>
              </div>
              <div className="contact-method">
                <div className="ic"><svg className="icon" style={{ width: '22px' }}><use href="#i-check" /></svg></div>
                <div><b>DDJJ impositiva</b><span>Inscripción vigente en AFIP y últimos comprobantes</span></div>
              </div>
              <div className="contact-method">
                <div className="ic"><svg className="icon" style={{ width: '22px' }}><use href="#i-check" /></svg></div>
                <div><b>Cuenta bancaria</b><span>Para liquidación de comisiones (CBU a nombre del PAS)</span></div>
              </div>
              <div className="contact-method">
                <div className="ic"><svg className="icon" style={{ width: '22px' }}><use href="#i-check" /></svg></div>
                <div><b>Alta en GestionAr</b><span>Capacitamos y activamos tu acceso en 48hs</span></div>
              </div>
              <div className="contact-method">
                <div className="ic"><svg className="icon" style={{ width: '22px' }}><use href="#i-mail" /></svg></div>
                <div><b>Contacto directo</b><a href="mailto:comercial@gestionseguros.com.ar">comercial@gestionseguros.com.ar</a></div>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            name="form-pas"
            action="https://formsubmit.co/comercial@gestionseguros.com.ar"
            method="POST"
            encType="multipart/form-data"
          >
            <h3>Rellena el formulario para convertirte en <span className="pas-accent">PAS</span></h3>
            <h4 style={{ margin: '4px 0 12px', color: 'var(--dark)' }}>Parte 1 · Datos del productor</h4>
            <div className="form-grid">
              <div className="form-field">
                <label>Nombre y Apellido <span className="req">*</span></label>
                <input type="text" name="nombre" required />
              </div>
              <div className="form-field">
                <label>Email <span className="req">*</span></label>
                <input type="email" name="email" required />
              </div>
              <div className="form-field">
                <label>Teléfono</label>
                <input type="tel" name="telefono" />
              </div>
              <div className="form-field">
                <label>Matrícula SSN <span className="req">*</span></label>
                <input type="text" name="matricula" required placeholder="Número de matrícula" />
              </div>
              <div className="form-field">
                <label>C.U.I.T <span className="req">*</span></label>
                <input type="text" name="cuit" inputMode="numeric" pattern="[0-9]{11}" placeholder="11 dígitos sin guiones" required />
              </div>
              <div className="form-field">
                <label>Categoría frente al IVA <span className="req">*</span></label>
                <select name="categoriaIva" required>
                  <option value="">Seleccionar</option>
                  <option value="Responsable Inscripto">Responsable Inscripto</option>
                  <option value="Monotributo">Monotributo</option>
                  <option value="Exento">Exento</option>
                  <option value="No alcanzado">No alcanzado</option>
                </select>
              </div>
              <div className="form-field full">
                <label>Provincia</label>
                <input type="text" name="provincia" placeholder="Ej: Buenos Aires" />
              </div>
              <div className="form-field full">
                <label>Experiencia / Observaciones</label>
                <textarea name="mensaje" rows="4" placeholder="Contanos brevemente tu experiencia, cartera actual y expectativas" />
              </div>
              <div className="form-field full">
                <fieldset className="pas-docs">
                  <h4>Parte 2 · Documentación obligatoria para alta de productor</h4>
                  <p>Adjuntá todos los archivos requeridos para enviar la solicitud.</p>
                  <div className="pas-docs-grid">
                    <div className="pas-doc-item">
                      <label>Constancia SSN (frente y dorso) <span className="req">*</span></label>
                      <input type="file" name="ssnMatricula" accept=".pdf,.jpg,.jpeg,.png" required />
                    </div>
                    <div className="pas-doc-item">
                      <label>Rúbrica digital <span className="req">*</span></label>
                      <input type="file" name="rubricaDigital" accept=".pdf,.jpg,.jpeg,.png" required />
                    </div>
                    <div className="pas-doc-item">
                      <label>Constancia categoría IVA <span className="req">*</span></label>
                      <input type="file" name="constanciaIva" accept=".pdf,.jpg,.jpeg,.png" required />
                    </div>
                    <div className="pas-doc-item">
                      <label>Inscripción Ingresos Brutos <span className="req">*</span></label>
                      <input type="file" name="ingresosBrutos" accept=".pdf,.jpg,.jpeg,.png" required />
                    </div>
                    <div className="pas-doc-item">
                      <label>Pago anual de matrícula <span className="req">*</span></label>
                      <input type="file" name="pagoMatricula" accept=".pdf,.jpg,.jpeg,.png" required />
                    </div>
                    <div className="pas-doc-item">
                      <label>Constancia de CBU propia <span className="req">*</span></label>
                      <input type="file" name="constanciaCbu" accept=".pdf,.jpg,.jpeg,.png" required />
                    </div>
                    <div className="pas-doc-item pas-doc-item--full">
                      <label>Declaración Jurada PEP <span className="req">*</span></label>
                      <input type="file" name="ddjjPep" accept=".pdf,.jpg,.jpeg,.png" required />
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            <input type="hidden" name="_subject" value="Nueva solicitud PAS desde la web" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.gestionseguros.com.ar/productores.html?pas=enviado" />
            <div className="form-check">
              <input type="checkbox" id="terms-pas" required />
              <label htmlFor="terms-pas">Acepto la política de privacidad y el tratamiento de mis datos personales.</label>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Enviar solicitud <svg className="icon"><use href="#i-arrow" /></svg>
            </button>
          </form>
        </div>
      </section>

      <ContactCard
        title="Contacto directo · Productores"
        subtitle="Canal rápido para sumar productores y consultas del programa PAS."
        links={[{ label: 'comercial@gestionseguros.com.ar', href: 'mailto:comercial@gestionseguros.com.ar', icon: 'i-mail' }]}
      />
    </>
  )
}
