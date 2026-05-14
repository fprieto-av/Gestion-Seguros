import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import BrandStrip from '../components/BrandStrip'
import ContactCard from '../components/ContactCard'
import '../assets/css/productores.css'
import bannerPas from '../assets/img/banner-pas.jpg'

// Regex reutilizables
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TEL_RE   = /^[\d\s\-\+\(\)]{6,20}$/
const CUIT_RE  = /^\d{11}$/

// Archivos obligatorios con sus labels para los mensajes de error
const DOCS_REQUERIDOS = [
  { name: 'ssnMatricula',   label: 'Constancia SSN' },
  { name: 'rubricaDigital', label: 'Rúbrica digital' },
  { name: 'constanciaIva',  label: 'Constancia IVA' },
  { name: 'ingresosBrutos', label: 'Ingresos Brutos' },
  { name: 'pagoMatricula',  label: 'Pago de matrícula' },
  { name: 'constanciaCbu',  label: 'Constancia de CBU' },
  { name: 'ddjjPep',        label: 'DDJJ PEP' },
]

export default function Productores() {
  useEffect(() => { document.title = 'Productores Asesores · ¡PASate a Gestión! | Gestión Seguros' }, [])
  useReveal()

  // Estado solo para los campos de texto — los file inputs quedan no controlados
  const [form, setForm] = useState({
    nombre: '', email: '', telefono: '',
    matricula: '', cuit: '', categoriaIva: '',
    provincia: '', mensaje: '', terms: false,
  })
  const [errors, setErrors] = useState({})

  // Ref al <form> para poder llamar .submit() nativo si la validación pasa
  const formRef = useRef(null)

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => { const n = { ...e }; delete n[k]; return n })
  }

  const validate = () => {
    const errs = {}

    // Datos del productor
    if (!form.nombre.trim())              errs.nombre      = 'El nombre es obligatorio.'
    if (!form.email.trim())               errs.email       = 'El email es obligatorio.'
    else if (!EMAIL_RE.test(form.email))  errs.email       = 'Ingresá un email válido.'
    if (form.telefono && !TEL_RE.test(form.telefono)) errs.telefono = 'Teléfono inválido.'
    if (!form.matricula.trim())           errs.matricula   = 'La matrícula es obligatoria.'
    if (!form.cuit.trim())                errs.cuit        = 'El CUIT es obligatorio.'
    else if (!CUIT_RE.test(form.cuit))    errs.cuit        = 'El CUIT debe tener 11 dígitos sin guiones.'
    if (!form.categoriaIva)              errs.categoriaIva = 'Seleccioná una categoría.'

    // Archivos: verificamos via el DOM que cada file input tenga un archivo
    if (formRef.current) {
      DOCS_REQUERIDOS.forEach(({ name, label }) => {
        const el = formRef.current.elements[name]
        if (!el || !el.files || el.files.length === 0)
          errs[name] = `${label} es obligatorio.`
      })
    }

    if (!form.terms) errs.terms = 'Debés aceptar la política de privacidad.'
    return errs
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    // Envío nativo: respeta el action/encType para subir archivos a formsubmit.co
    formRef.current.submit()
  }

  return (
    <>
      <header className="page-hero page-hero--pas-wide" style={{ backgroundImage: `linear-gradient(135deg, rgba(14,23,48,0.88) 0%, rgba(27,79,174,0.7) 100%), url(${bannerPas})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero-inner page-hero-inner--pas-wide">
          <nav className="breadcrumb"><Link to="/">Home</Link> / <span>Productores</span></nav>
          <span className="section-label dark reveal"><svg className="icon" style={{ width: '14px' }}><use href="#i-award" /></svg>Programa PAS</span>
          <h1 className="reveal delay-1" id="pas-hero-title">Si sos <em>PAS</em>,<br />¡<span className="pas-ink">PAS</span>ate a Gestión!</h1>
          <p className="lead reveal delay-2">Sumate a nuestro equipo de <b>Productores Asesores de Seguros</b> y tené un respaldo de confianza. Plataforma GestionAr, capacitación continua, comisiones competitivas y soporte humano todos los días.</p>
          <div className="hero-ctas reveal delay-3 page-hero-pas-ctas">
            <a href="#form-pas" className="btn btn-accent btn-lg">Quiero unirme <svg className="icon"><use href="#i-arrow" /></svg></a>
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
            <h3 style={{ position: 'relative' }}>¿Querés unirte como <span className="pas-accent">Productor Asesor de Seguros</span>?</h3>
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
        </div>

        {/* noValidate desactiva la validación nativa — la manejamos nosotros antes de .submit() */}
        <form
            ref={formRef}
            className="contact-form"
            name="form-pas"
            action="https://formsubmit.co/comercial@gestionseguros.com.ar"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            noValidate
          >
            <h3>Asociate a través del formulario</h3>
            <h4 style={{ margin: '4px 0 12px', color: 'var(--primary)' }}>Parte 1 · Datos del productor</h4>
            <div className="form-grid">

              <div className={`form-field${errors.nombre ? ' form-field--error' : ''}`}>
                <label>Nombre y Apellido <span className="req">*</span></label>
                <input type="text" name="nombre" value={form.nombre} onChange={e => set('nombre', e.target.value)} />
                {errors.nombre && <span className="form-error">{errors.nombre}</span>}
              </div>

              <div className={`form-field${errors.email ? ' form-field--error' : ''}`}>
                <label>Email <span className="req">*</span></label>
                <input type="email" name="email" value={form.email} onChange={e => set('email', e.target.value)} />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className={`form-field${errors.telefono ? ' form-field--error' : ''}`}>
                <label>Teléfono</label>
                <input type="tel" name="telefono" value={form.telefono} onChange={e => set('telefono', e.target.value)} />
                {errors.telefono && <span className="form-error">{errors.telefono}</span>}
              </div>

              <div className={`form-field${errors.matricula ? ' form-field--error' : ''}`}>
                <label>Matrícula SSN <span className="req">*</span></label>
                <input type="text" name="matricula" placeholder="Número de matrícula" value={form.matricula} onChange={e => set('matricula', e.target.value)} />
                {errors.matricula && <span className="form-error">{errors.matricula}</span>}
              </div>

              <div className={`form-field${errors.cuit ? ' form-field--error' : ''}`}>
                <label>C.U.I.T <span className="req">*</span></label>
                <input type="text" name="cuit" inputMode="numeric" placeholder="11 dígitos sin guiones" value={form.cuit} onChange={e => set('cuit', e.target.value)} />
                {errors.cuit && <span className="form-error">{errors.cuit}</span>}
              </div>

              <div className={`form-field${errors.categoriaIva ? ' form-field--error' : ''}`}>
                <label>Categoría frente al IVA <span className="req">*</span></label>
                <select name="categoriaIva" value={form.categoriaIva} onChange={e => set('categoriaIva', e.target.value)}>
                  <option value="">Seleccionar</option>
                  <option value="Responsable Inscripto">Responsable Inscripto</option>
                  <option value="Monotributo">Monotributo</option>
                  <option value="Exento">Exento</option>
                  <option value="No alcanzado">No alcanzado</option>
                </select>
                {errors.categoriaIva && <span className="form-error">{errors.categoriaIva}</span>}
              </div>

              <div className="form-field full">
                <label>Provincia</label>
                <input type="text" name="provincia" placeholder="Ej: Buenos Aires" value={form.provincia} onChange={e => set('provincia', e.target.value)} />
              </div>

              <div className="form-field full">
                <label>Experiencia / Observaciones</label>
                <textarea name="mensaje" rows="4" placeholder="Contanos brevemente tu experiencia, cartera actual y expectativas" value={form.mensaje} onChange={e => set('mensaje', e.target.value)} />
              </div>

              <div className="form-field full">
                <fieldset className="pas-docs">
                  <h4 style={{ color: 'var(--primary)' }}>Parte 2 · Documentación obligatoria para alta de productor</h4>
                  <p>Adjuntá todos los archivos requeridos para enviar la solicitud.</p>
                  <div className="pas-docs-grid">

                    <div className={`pas-doc-item${errors.ssnMatricula ? ' form-field--error' : ''}`}>
                      <label>Constancia SSN (frente y dorso) <span className="req">*</span></label>
                      <input type="file" name="ssnMatricula" accept=".pdf,.jpg,.jpeg,.png"
                        onChange={() => { if (errors.ssnMatricula) setErrors(e => { const n = { ...e }; delete n.ssnMatricula; return n }) }} />
                      {errors.ssnMatricula && <span className="form-error">{errors.ssnMatricula}</span>}
                    </div>

                    <div className={`pas-doc-item${errors.rubricaDigital ? ' form-field--error' : ''}`}>
                      <label>Rúbrica digital <span className="req">*</span></label>
                      <input type="file" name="rubricaDigital" accept=".pdf,.jpg,.jpeg,.png"
                        onChange={() => { if (errors.rubricaDigital) setErrors(e => { const n = { ...e }; delete n.rubricaDigital; return n }) }} />
                      {errors.rubricaDigital && <span className="form-error">{errors.rubricaDigital}</span>}
                    </div>

                    <div className={`pas-doc-item${errors.constanciaIva ? ' form-field--error' : ''}`}>
                      <label>Constancia categoría IVA <span className="req">*</span></label>
                      <input type="file" name="constanciaIva" accept=".pdf,.jpg,.jpeg,.png"
                        onChange={() => { if (errors.constanciaIva) setErrors(e => { const n = { ...e }; delete n.constanciaIva; return n }) }} />
                      {errors.constanciaIva && <span className="form-error">{errors.constanciaIva}</span>}
                    </div>

                    <div className={`pas-doc-item${errors.ingresosBrutos ? ' form-field--error' : ''}`}>
                      <label>Inscripción Ingresos Brutos <span className="req">*</span></label>
                      <input type="file" name="ingresosBrutos" accept=".pdf,.jpg,.jpeg,.png"
                        onChange={() => { if (errors.ingresosBrutos) setErrors(e => { const n = { ...e }; delete n.ingresosBrutos; return n }) }} />
                      {errors.ingresosBrutos && <span className="form-error">{errors.ingresosBrutos}</span>}
                    </div>

                    <div className={`pas-doc-item${errors.pagoMatricula ? ' form-field--error' : ''}`}>
                      <label>Pago anual de matrícula <span className="req">*</span></label>
                      <input type="file" name="pagoMatricula" accept=".pdf,.jpg,.jpeg,.png"
                        onChange={() => { if (errors.pagoMatricula) setErrors(e => { const n = { ...e }; delete n.pagoMatricula; return n }) }} />
                      {errors.pagoMatricula && <span className="form-error">{errors.pagoMatricula}</span>}
                    </div>

                    <div className={`pas-doc-item${errors.constanciaCbu ? ' form-field--error' : ''}`}>
                      <label>Constancia de CBU propia <span className="req">*</span></label>
                      <input type="file" name="constanciaCbu" accept=".pdf,.jpg,.jpeg,.png"
                        onChange={() => { if (errors.constanciaCbu) setErrors(e => { const n = { ...e }; delete n.constanciaCbu; return n }) }} />
                      {errors.constanciaCbu && <span className="form-error">{errors.constanciaCbu}</span>}
                    </div>

                    <div className={`pas-doc-item pas-doc-item--full${errors.ddjjPep ? ' form-field--error' : ''}`}>
                      <label>Declaración Jurada PEP <span className="req">*</span></label>
                      <input type="file" name="ddjjPep" accept=".pdf,.jpg,.jpeg,.png"
                        onChange={() => { if (errors.ddjjPep) setErrors(e => { const n = { ...e }; delete n.ddjjPep; return n }) }} />
                      {errors.ddjjPep && <span className="form-error">{errors.ddjjPep}</span>}
                    </div>

                  </div>
                </fieldset>
              </div>

            </div>

            <input type="hidden" name="_subject" value="Nueva solicitud PAS desde la web" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.gestionseguros.com.ar/productores.html?pas=enviado" />

            <div className={`form-check${errors.terms ? ' form-field--error' : ''}`}>
              <input type="checkbox" id="terms-pas" checked={form.terms} onChange={e => set('terms', e.target.checked)} />
              <label htmlFor="terms-pas">Acepto la política de privacidad y el tratamiento de mis datos personales.</label>
            </div>
            {errors.terms && <span className="form-error">{errors.terms}</span>}

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Enviar solicitud <svg className="icon"><use href="#i-arrow" /></svg>
            </button>
        </form>
      </section>

      <ContactCard
        title="Contacto directo · Productores"
        subtitle="Canal rápido para sumar productores y consultas del programa PAS."
        links={[{ label: 'comercial@gestionseguros.com.ar', href: 'mailto:comercial@gestionseguros.com.ar', icon: 'i-mail' }]}
      />
    </>
  )
}
