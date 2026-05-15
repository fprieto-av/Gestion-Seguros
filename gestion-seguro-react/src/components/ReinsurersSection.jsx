import reasegPanelImg from '../assets/img/reaseguradoresB.png'

export default function ReinsurersSection() {
  return (
    <section className="section reaseg" id="panel-reaseguradores" aria-labelledby="reaseg-heading">
      <div className="section-head reveal">
        <span className="section-label">
          <svg className="icon" style={{ width: '14px' }} aria-hidden="true"><use href="#i-globe" /></svg>
          Respaldo internacional
        </span>
        <h2 id="reaseg-heading">
          Reaseguradores que <span className="gradient-text">confían en nosotros</span>
        </h2>
        <p>Respaldo global, regional y local para cada línea de negocio.</p>
      </div>

      <div className="reaseg-panel reveal delay-1">
        <figure className="reaseg-figure">
          <img
            src={reasegPanelImg}
            alt="Panel de reaseguradores: Global Europa, Regional Latam y Local Argentina"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  )
}
