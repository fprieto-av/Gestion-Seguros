export default function ContactCard({ title, subtitle, links = [] }) {
  return (
    <div className="gs-unit-card-wrap">
      <div className="gs-unit-card">
        <div>
          <h4>{title}</h4>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="gs-unit-card-links">
          {links.map((link, i) => (
            <a key={i} href={link.href}>
              {link.icon && <svg className="icon" style={{ width: '15px' }}><use href={`#${link.icon}`} /></svg>}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
