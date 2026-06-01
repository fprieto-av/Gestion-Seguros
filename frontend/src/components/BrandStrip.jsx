export default function BrandStrip({ text = 'Respaldo institucional, respuesta ágil y atención humana en todo el país' }) {
  return (
    <section className="gs-brand-strip">
      <div className="gs-brand-strip-inner">
        <b>Gestión Seguros</b>
        <span>{text}</span>
      </div>
    </section>
  )
}
