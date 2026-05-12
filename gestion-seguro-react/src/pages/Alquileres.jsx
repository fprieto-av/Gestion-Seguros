import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import BrandStrip from '../components/BrandStrip'
import ContactCard from '../components/ContactCard'
import PageCta from '../components/PageCta'
import '../assets/css/alquileres.css'
import alquileresBg from '../assets/img/alquileres.png'

const formatMoney = n => '$ ' + Math.round(n).toLocaleString('es-AR')
const toNumber = v => Number(String(v || '').replace(/[^0-9]/g, '')) || 0

const calcularPrima = (alquiler, expensas, meses, amb) => {
  let prima = alquiler * 0.036 + expensas * 0.012
  if (meses === 12) prima *= 1.05
  if (meses === 36) prima *= 0.94
  if (amb >= 4) prima *= 1.06
  if (amb === 1) prima *= 0.96
  return prima
}

export default function Alquileres() {
  useEffect(() => { document.title = 'Alquileres | Gestión Seguros' }, [])
  useReveal()

  const [ambientes, setAmbientes] = useState(2)
  const [valorAlquiler, setValorAlquiler] = useState('$ 300.000')
  const [valorExpensas, setValorExpensas] = useState('$ 90.000')
  const [duracion, setDuracion] = useState('24')
  const [provincia, setProvincia] = useState('')
  const [email, setEmail] = useState('')
  const [codigoArea, setCodigoArea] = useState('')
  const [telefono, setTelefono] = useState('')
  const [error, setError] = useState('')
  const [showContactLink, setShowContactLink] = useState(false)
  const [contactHref, setContactHref] = useState('/contacto')

  const alquiler = toNumber(valorAlquiler)
  const expensas = toNumber(valorExpensas)
  const meses = Number(duracion) || 0
  const primaPreview = alquiler && expensas && meses && ambientes
    ? calcularPrima(alquiler, expensas, meses, ambientes)
    : null

  const handleMoneyInput = (val, setter) => {
    const raw = toNumber(val)
    setter(raw ? formatMoney(raw) : '')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setShowContactLink(false)
    if (!ambientes) return setError('Seleccioná la cantidad de ambientes.')
    if (!alquiler || !expensas) return setError('Completá valor de alquiler y expensas.')
    if (!meses) return setError('Seleccioná la duración del contrato.')
    if (!provincia) return setError('Seleccioná una provincia.')
    if (!/\S+@\S+\.\S+/.test(email)) return setError('Ingresá un e-mail válido.')
    if (!codigoArea || !telefono) return setError('Completá código de área y teléfono.')
    const href = `/contacto?producto=alquileres&alquiler=${alquiler}&expensas=${expensas}&duracion=${meses}&ambientes=${ambientes}&provincia=${encodeURIComponent(provincia)}`
    setContactHref(href)
    setShowContactLink(true)
  }

  return (
    <>
      <header className="page-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(14,23,48,0.88) 0%, rgba(27,79,174,0.7) 100%), url(${alquileresBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero-inner">
          <nav className="breadcrumb"><Link to="/">Home</Link> / <span>Alquileres</span></nav>
          <span className="section-label dark reveal"><svg className="icon" style={{ width: '14px' }}><use href="#i-award" /></svg>Alquileres</span>
          <h1>Garantías de <em>Alquileres</em></h1>
          <p className="lead">Una alternativa moderna y segura para reemplazar la garantía propietaria tradicional. Protegemos al propietario y simplificamos el acceso al inquilino.</p>
        </div>
      </header>

      <BrandStrip />

      {/* INTRO + JUMP */}
      <section className="section alq-pre-sim-section">
        <div className="detail-grid">
          <article className="detail-main detail-main--accent-titles">
            <h2 className="detail-h2-clean">¿Qué cubre nuestra garantía?</h2>
            <ul>
              <li>Alquileres, expensas y servicios</li>
              <li>Ocupación indebida</li>
              <li>Asesoramiento legal con desalojo incluido</li>
              <li>Ajustes automáticos del contrato</li>
              <li>Depósito en garantía (opcional)</li>
            </ul>

            <h2>Tipos de garantías</h2>
            <p><strong className="alq-type-title">Garantía de alquiler de vivienda:</strong> protege al propietario frente al incumplimiento del pago del alquiler, expensas, servicios y demás obligaciones contractuales.</p>
            <p><strong className="alq-type-title">Garantía de alquiler comercial:</strong> orientada a oficinas, locales, depósitos y naves industriales para asegurar el cumplimiento de las obligaciones del inquilino.</p>

            <h2>Requisitos</h2>
            <ul>
              <li>No tener antecedentes financieros negativos.</li>
              <li>Ingresos demostrables: últimos 3 recibos de sueldo, monotributo o declaración de ganancias.</li>
              <li>Que el alquiler + expensas no supere el 50% de los ingresos (si lo supera, se puede presentar un garante).</li>
            </ul>
          </article>

          <aside className="detail-side alq-intro-side">
            <div className="alq-sim-title">
              <h3>Simulador de Alquileres</h3>
              <p>Conocé en segundos una referencia de prima mensual y total estimado.</p>
            </div>
            <div className="alq-jump-card">
              <p>Completá un formulario corto y obtené al instante un cálculo orientativo.</p>
              <a href="#simulador-alquileres" className="btn btn-primary">Ir al simulador <svg className="icon"><use href="#i-arrow" /></svg></a>
            </div>
          </aside>
        </div>
      </section>

      {/* PROGRAMA GARANTÍA + FÁCIL */}
      <section className="section alq-programa-section">
        <div className="alq-programa-wrap">
          <span className="section-label alq-programa-badge"><svg className="icon" style={{ width: '14px' }}><use href="#i-award" /></svg>Programa especial</span>
          <div className="alq-programa-card">
            <h2 className="alq-section-title alq-section-title--programa">Programa "<span className="alq-programa-accent">Garantía + Fácil</span>" – CABA</h2>
            <div className="alq-programa-main">
              <p>En Gestión Seguros somos parte del programa <strong>Garantía Más Fácil</strong> del Gobierno de la Ciudad de Buenos Aires, junto al Instituto de la Vivienda.</p>
              <p>Si alquilás en CABA, podés acceder a tu garantía con hasta un <strong>70% de descuento</strong>.</p>
            </div>
            <div className="alq-programa-columns">
              <div>
                <h3>¿Cómo acceder?</h3>
                <ul>
                  <li>Primero debés inscribirte en la web del IVC.</li>
                  <li>Luego, al solicitar tu póliza en Gestión Seguros, indicá que sos beneficiario del programa.</li>
                </ul>
                <p className="alq-programa-info-link"><strong>Más info e inscripción:</strong> <a className="alq-external-link" href="https://vivienda.buenosaires.gob.ar/garantia#top" target="_blank" rel="noopener">vivienda.buenosaires.gob.ar/garantia#top</a></p>
              </div>
              <div>
                <h3>Para postularte, necesitás</h3>
                <ul>
                  <li>Ser mayor de 18 años.</li>
                  <li>Tener ingresos familiares de hasta 7 SMVM.</li>
                  <li>No registrar antecedentes financieros negativos.</li>
                  <li>Contar con DNI argentino.</li>
                  <li>Destino habitacional y propiedad ubicada en CABA.</li>
                </ul>
              </div>
            </div>
            <p><strong>Referencia SMVM:</strong> <a className="alq-external-link" href="https://www.argentina.gob.ar/trabajo/consejodelsalario" target="_blank" rel="noopener">argentina.gob.ar/trabajo/consejodelsalario</a></p>
          </div>
        </div>
      </section>

      {/* SIMULADOR */}
      <section className="section" id="simulador-alquileres">
        <div className="section-head">
          <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-award" /></svg>Simulador</span>
          <h2 className="alq-section-title alq-section-title--sim">Simulador de <span className="alq-sim-highlight">Alquileres</span></h2>
          <p>Completá estos datos y obtené una referencia inicial para tu garantía de alquiler.</p>
        </div>
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <form className="alq-card" onSubmit={handleSubmit}>
            <h3>Simulá tu seguro de caución</h3>

            <div className="alq-step alq-span-2">
              <label>¿Cuántos ambientes tendrá tu próximo hogar?</label>
              <div className="alq-opts">
                {[1, 2, 3, 4, 5].map(n => (
                  <button key={n} type="button" className={ambientes === n ? 'active' : ''} onClick={() => setAmbientes(n)}>
                    {n === 5 ? '5+' : n}
                  </button>
                ))}
              </div>
            </div>

            <div className="alq-grid">
              <div className="alq-step">
                <label>Valor mensual del alquiler</label>
                <input type="text" value={valorAlquiler} onChange={e => setValorAlquiler(e.target.value)} onBlur={e => handleMoneyInput(e.target.value, setValorAlquiler)} placeholder="$ 300.000" required />
              </div>
              <div className="alq-step">
                <label>Valor mensual de las expensas</label>
                <input type="text" value={valorExpensas} onChange={e => setValorExpensas(e.target.value)} onBlur={e => handleMoneyInput(e.target.value, setValorExpensas)} placeholder="$ 90.000" required />
              </div>
              <div className="alq-step">
                <label>Duración del contrato</label>
                <select value={duracion} onChange={e => setDuracion(e.target.value)} required>
                  <option value="">Seleccione una opción</option>
                  <option value="12">12 meses</option>
                  <option value="24">24 meses</option>
                  <option value="36">36 meses</option>
                </select>
              </div>
              <div className="alq-step">
                <label>Provincia</label>
                <select value={provincia} onChange={e => setProvincia(e.target.value)} required>
                  <option value="">Seleccione una provincia</option>
                  <option value="Buenos Aires">Buenos Aires</option>
                  <option value="CABA">CABA</option>
                  <option value="Córdoba">Córdoba</option>
                  <option value="Santa Fe">Santa Fe</option>
                </select>
              </div>
              <div className="alq-step">
                <label>E-mail</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="juan@email.com" required />
              </div>
              <div className="alq-inline">
                <div className="alq-step">
                  <label>Código de área</label>
                  <input type="text" value={codigoArea} onChange={e => setCodigoArea(e.target.value)} placeholder="011" required />
                </div>
                <div className="alq-step">
                  <label>Teléfono</label>
                  <input type="text" value={telefono} onChange={e => setTelefono(e.target.value)} placeholder="12345678" required />
                </div>
              </div>
            </div>

            <button className="alq-btn" type="submit">Simular</button>
            <div className="alq-note">*Datos obligatorios</div>

            {error && <div className="alq-error">{error}</div>}

            {primaPreview && (
              <div className="alq-result">
                Prima mensual estimada: <strong>{formatMoney(primaPreview)}</strong><br />
                Total estimado del contrato ({meses} meses): <strong>{formatMoney(primaPreview * meses)}</strong>
              </div>
            )}

            {showContactLink && (
              <Link to={contactHref} className="alq-contact-link">
                Solicitar cotización <svg className="icon" style={{ width: '14px', verticalAlign: 'middle' }}><use href="#i-arrow" /></svg>
              </Link>
            )}
          </form>
        </div>
      </section>

      <ContactCard
        title="Contacto directo · Alquileres"
        subtitle="Canal rápido para consultas y cotizaciones de garantías de alquiler."
        links={[{ label: 'caucion@gestionseguros.com.ar', href: 'mailto:caucion@gestionseguros.com.ar', icon: 'i-mail' }]}
      />
      <PageCta
        title="¿Querés avanzar con tu garantía?"
        subtitle="Recibí asistencia personalizada para tu alquiler."
        btnText="Contactar ahora"
      />
    </>
  )
}
