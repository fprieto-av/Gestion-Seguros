import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import BrandStrip from '../components/BrandStrip'
import ContactCard from '../components/ContactCard'
import '../assets/css/productores.css'
import bannerBaja from '../assets/img/bajapoliza.png'

export default function BajaPoliza() {
  useEffect(() => { document.title = 'Baja de Póliza | Gestión Seguros' }, [])
  useReveal()

  return (
    <>
      <header
        className="page-hero page-hero--pas-wide"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(14,23,48,0.88) 0%, rgba(27,79,174,0.7) 100%), url(${bannerBaja})`,
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
             En Gestión Seguros trabajamos para acompañarte a vos, tu familia y tu actividad con coberturas pensadas para brindarte respaldo y tranquilidad ante cualquier imprevisto. 
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
            action="https://formsubmit.co/comercial@gestionseguros.com.ar"
            method="POST"
            encType="multipart/form-data"
          >
            <input type="hidden" name="_subject" value="Solicitud de baja de póliza" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <h4 style={{ margin: '16px 0 12px', color: 'var(--primary)' }}>Parte 1 · Datos personales</h4>
            <div className="form-grid form-grid--4col">
              <div className="form-field">
                <label>Nombre y Apellido <span className="req">*</span></label>
                <input type="text" name="nombre_apellido" required placeholder="Juan García" />
              </div>
              <div className="form-field">
                <label>DNI / CUIT <span className="req">*</span></label>
                <input type="text" name="dni_cuit" required placeholder="Sin puntos" />
              </div>
              <div className="form-field">
                <label>Email <span className="req">*</span></label>
                <input type="email" name="email" required placeholder="tu@email.com" />
              </div>
              <div className="form-field">
                <label>Teléfono <span className="req">*</span></label>
                <input type="tel" name="telefono" required placeholder="11 1234-5678" />
              </div>
            </div>

            <h4 style={{ margin: '20px 0 12px', color: 'var(--primary)' }}>Parte 2 · Datos de la póliza</h4>
            <div className="form-grid form-grid--3col">
              <div className="form-field">
                <label>Tipo de seguro <span className="req">*</span></label>
                <select name="tipo_seguro" required defaultValue="">
                  <option value="" disabled>Seleccionar...</option>
                  <option value="Caución">Caución</option>
                  <option value="Garantía de Alquiler">Garantía de Alquiler</option>
                  <option value="Accidentes Personales">Accidentes Personales</option>
                  <option value="Seguro de Vida">Seguro de Vida</option>
                  <option value="Sepelio">Sepelio</option>
                  <option value="Responsabilidad Civil">Responsabilidad Civil</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div className="form-field">
                <label>Número de póliza <span className="req">*</span></label>
                <input type="text" name="numero_poliza" required placeholder="Ej: 00012345" />
              </div>
              <div className="form-field">
                <label>Fecha de contratación <span className="req">*</span></label>
                <input type="date" name="fecha_contratacion" required />
              </div>
              <div className="form-field full">
                <label>Motivo de la baja <span style={{ color: 'var(--gray)', fontWeight: 400 }}>(opcional)</span></label>
                <textarea name="motivo" rows="3" placeholder="Podés contarnos el motivo de tu solicitud" />
              </div>
            </div>

            <div className="form-check">
              <input type="checkbox" id="terms-baja" required />
              <label htmlFor="terms-baja">
                Declaro que los datos ingresados son correctos y solicito la baja de la póliza indicada, en ejercicio de los derechos que me confiere la Ley N° 24.240.
              </label>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Enviar solicitud de baja <svg className="icon"><use href="#i-arrow" /></svg>
            </button>
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
