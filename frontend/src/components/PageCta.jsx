import { Link } from 'react-router-dom'

export default function PageCta({
  title = '¿Querés hablar con nuestro equipo?',
  subtitle = 'Estamos para ayudarte en lo que necesites.',
  btnText = 'Contactar ahora',
  btnTo = '/contacto'
}) {
  return (
    <section className="gs-page-cta">
      <div className="gs-page-cta-inner">
        <div className="gs-page-cta-copy">
          <b>{title}</b>
          <span>{subtitle}</span>
        </div>
        <Link to={btnTo} className="btn btn-accent">
          {btnText} <svg className="icon" style={{ width: '16px' }}><use href="#i-arrow" /></svg>
        </Link>
      </div>
    </section>
  )
}
