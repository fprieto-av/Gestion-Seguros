import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import ContactCard from '../components/ContactCard'
import PageCta from '../components/PageCta'
import BrandStrip from '../components/BrandStrip'
import bannerPersonas from '../assets/img/banner-personas.jpg'
import '../assets/css/detail-index.css'

export default function Personas() {
  useEffect(() => { document.title = 'Seguros de Personas · Vida, Accidentes Personales y Sepelio | Gestión Seguros' }, [])
  useReveal()

  return (
    <>
      <header className="page-hero page-hero--personas" style={{ backgroundImage: `linear-gradient(135deg, rgba(27,79,174,0.93) 0%, rgba(0,192,127,0.4) 100%), url(${bannerPersonas})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-hero-inner">
          <nav className="breadcrumb"><Link to="/">Home</Link> / <span>Personas</span></nav>
          <span className="section-label dark reveal"><svg className="icon" style={{ width: '14px' }}><use href="#i-heart" /></svg>Seguros de Personas</span>
          <h1 className="reveal delay-1">Seguros de <em>Personas</em></h1>
          <p className="lead reveal delay-2">En Gestión Seguros entendemos que proteger a las personas es tan importante como proteger los negocios.<br />Ofrecemos soluciones de seguros de vida, accidentes personales y sepelio, con información detallada en cada sección.</p>
          <div className="hero-ctas reveal delay-3" style={{ marginTop: '30px' }}>
            <a href="mailto:personas@gestionseguros.com.ar" className="btn btn-accent btn-lg"><svg className="icon"><use href="#i-mail" /></svg> personas@gestionseguros.com.ar</a>
            <a href="#productos" className="btn btn-ghost btn-lg">Ver coberturas</a>
          </div>
        </div>
      </header>

      <BrandStrip />

      <section className="section" id="productos">
        <div className="detail-grid">
          <article className="detail-main detail-main--accent-titles">

            <nav className="detail-index">
              <span className="detail-index-title">En esta página</span>
              <ul className="detail-index-list">
                <li><a href="#vida">Seguros de Vida</a></li>
                <li><a href="#accidentes">Accidentes Personales</a></li>
                <li><a href="#sepelio">Sepelio</a></li>
              </ul>
            </nav>

            <div id="vida">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-heart" /></svg>Seguros de Vida</span>
              <h2>Seguros de Vida</h2>
              <p>En Gestión Seguros entendemos que proteger a las personas es tan importante como proteger los negocios.<br />Por eso, ofrecemos soluciones de seguros de vida diseñadas para brindar respaldo económico y tranquilidad, tanto a nivel individual como para empresas.<br />Nuestros seguros permiten acompañar a las familias y equipos de trabajo en momentos clave, asegurando estabilidad financiera ante situaciones imprevistas.</p>
              <h3>Seguros de Vida Colectivo</h3>
              <ol className="pdf-list">
                <li><strong>Seguro de Vida Modulado:</strong> Una solución pensada para brindar respaldo económico a la familia ante el fallecimiento del asegurado, protegiendo su estabilidad en momentos clave.</li>
                <li><strong>Consumo Garantizado:</strong> Garantiza la continuidad de servicios esenciales para el grupo familiar por un período determinado ante el fallecimiento del titular. Al tratarse de un seguro grupal, ofrece costos accesibles y una gestión simple. Está especialmente pensado para mutuales, sindicatos, clubes y otras instituciones, protegiendo a usuarios de servicios como telefonía, cable, luz y gas.</li>
                <li><strong>Continuidad Escolar:</strong> Brinda la tranquilidad de asegurar la continuidad educativa de los hijos ante el fallecimiento del responsable del pago, permitiéndoles finalizar sus estudios en el establecimiento elegido.</li>
                <li><strong>Convenio Mercantil:</strong> El Convenio Colectivo de Trabajo N° 130/75 establece la obligatoriedad de contratar un Seguro de Vida, el cual es independiente de cualquier otra cobertura o beneficio vigente.</li>
                <li><strong>Ley de Contrato de Trabajo:</strong> La normativa vigente exige a los empleadores garantizar una indemnización ante el fallecimiento o incapacidad laboral del empleado, haciendo imprescindible contar con una cobertura que permita cumplir con esta obligación de forma ágil y segura.</li>
                <li><strong>Múltiplo de Sueldo:</strong> Una cobertura diseñada para acompañar la política de beneficios de la empresa, brindando protección al empleado en función de su salario y contribuyendo a la atracción, retención y fidelización del talento.</li>
                <li><strong>Saldo Deudor:</strong> Cobertura diseñada para entidades que otorgan financiamiento, protegiendo tanto a la empresa como a sus clientes ante el fallecimiento del deudor. Aplica a operaciones como créditos hipotecarios, préstamos personales, tarjetas de crédito, prendas, descubiertos en cuenta corriente, entre otros. En caso de fallecimiento del asegurado, la deuda queda cancelada, garantizando el recupero para la entidad y liberando a la familia de cualquier obligación pendiente.</li>
                <li><strong>Seguro de Vida Obligatorio (Decreto 1567/74):</strong> Cobertura obligatoria para todos los trabajadores en relación de dependencia, independientemente de la actividad que desarrollen, y adicional a cualquier otro beneficio, seguro o indemnización. Su contratación se realiza mediante la presentación de la nómina actualizada de empleados al SUSS, y se mantiene automáticamente actualizada en función de la información declarada por la empresa ante la AFIP.</li>
                <li><strong>Trabajadores Rurales:</strong> Cobertura diseñada para proteger a los trabajadores rurales, permitiendo al empleador cumplir con las obligaciones establecidas por la Ley N° 16.600.</li>
                <li><strong>Personal Doméstico:</strong> Una cobertura que permite cumplir con la normativa vigente para trabajadores de casas particulares, garantizando una gestión simple y actualización automática en base a la información declarada.</li>
              </ol>
            </div>

            <div id="accidentes">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-activity" /></svg>Seguros de Accidentes Personales</span>
              <h2>Seguros de Accidentes Personales</h2>
              <p>En Gestión Seguros ofrecemos coberturas de accidentes personales pensadas para brindar protección económica inmediata frente a imprevistos, tanto en el ámbito laboral como en la vida cotidiana.</p>
              <p>Este seguro cubre las consecuencias de un accidente, acompañando al asegurado y a su familia en momentos donde la rapidez de respuesta es clave.</p>
              <p>Es una solución flexible, ideal tanto para personas individuales como para empresas que buscan proteger a sus equipos.</p>
              <h3>Coberturas</h3>
              <ol className="pdf-list">
                <li><strong>Escolar:</strong> Una cobertura pensada para proteger a los alumnos y brindar tranquilidad a las instituciones educativas ante posibles accidentes durante la actividad escolar.</li>
                <li><strong>Deportivo:</strong> Una solución pensada para acompañar a quienes practican deporte, cubriendo los accidentes durante entrenamientos y competencias, en cualquier momento y lugar. Para que la única preocupación sea disfrutar de la actividad.</li>
                <li><strong>Colonia de Vacaciones:</strong> Una Cobertura diseñada para actividades recreativas, que protege a niños y profesores ante posibles accidentes durante el desarrollo de colonias de vacaciones. Brinda respaldo a la organización y mayor tranquilidad a las familias, acompañando cada actividad.</li>
                <li><strong>Eventos:</strong> Cobertura diseñada para acompañar la organización de eventos, brindando protección a todas las personas involucradas, tanto en la etapa previa como durante su desarrollo. Incluye cobertura para organizadores, personal y asistentes, garantizando respaldo ante posibles accidentes.</li>
                <li><strong>Prestacional:</strong> Una cobertura que se encarga de la gestión médica ante un accidente, brindando acceso a una red de prestadores en todo el país para una atención rápida y organizada.</li>
                <li><strong>Personal de Salud:</strong> Cobertura diseñada para todos los trabajadores del sector de salud que incluye las heridas cortopunzantes.</li>
                <li><strong>Ocupaciones y Oficios Varios:</strong> Cobertura diseñada para proteger a trabajadores independientes ante accidentes personales, brindando respaldo al tomador frente a las responsabilidades derivadas de su contratación. Permite contar con una solución ágil y adecuada para distintas actividades y oficios.</li>
                <li><strong>Deportes Extremos:</strong> Una solución pensada para quienes practican deporte de manera amateur, brindando protección tanto durante la actividad como en los traslados.</li>
                <li><strong>Trabajos en altura:</strong> Cobertura diseñada para trabajos de más de 8 metros de altura hasta los 100 metros.</li>
              </ol>
            </div>

            <div id="sepelio">
              <span className="section-label"><svg className="icon" style={{ width: '14px' }}><use href="#i-coffin" /></svg>Seguro de Sepelio</span>
              <h2>Seguro de Sepelio</h2>
              <p>En Gestión Seguros brindamos una solución pensada para acompañar a las familias en momentos difíciles, ofreciendo respaldo y gestión rápida ante el fallecimiento del asegurado, tanto dentro como fuera del país.</p>
              <p>Puede contratarse de forma individual o colectiva, con posibilidad de incluir al grupo familiar.</p>
              <h3>Modalidades</h3>
              <ul>
                <li><strong>Prestacional:</strong> un prestador especializado se encarga del servicio, con atención 24 hs.</li>
                <li><strong>Reintegro de gastos:</strong> los familiares contratan el servicio y luego reciben el reintegro según la póliza.</li>
              </ul>
              <p><strong>Cobertura:</strong> fallecimiento por cualquier causa.</p>
              <p><strong>Para cotizar:</strong> se requiere edad, ubicación geográfica y suma asegurada (en caso de modalidad reintegro).</p>
              <h3>Tipos</h3>
              <ol className="pdf-list">
                <li><strong>Sepelio por Reintegro:</strong> Una solución que brinda respaldo económico ante el fallecimiento del asegurado, permitiendo a los familiares organizar el servicio de acuerdo a sus necesidades. Los gastos realizados son reintegrados posteriormente, hasta el monto establecido en la póliza. Puede contratarse de forma individual o colectiva, incluyendo al grupo familiar.</li>
                <li><strong>Sepelio Prestacional:</strong> Una cobertura pensada para brindar tranquilidad en los momentos más difíciles, gestionando de forma integral el servicio a través de prestadores especializados. Los familiares cuentan con atención inmediata, disponible las 24 horas, los 365 días del año, con acompañamiento en cada instancia. Disponible en modalidad individual o colectiva, con posibilidad de incluir al grupo familiar.</li>
              </ol>
            </div>

          </article>

          <aside className="detail-side">
            <div className="side-card">
              <h4>Cotización</h4>
              <p>Contactá a nuestro equipo para cotizar según edad, ubicación geográfica y cobertura requerida.</p>
              <Link to="/contacto" className="btn btn-primary">Solicitar cotización <svg className="icon"><use href="#i-arrow" /></svg></Link>
              <a href="mailto:personas@gestionseguros.com.ar" className="btn btn-ghost">Escribir por email</a>
              <div className="side-contact">
                <b>Contacto directo</b>
                <a href="mailto:personas@gestionseguros.com.ar">personas@gestionseguros.com.ar</a>
                <a href="tel:+541152544009">(+54) 5254-4009</a>
                <a href="tel:08003451340">0800-345-1340</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ContactCard
        title="Contacto directo · Personas"
        subtitle="Canal rápido para cotizar vida, accidentes y sepelio."
        links={[{ label: 'personas@gestionseguros.com.ar', href: 'mailto:personas@gestionseguros.com.ar', icon: 'i-mail' }]}
      />
      <PageCta
        title="¿Querés cotizar un seguro de personas?"
        subtitle="Nuestro equipo te asesora según tu edad, ubicación y cobertura requerida."
        btnText="Solicitar cotización"
      />
    </>
  )
}
