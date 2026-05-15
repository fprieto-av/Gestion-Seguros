import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import BrandStrip from '../components/BrandStrip'
import contactoBg from '../assets/img/contacto.png'

const DESTINOS = {
  caucion: 'caucion@gestionseguros.com.ar',
  personas: 'personas@gestionseguros.com.ar',
  rc: 'rc@gestionseguros.com.ar',
  pas: 'comercial@gestionseguros.com.ar',
}

// Regex reutilizables — fácil de ajustar cuando haya backend
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TEL_RE = /^[\d\s()+-]{6,20}$/

export default function Contacto() {
  useEffect(() => { document.title = 'Contacto | Gestión Seguros' }, [])
  useReveal()

  const [searchParams] = useSearchParams()
  const qProducto = searchParams.get('producto') || ''
  const qAlquiler = searchParams.get('alquiler')
  const qExpensas = searchParams.get('expensas')
  const qDuracion = searchParams.get('duracion')
  const qAmbientes = searchParams.get('ambientes')
  const qProvincia = searchParams.get('provincia')

  const alqMsg = [
    qAlquiler || qExpensas ? 'Simulación de Alquileres:' : '',
    qAlquiler ? `- Alquiler: $ ${Number(qAlquiler).toLocaleString('es-AR')}` : '',
    qExpensas ? `- Expensas: $ ${Number(qExpensas).toLocaleString('es-AR')}` : '',
    qDuracion ? `- Duración: ${qDuracion} meses` : '',
    qAmbientes ? `- Ambientes: ${qAmbientes}` : '',
    qProvincia ? `- Provincia: ${qProvincia}` : '',
  ].filter(Boolean).join('\n')

  const [form, setForm] = useState({
    nombre: '', email: '', telefono: '',
    producto: qProducto,
    mensaje: alqMsg,
    terms: false,
  })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  // Actualiza el campo y borra su error en tiempo real
  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => { const n = { ...e }; delete n[k]; return n })
  }

  const validate = () => {
    const errs = {}
    if (!form.nombre.trim())           errs.nombre   = 'El nombre es obligatorio.'
    if (!form.email.trim())            errs.email    = 'El email es obligatorio.'
    else if (!EMAIL_RE.test(form.email)) errs.email  = 'Ingresá un email válido.'
    if (form.telefono && !TEL_RE.test(form.telefono)) errs.telefono = 'Teléfono inválido.'
    if (!form.producto)                errs.producto = 'Seleccioná un producto.'
    if (!form.terms)                   errs.terms    = 'Debés aceptar la política de privacidad.'
    return errs
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    const destino = DESTINOS[form.producto] || 'info@gestionseguros.com.ar'
    const subject = encodeURIComponent(`Consulta ${form.producto || 'web'} · ${form.nombre}`)
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\nTeléfono: ${form.telefono || '-'}\nProducto: ${form.producto || '-'}\n\nMensaje:\n${form.mensaje || '-'}`
    )
    window.location.href = `mailto:${destino}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <>
      <header className="page-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(14,23,48,0.88) 0%, rgba(27,79,174,0.7) 100%), url(${contactoBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero-inner">
          <nav className="breadcrumb"><Link to="/">Home</Link> / <span>Contacto</span></nav>
          <span className="section-label dark reveal"><svg className="icon" style={{ width: '14px' }}><use href="#i-mail" /></svg>Contactanos</span>
          <h1 className="reveal delay-1">Hablemos,<br /><em>escuchamos con atención</em></h1>
          <p className="lead reveal delay-2">Elegí el canal que prefieras. Respondemos rápido, con nombre, apellido y conocimiento del producto.<br />Nada de formularios enterrados en sistemas sin cara.</p>
        </div>
      </header>

      <BrandStrip />

      <section className="section">
        <div className="section-head reveal">
          <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-mail" /></svg>Contacto</span>
          <h2><span className="gradient-text">Contactanos</span></h2>
          <p>Completá el formulario y un asesor se contactará a la brevedad</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h3 style={{ position: 'relative' }}>Estamos disponibles</h3>
            <p style={{ position: 'relative' }}>Tres canales, un solo equipo detrás. Elegí el que más te quede cómodo.</p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="ic"><svg className="icon" style={{ width: '22px' }}><use href="#i-phone" /></svg></div>
                <div>
                  <b>Teléfono</b>
                  <a href="tel:+541152544009">(+54) 5254-4009</a>
                  <a href="tel:08003451340">0800-345-1340 (gratuito)</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="ic"><svg className="icon" style={{ width: '22px' }}><use href="#i-mail" /></svg></div>
                <div>
                  <b>Emails por línea</b>
                  <a href="mailto:info@gestionseguros.com.ar">info@gestionseguros.com.ar</a>
                  <a href="mailto:caucion@gestionseguros.com.ar">caucion@gestionseguros.com.ar</a>
                  <a href="mailto:personas@gestionseguros.com.ar">personas@gestionseguros.com.ar</a>
                  <a href="mailto:rc@gestionseguros.com.ar">rc@gestionseguros.com.ar</a>
                  <a href="mailto:comercial@gestionseguros.com.ar">comercial@gestionseguros.com.ar</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="ic"><svg className="icon" style={{ width: '22px' }}><use href="#i-clock" /></svg></div>
                <div><b>Atención</b><span>Lunes a Viernes · 9 a 18hs</span></div>
              </div>
              <div className="contact-method">
                <div className="ic"><svg className="icon" style={{ width: '22px' }}><use href="#i-pin" /></svg></div>
                <div><b>Oficina</b><span>Buenos Aires, Argentina</span></div>
              </div>
              <div className="contact-method">
                <div className="ic"><svg className="icon" style={{ width: '22px' }}><use href="#i-shield" /></svg></div>
                <div>
                  <b>Denunciar siniestro</b>
                  <a href="mailto:comercial@gestionseguros.com.ar">comercial@gestionseguros.com.ar</a>
                  <span>Dentro de las 72hs del hecho</span>
                </div>
              </div>
            </div>
          </div>

          {/* noValidate desactiva la validación nativa del browser — la manejamos nosotros */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h3 id="form">Dejanos tu consulta</h3>
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

              <div className={`form-field${errors.producto ? ' form-field--error' : ''}`}>
                <label>Producto de interés <span className="req">*</span></label>
                <select name="producto" value={form.producto} onChange={e => set('producto', e.target.value)}>
                  <option value="">Seleccionar...</option>
                  <option value="caucion">Caución</option>
                  <option value="personas">Personas (Vida, AP, Sepelio)</option>
                  <option value="rc">Responsabilidad Civil</option>
                  <option value="alquileres">Alquileres</option>
                  <option value="pas">Sumarme como PAS</option>
                  <option value="otro">Otra consulta</option>
                </select>
                {errors.producto && <span className="form-error">{errors.producto}</span>}
              </div>

              <div className="form-field full">
                <label>Tu mensaje</label>
                <textarea name="mensaje" rows="5" placeholder="Contanos qué necesitás" value={form.mensaje} onChange={e => set('mensaje', e.target.value)} />
              </div>

            </div>

            <div className={`form-check${errors.terms ? ' form-field--error' : ''}`}>
              <input type="checkbox" id="terms" checked={form.terms} onChange={e => set('terms', e.target.checked)} />
              <label htmlFor="terms">Acepto la política de privacidad y el tratamiento de mis datos personales para responder a mi consulta.</label>
            </div>
            {errors.terms && <span className="form-error">{errors.terms}</span>}

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Enviar consulta <svg className="icon"><use href="#i-arrow" /></svg>
            </button>
            {sent && (
              <p style={{ marginTop: '14px', padding: '12px', background: 'rgba(0,192,127,0.12)', color: 'var(--success)', borderRadius: '8px', fontSize: '14px', fontWeight: '600', textAlign: 'center' }}>
                ¡Consulta enviada! Te contactamos en la brevedad.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
