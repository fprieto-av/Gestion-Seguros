import reasegPanelImg from '../assets/img/reaseguradores.png'

export default function ReinsurersSection() {
  return (
    <section className="section reaseg" id="panel-reaseguradores" aria-label="Reaseguradoras que confían en nosotros">
      <div className="reaseg-panel reveal">
        <figure className="reaseg-figure">
          <img
            src={reasegPanelImg}
            alt="Reaseguradoras que confían en nosotros: Hamilton, ACR Argentina, Reaseguradora Patria, AXA, IRB Brasil RE, Reunión RE, Hannover RE, Federación Patronal RE, Nación Reaseguros, RASA, Federación Patronal Seguros"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  )
}
