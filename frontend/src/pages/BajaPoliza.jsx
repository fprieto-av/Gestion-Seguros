import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import BrandStrip from '../components/BrandStrip'
import ContactCard from '../components/ContactCard'
import '../assets/css/productores.css'
import bannerBaja from '../assets/img/bajapoliza.png'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TEL_RE   = /^[\d\s()+-]{6,20}$/

export default function BajaPoliza() {
  useEffect(() => { document.title = 'Baja de Póliza | Gestión Seguros' }, [])
  useReveal()

  const [form, setForm] = useState({
    nombre_apellido: '', dni_cuit: '', email: '', telefono: '',
    tipo_seguro: '', numero_poliza: '', fecha_contratacion: '',
    motivo: '', terms: false,
  })
  const [errors, setErrors]   = useState({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent]       = useState(false)
  const [error, setError]     = useState(null)

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => { const n = { ...e }; delete n[k]; return n })
  }

  const validate = () => {
    const errs = {}
    if (!form.nombre_apellido.trim())    errs.nombre_apellido    = 'El nombre es obligatorio.'
    if (!form.dni_cuit.trim())           errs.dni_cuit           = 'El DNI/CUIT es obligatorio.'
    if (!form.email.trim())              errs.email              = 'El email es obligatorio.'
    else if (!EMAIL_RE.test(form.email)) errs.email              = 'Ingresá un email válido.'
    if (!form.telefono.trim())           errs.telefono           = 'El teléfono es obligatorio.'
    else if (!TEL_RE.test(form.telefono)) errs.telefono          = 'Teléfono inválido.'
    if (!form.tipo_seguro)               errs.tipo_seguro        = 'Seleccioná un tipo de seguro.'
    if (!form.numero_poliza.trim())      errs.numero_poliza      = 'El número de póliza es obligatorio.'
    if (!form.fecha_contratacion)        errs.fecha_contratacion = 'La fecha es obligatoria.'
    if (!form.terms)                     errs.terms              = 'Debés aceptar la declaración.'
    return errs
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/baja-poliza', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, terms: true }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error al enviar')
      setSent(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <header
        className="page-hero page-hero--pas-wide"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(14,23,48,0.88) 0%, rgba(27,79,174,0.7) 100%), url(${bannerBaja})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
        }}
      >
        <div className="page-hero-inner page-hero-inner--pas-wide">
          <nav className="breadcrumb"><Link to="/">Home</Link> / <span>Baja de Póliza</span></nav>
          <span className="section-label dark reveal">
            <svg className="icon" style={{ width: '14px' }}><use href="#i-shield" /></svg>Derecho del consumidor · Ley 24.240
          </span>
          <h1 className="reveal delay-1">
            ¿Estás seguro que ya no<br /><em>necesitás nuestra protección?</em>
          </h1>
          <p className="lead reveal delay-2">
            Te queremos recordar que el Seguro de Vida en Gestión Seguros es para cuidar a tus personas más importantes: una suma de dinero para cubrirlos ante cualquier eventualidad.
          </p>
          <div className="hero-ctas reveal delay-3 page-hero-pas-ctas">
            <a href="#form-baja" className="btn btn-accent btn-lg">
              Solicitar baja <svg className="icon"><use href="#i-arrow" /></svg>
            </a>
            <Link to="/" className="btn btn-ghost btn-lg">Volver al inicio</Link>
          </div>
        </div>
      </header>

      <BrandStrip />

      {/* MARCO LEGAL */}
      <section className="section proceso" id="info-baja">
        <div className="section-head reveal">
          <span className="section-label">
            <svg className="icon" style={{ width: '14px' }}><use href="#i-doc" /></svg>Marco legal
          </span>
          <h2>Todo lo que necesitás <span className="gradient-text">saber antes de solicitar la baja</span></h2>
          <p>En los términos del Artículo 34 de la Ley N° 24.240 y del Artículo 1.110 del Código Civil y Comercial de la Nación, tenés derecho a revocar tu seguro vigente.</p>
        </div>
        <div className="proc-grid proc-grid--baja">
          <div className="proc-item reveal">
            <div className="proc-num" style={{ background: 'var(--primary)' }}>
              <svg className="icon" style={{ color: '#fff', width: '22px' }}><use href="#i-doc" /></svg>
            </div>
            <h4>Completá el formulario</h4>
            <p>Ingresá tus datos personales y los de la póliza. Todo online, sin moverte de tu casa.</p>
          </div>
          <div className="proc-item reveal delay-1">
            <div className="proc-num" style={{ background: 'var(--secondary)' }}>
              <svg className="icon" style={{ color: '#fff', width: '22px' }}><use href="#i-headphones" /></svg>
            </div>
            <h4>Analizamos tu solicitud</h4>
            <p>Nuestro equipo revisa y procesa tu pedido dentro de las próximas 72 horas hábiles.</p>
          </div>
          <div className="proc-item reveal delay-2">
            <div className="proc-num" style={{ background: 'var(--accent)' }}>
              <svg className="icon" style={{ color: 'var(--dark)', width: '22px' }}><use href="#i-mail" /></svg>
            </div>
            <h4>Confirmación por email</h4>
            <p>Nos contactaremos con vos dentro de las próximas 72 hs para confirmar la baja de tu póliza.</p>
          </div>
        </div>
      </section>

      {/* FORM BAJA */}
      <section className="section" id="form-baja">
        <div className="section-head" style={{ maxWidth: '720px', width: 'min(100%, 720px)', margin: '0 auto 32px' }}>
          <span className="section-label">
            <svg className="icon" style={{ width: '14px' }}><use href="#i-shield" /></svg>Solicitud de baja
          </span>
          <h2 style={{ marginTop: '10px' }}>Solicita la <span className="gradient-text">revocación de tu seguro vigente</span></h2>
          <p>
            Para empezar el proceso, por favor completá el formulario. Nos contactaremos con vos dentro de las próximas 72 hs.
          </p>
        </div>

        <div style={{ maxWidth: '720px', margin: '0 auto', width: '100%' }}>
          <form
            className="contact-form"
            name="baja-poliza"
            onSubmit={handleSubmit}
            noValidate
          >
            <h4 style={{ margin: '16px 0 12px', color: 'var(--primary)' }}>Parte 1 · Datos personales</h4>
            <div className="form-grid form-grid--4col">
              <div className={`form-field${errors.nombre_apellido ? ' form-field--error' : ''}`}>
                <label>Nombre y Apellido <span className="req">*</span></label>
                <input type="text" name="nombre_apellido" placeholder="Juan García" value={form.nombre_apellido} onChange={e => set('nombre_apellido', e.target.value)} />
                {errors.nombre_apellido && <span className="form-error">{errors.nombre_apellido}</span>}
              </div>
              <div className={`form-field${errors.dni_cuit ? ' form-field--error' : ''}`}>
                <label>DNI / CUIT <span className="req">*</span></label>
                <input type="text" name="dni_cuit" placeholder="Sin puntos" value={form.dni_cuit} onChange={e => set('dni_cuit', e.target.value)} />
                {errors.dni_cuit && <span className="form-error">{errors.dni_cuit}</span>}
              </div>
              <div className={`form-field${errors.email ? ' form-field--error' : ''}`}>
                <label>Email <span className="req">*</span></label>
                <input type="email" name="email" placeholder="tu@email.com" value={form.email} onChange={e => set('email', e.target.value)} />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className={`form-field${errors.telefono ? ' form-field--error' : ''}`}>
                <label>Teléfono <span className="req">*</span></label>
                <input type="tel" name="telefono" placeholder="11 1234-5678" value={form.telefono} onChange={e => set('telefono', e.target.value)} />
                {errors.telefono && <span className="form-error">{errors.telefono}</span>}
              </div>
            </div>

            <h4 style={{ margin: '20px 0 12px', color: 'var(--primary)' }}>Parte 2 · Datos de la póliza</h4>
            <div className="form-grid form-grid--3col">
              <div className={`form-field${errors.tipo_seguro ? ' form-field--error' : ''}`}>
                <label>Tipo de seguro <span className="req">*</span></label>
                <select name="tipo_seguro" value={form.tipo_seguro} onChange={e => set('tipo_seguro', e.target.value)}>
                  <option value="">Seleccionar...</option>
                  <option value="Caución">Caución</option>
                  <option value="Garantía de Alquiler">Garantía de Alquiler</option>
                  <option value="Accidentes Personales">Accidentes Personales</option>
                  <option value="Seguro de Vida">Seguro de Vida</option>
                  <option value="Sepelio">Sepelio</option>
                  <option value="Responsabilidad Civil">Responsabilidad Civil</option>
                  <option value="Otro">Otro</option>
                </select>
                {errors.tipo_seguro && <span className="form-error">{errors.tipo_seguro}</span>}
              </div>
              <div className={`form-field${errors.numero_poliza ? ' form-field--error' : ''}`}>
                <label>Número de póliza <span className="req">*</span></label>
                <input type="text" name="numero_poliza" placeholder="Ej: 00012345" value={form.numero_poliza} onChange={e => set('numero_poliza', e.target.value)} />
                {errors.numero_poliza && <span className="form-error">{errors.numero_poliza}</span>}
              </div>
              <div className={`form-field${errors.fecha_contratacion ? ' form-field--error' : ''}`}>
                <label>Fecha de contratación <span className="req">*</span></label>
                <input type="date" name="fecha_contratacion" value={form.fecha_contratacion} onChange={e => set('fecha_contratacion', e.target.value)} />
                {errors.fecha_contratacion && <span className="form-error">{errors.fecha_contratacion}</span>}
              </div>
              <div className="form-field full">
                <label>Motivo de la baja <span style={{ color: 'var(--gray)', fontWeight: 400 }}>(opcional)</span></label>
                <textarea name="motivo" rows="3" placeholder="Podés contarnos el motivo de tu solicitud" value={form.motivo} onChange={e => set('motivo', e.target.value)} />
              </div>
            </div>

            <div className={`form-check${errors.terms ? ' form-field--error' : ''}`}>
              <input type="checkbox" id="terms-baja" checked={form.terms} onChange={e => set('terms', e.target.checked)} />
              <label htmlFor="terms-baja">
                Declaro que los datos ingresados son correctos y solicito la baja de la póliza indicada, en ejercicio de los derechos que me confiere la Ley N° 24.240.
              </label>
            </div>
            {errors.terms && <span className="form-error">{errors.terms}</span>}
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
              {loading ? 'Enviando...' : <> Enviar solicitud de baja <svg className="icon"><use href="#i-arrow" /></svg></>}
            </button>
            {sent && (
              <p style={{ marginTop: '14px', padding: '12px', background: 'rgba(0,192,127,0.12)', color: 'var(--success)', borderRadius: '8px', fontSize: '14px', fontWeight: '600', textAlign: 'center' }}>
                ¡Solicitud enviada! Nos contactamos en las próximas 72hs.
              </p>
            )}
            {error && (
              <p style={{ marginTop: '14px', padding: '12px', background: 'rgba(220,53,69,0.1)', color: 'var(--error)', borderRadius: '8px', fontSize: '14px', fontWeight: '600', textAlign: 'center' }}>
                {error}
              </p>
            )}
          </form>
        </div>
      </section>

      <ContactCard
        title="Consultas · Baja de póliza"
        subtitle="Si tenés dudas antes de solicitar la baja, contactanos directamente."
        links={[
          { label: 'comercial@gestionseguros.com.ar', href: 'mailto:comercial@gestionseguros.com.ar', icon: 'i-mail' },
        ]}
      />
    </>
  )
}
