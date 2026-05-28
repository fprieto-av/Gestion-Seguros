import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import ContactCard from '../components/ContactCard'
import PageCta from '../components/PageCta'
import BrandStrip from '../components/BrandStrip'
import bannerCaucion from '../assets/img/banners-web/caucion.jpg'
import { formularios } from '../assets/formulariosUrls'
import '../assets/css/detail-index.css'

export default function Caucion() {
  useEffect(() => { document.title = 'Seguros de Caución · Contractuales, Aduaneras y Judiciales | Gestión Seguros' }, [])
  useReveal()

  return (
    <>
      <header className="page-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(14,23,48,0.45) 0%, rgba(27,79,174,0.30) 100%), url(${bannerCaucion})` }}>
        <div className="page-hero-inner">
          <nav className="breadcrumb"><Link to="/">Home</Link> / <span>Caución</span></nav>
          <span className="section-label dark reveal"><svg className="icon" style={{ width: '14px' }}><use href="#i-doc" /></svg>Seguros de Caución</span>
          <h1 className="reveal delay-1">Seguros de <em>Caución</em></h1>
          <p className="lead reveal delay-2">En Gestión Seguros acompañamos a nuestros clientes con soluciones de caución pensadas para facilitar negocios, respaldar operaciones y generar confianza.<br />Operá sin inmovilizar capital, optimizando tu capacidad financiera y dando mayor solidez frente a clientes, proveedores u organismos públicos.</p>
          <div className="hero-ctas reveal delay-3" style={{ marginTop: '30px' }}>
            <a href="mailto:caucion@gestionseguros.com.ar" className="btn btn-accent btn-lg"><svg className="icon"><use href="#i-mail" /></svg> caucion@gestionseguros.com.ar</a>
            <a href="#tipos" className="btn btn-ghost btn-lg">Ver Coberturas</a>
          </div>
        </div>
      </header>

      <BrandStrip />

      <section className="section" id="tipos">
        <div className="detail-grid">
          <article className="detail-main detail-main--accent-titles">

            <nav className="detail-index">
              <span className="detail-index-title">En esta página</span>
              <ul className="detail-index-list">
                <li><a href="#contractuales">Garantías Contractuales</a></li>
                <li><a href="#aduaneras">Garantías Aduaneras</a></li>
                <li><a href="#otras-garantias">Otras Garantías</a></li>
                <li><a href="#actividad-profesion">Por Actividad o Profesión</a></li>
                <li><a href="#concesion">Garantías de Concesión</a></li>
                <li><a href="#judiciales">Judiciales</a></li>
                <li><a href="#internacionales">Internacionales</a></li>
                <li><a href="#alquileres">Alquileres</a></li>
                <li><a href="#baja-poliza">Baja de Póliza</a></li>
              </ul>
            </nav>

            <div id="contractuales">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-doc" /></svg>Contractuales</span>
              <h2>Garantías Contractuales</h2>
              <p>Son las más utilizadas en el mercado y acompañan a las empresas en todo el proceso de contratación, tanto en el ámbito público como privado.</p>
              <p>En Gestión Seguros trabajamos para que puedas presentarte, adjudicar y ejecutar contratos con respaldo y agilidad. Estas garantías cubren las distintas etapas de un contrato, desde la presentación de la oferta hasta su ejecución y cierre, adaptándose a cada necesidad del negocio:</p>
              <h3>Mantenimiento de oferta</h3>
              <p>Garantiza que el oferente mantendrá su propuesta durante el proceso licitatorio y que, en caso de resultar adjudicado, firmará el contrato dentro de los plazos establecidos.</p>
              <p>Habitualmente, la suma asegurada se ubica entre el 1% y el 5% del monto total del contrato.</p>
              <h3>Ejecución de contrato</h3>
              <p>Cubre el cumplimiento, en tiempo y forma, de todas las obligaciones asumidas por el tomador.</p>
              <h3>Anticipo financiero o por acopio</h3>
              <p>Garantiza el correcto uso de los fondos adelantados al tomador, conforme a lo establecido en el contrato u orden de compra.</p>
              <p>Se libera con la recepción provisoria y a su vez parcialmente a medida que se certifican avances o Entregas.</p>
              <h3>Sustitución de fondo de reparo</h3>
              <p>Permite reemplazar las retenciones que realiza el comitente, garantizando la correcta ejecución de reparaciones ante posibles defectos de obra o de materiales.</p>
              <h3>Garantía de tenencia (uso, reparación o reacondicionamiento)</h3>
              <p>Garantiza la correcta tenencia y devolución de bienes que el asegurado entrega al tomador para su uso, reparación, mantenimiento o reacondicionamiento.</p>
              <h3>Garantía de tenencia de materiales para fabricación y montaje</h3>
              <p>Cubre la tenencia e incorporación de materiales entregados al tomador para la fabricación, construcción o montaje de un bien o proyecto solicitado por el beneficiario.</p>
              <h3>Garantía de certificación de avance de fabricación</h3>
              <p>Garantiza los pagos realizados al tomador en función del avance de fabricación en taller, cubriendo hasta la entrega final del bien.</p>
              <div className="caucion-note">
                <svg className="icon" style={{ width: '16px', flexShrink: 0, marginTop: '2px' }}><use href="#i-shield" /></svg>
                <p><strong>Nuestro foco está en darte rapidez de respuesta, acompañamiento comercial y soluciones a medida para cada operación.</strong> Esto aplica a todas las coberturas contractuales.</p>
              </div>
            </div>

            <div id="aduaneras">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-truck" /></svg>Garantías Aduaneras</span>
              <h2>Garantías Aduaneras</h2>
              <p>En Gestión Seguros sabemos que en comercio exterior el tiempo y la liquidez son clave. Por eso, nuestras garantías aduaneras están pensadas para que puedas operar con agilidad, liberar mercadería sin demoras y optimizar tu flujo de fondos, cumpliendo siempre con las exigencias de la Aduana.</p>
              <p>Te acompañamos en cada operación con soluciones claras, rápidas y adaptadas a tu operatoria.</p>
              <h3>Las principales garantías son</h3>
              <ul>
                <li><strong>Tránsitos terrestres (TRAN):</strong> Garantiza el cumplimiento de las obligaciones vinculadas al traslado de mercadería entre distintas aduanas, respaldando la documentación presentada para su despacho.</li>
                <li><strong>Falta de documentación (FCAE):</strong> Cubre la obligación del importador de presentar la documentación original necesaria para el despacho a plaza de la mercadería.</li>
                <li><strong>Importaciones temporales (IMTE):</strong> Garantiza el pago de los tributos correspondientes en caso de que no se cumpla con la obligación de reexportar la mercadería ingresada temporalmente al país.</li>
                <li><strong>Exportaciones temporales (EXTE):</strong> Busca asegurar el cumplimiento de la obligación de reexportar mercadería importada temporalmente, cubriendo los tributos en caso de incumplimiento.</li>
                <li><strong>Garantía para depósitos temporales / fiscales (DEPO):</strong> Garantiza el cumplimiento de las obligaciones fiscales y aduaneras de mercaderías almacenadas en depósitos fiscales, generales o zonas francas, incluyendo la responsabilidad del depositario.</li>
                <li><strong>Régimen Automotriz (REAU):</strong> Se garantizan tributos cuya exigibilidad podría surgir del no cumplimiento de compromisos comerciales (balanceo de importaciones con exportaciones). Es un tributo por un acuerdo de complementación económica entre Argentina y Brasil.</li>
              </ul>
              <h3>Otras garantías aduaneras específicas</h3>
              <ul>
                <li><strong>Grandes Proyectos de Inversión (GPIN):</strong> Cubre el cumplimiento de las condiciones exigidas para acceder a regímenes especiales de inversión y su correspondiente tratamiento tributario.</li>
                <li><strong>Régimen de Incentivo para Grandes Inversiones (RIGI):</strong> Garantiza derechos de importación, tasas y demás tributos aplicables a mercaderías ingresadas bajo este régimen.</li>
                <li><strong>Sumario contencioso (SUCO):</strong> Resguarda el eventual cobro de multas ante presuntas infracciones aduaneras, permitiendo la libre disponibilidad de la mercadería durante el proceso.</li>
                <li><strong>Importación temporaria de extranjeros no residentes (ITER):</strong> Cubre las importaciones temporarias de bienes pertenecientes a extranjeros con residencia temporaria (mudanzas).</li>
                <li><strong>Envíos en consignación (ECON):</strong> Garantiza la mercadería enviada en consignación hasta la concreción de la venta.</li>
              </ul>
               <div className="caucion-note">
                <svg className="icon" style={{ width: '16px', flexShrink: 0, marginTop: '2px' }}><use href="#i-shield" /></svg>
                <p><strong>Nuestro objetivo es que puedas enfocarte en tu negocio, mientras nosotros te damos el respaldo necesario para operar con tranquilidad.</strong></p>
              </div>
              <p>En Gestión Seguros acompañamos este tipo de operaciones que suelen estar vinculadas a proyectos estratégicos para el país, como:</p>
              <ul>
                <li>Desarrollos Mineros.</li>
                <li>Proyectos de OIL &amp; GAS.</li>
                <li>Energías Renovables (Parques Eólicos y Solares).</li>
                <li>Infraestructura Y Obras de gran envergadura.</li>
              </ul>
              <p>Estas garantías permiten a las empresas acceder a beneficios impositivos y aduaneros, asegurando al mismo tiempo el cumplimiento de todas las condiciones del régimen.</p>
            </div>

            <div id="actividad-profesion">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-briefcase" /></svg>Garantías por Actividad o Profesión</span>
              <h2>Garantías por Actividad o Profesión</h2>
              <p>Respaldan el correcto ejercicio de una actividad cuando existe un organismo de control que exige una garantía para operar.</p>
              <p>La póliza reemplaza los depósitos que deben constituirse ante estos entes, asegurando el cumplimiento de las obligaciones y el buen desempeño de la actividad.</p>
              <p>Algunos ejemplos:</p>
              <ul>
                <li>Directores y socios gerentes de Sociedades Anónimas y SRL</li>
                <li>Martilleros</li>
                <li>Empresas del sistema GNC, hidrocarburos y combustibles líquidos</li>
                <li>Empresas de turismo</li>
                <li>Agencias de lotería</li>
              </ul>
            </div>

            <div id="concesion">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-key" /></svg>Garantías de Concesión</span>
              <h2>Garantías de Concesión</h2>
              <p>Acompañan contratos de concesión, garantizando las distintas obligaciones asumidas frente al concedente.</p>
              <h3>Oferta</h3>
              <p>Garantiza que el oferente mantendrá su propuesta y, en caso de resultar adjudicado, firmará el contrato en tiempo y forma.</p>
              <h3>Pago de canon</h3>
              <p>Cubre el canon impago durante el período de vigencia del contrato de concesión.</p>
              <h3>Cumplimiento de contrato</h3>
              <p>Garantiza el cumplimiento de las demás obligaciones contractuales (de hacer o de dar), excluyendo obligaciones de pago como el canon.</p>
            </div>

            <div id="judiciales">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-gavel" /></svg>Judiciales</span>
              <h2>Garantías Judiciales</h2>
              <p>Son aquellas requeridas en el ámbito judicial, generalmente a pedido de una de las partes, para sustituir o constituir medidas cautelares.</p>
              <p>Permiten cumplir con exigencias del proceso sin inmovilizar fondos, asegurando el cumplimiento de las obligaciones procesales.</p>
              <ul>
                <li><strong>Sustitución de embargo / medida cautelar:</strong> Permite reemplazar una medida cautelar dispuesta por un juez, evitando la afectación directa de bienes o fondos.</li>
                <li><strong>Contracautela judicial:</strong> Garantiza los eventuales daños y perjuicios que pueda generar una medida cautelar solicitada, en caso de resultar improcedente.</li>
              </ul>
            </div>

            <div id="internacionales">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-globe" /></svg>Garantías Internacionales</span>
              <h2>Garantías Internacionales</h2>
              <p>En Gestión Seguros acompañamos a empresas que operan fuera del país, brindando respaldo para contratos internacionales de obra, provisión de bienes y servicios.</p>
              <p>A través de nuestra red de alianzas en Latinoamérica, ofrecemos soluciones de fronting y backing para garantizar el cumplimiento en cada operación.</p>
              <p>Consultá a nuestro equipo comercial.</p>
            </div>

            <div id="alquileres">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-home" /></svg>Alquileres</span>
              <h2>Garantías de Alquiler</h2>
              <p>Una alternativa digital y segura que reemplaza la garantía propietaria tradicional, sin trámites complejos ni avales personales.</p>
              <h3>Garantía de alquiler de vivienda</h3>
              <p>Protege al propietario frente al incumplimiento del pago del alquiler, expensas, servicios y demás obligaciones contractuales.</p>
              <h3>Garantía de alquiler comercial</h3>
              <p>Orientada a oficinas, locales, depósitos y naves industriales para asegurar el cumplimiento de las obligaciones del inquilino en el desarrollo de su actividad comercial.</p>
              <Link to="/alquileres" className="btn-link" style={{ marginTop: '8px' }}>
                Ver más sobre alquileres
              </Link>
            </div>

            <div id="baja-poliza">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-doc" /></svg>Baja de Póliza</span>
              <h2>Baja de Póliza de Caución</h2>
              <p>Si necesitás dar de baja tu póliza de caución o realizar una desafectación parcial, deberás enviar la documentación que acredite el cese del riesgo o el cumplimiento de las obligaciones garantizadas.</p>
              <p>Recordá que la mayoría de las pólizas de caución poseen vigencia abierta, por lo que continuarán generando refacturaciones hasta recibir la notificación formal y la documentación correspondiente.</p>
              <a href={formularios.documentacionBajaPolizaCaucion} target="_blank" rel="noopener" className="btn-link" style={{ marginTop: '8px' }}>
                Accedé acá al instructivo con la documentación requerida
              </a>
              <p style={{ marginTop: '16px' }}>Podés enviar la documentación a: <a href="mailto:comercial@gestionseguros.com.ar" className="pay-mail-link">comercial@gestionseguros.com.ar</a></p>
            </div>

          </article>

          <aside className="detail-side">
            <div className="side-card">
              <h4>Cotización</h4>
              <p>Enviá el pliego o detalles de la operación a nuestro equipo comercial.</p>
              <Link to="/contacto" className="btn btn-primary">Solicitar cotización <svg className="icon"><use href="#i-arrow" /></svg></Link>
              <a href="mailto:caucion@gestionseguros.com.ar" className="btn btn-ghost">Escribir por email</a>
              <div className="side-contact">
                <b>Contacto directo</b>
                <a href="mailto:caucion@gestionseguros.com.ar">caucion@gestionseguros.com.ar</a>
                <a href="tel:+541152544009">(+54) 5254-4009</a>
                <a href="tel:08003451340">0800-345-1340</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ContactCard
        title="Contacto directo · Caución"
        subtitle="Canal rápido para consultas y cotizaciones de caución."
        links={[{ label: 'caucion@gestionseguros.com.ar', href: 'mailto:caucion@gestionseguros.com.ar', icon: 'i-mail' }]}
      />
      <PageCta
        title="¿Necesitás cotizar una caución?"
        subtitle="Envianos el pliego o los detalles y te respondemos a la brevedad."
        btnText="Solicitar cotización"
      />
    </>
  )
}
