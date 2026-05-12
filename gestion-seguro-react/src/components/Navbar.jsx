import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [coberturasOpen, setCoberturasOpen] = useState(false)
  const [gestionOpen, setGestionOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    setCoberturasOpen(false)
    setGestionOpen(false)
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <Link to="/" className="logo">
        <img src="/assets/img/logo.png" alt="Gestión Seguros" />
      </Link>

      <div className={`nav-menu${menuOpen ? ' open' : ''}`} id="navMenu">
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/nosotros" onClick={closeMenu}>Nosotros</NavLink>

        <div className={`has-submenu${coberturasOpen ? ' open' : ''}`}>
          <a href="#productos" onClick={(e) => {
            if (window.innerWidth <= 1280) { e.preventDefault(); setCoberturasOpen(v => !v) }
            else closeMenu()
          }}>Coberturas</a>
          <div className="submenu">
            <div className="submenu-title">Caución</div>
            <NavLink to="/caucion" onClick={closeMenu}><svg className="icon"><use href="#i-key" /></svg> Caución (general)</NavLink>
            <NavLink to="/caucion#contractuales" onClick={closeMenu}><svg className="icon"><use href="#i-doc" /></svg> Garantías Contractuales</NavLink>
            <NavLink to="/caucion#aduaneras" onClick={closeMenu}><svg className="icon"><use href="#i-truck" /></svg> Garantías Aduaneras</NavLink>
            <NavLink to="/caucion#judiciales" onClick={closeMenu}><svg className="icon"><use href="#i-gavel" /></svg> Garantías Judiciales</NavLink>
            <div className="submenu-title">Personas</div>
            <NavLink to="/personas#vida" onClick={closeMenu}><svg className="icon"><use href="#i-heart" /></svg> Vida</NavLink>
            <NavLink to="/personas#accidentes" onClick={closeMenu}><svg className="icon"><use href="#i-activity" /></svg> Accidentes Personales</NavLink>
            <NavLink to="/personas#sepelio" onClick={closeMenu}><svg className="icon"><use href="#i-coffin" /></svg> Sepelio</NavLink>
            <div className="submenu-title">Responsabilidad Civil</div>
            <NavLink to="/responsabilidad-civil#rc-indice" onClick={closeMenu}><svg className="icon"><use href="#i-shield" /></svg> Índice de coberturas RC</NavLink>
            <NavLink to="/responsabilidad-civil#evento" onClick={closeMenu}><svg className="icon"><use href="#i-users" /></svg> RC Eventos</NavLink>
            <NavLink to="/responsabilidad-civil#turismo" onClick={closeMenu}><svg className="icon"><use href="#i-plane" /></svg> RC Turismo Aventura</NavLink>
            <NavLink to="/responsabilidad-civil#educativo" onClick={closeMenu}><svg className="icon"><use href="#i-school" /></svg> RC Establecimientos Educativos y Clubes</NavLink>
          </div>
        </div>

        <NavLink to="/alquileres" onClick={closeMenu}>Alquileres</NavLink>
        <NavLink to="/cotizador" onClick={closeMenu}>Cotizador</NavLink>
        <NavLink to="/productores" onClick={closeMenu}>Productores</NavLink>
        <NavLink to="/formularios" onClick={closeMenu}>Formularios</NavLink>
        <NavLink to="/medios-de-pago" onClick={closeMenu}>Pagos</NavLink>
        <a href="#faq" onClick={closeMenu}>Preguntas</a>
        <NavLink to="/contacto" onClick={closeMenu}>Contacto</NavLink>

        <div className={`has-submenu${gestionOpen ? ' open' : ''}`}>
          <a href="#" onClick={(e) => {
            e.preventDefault()
            if (window.innerWidth <= 1280) setGestionOpen(v => !v)
          }}>Gestión Online</a>
          <div className="submenu">
            <a href="https://gestionar.segurosgestion.com.ar/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              <svg className="icon"><use href="#i-arrow" /></svg> GestionAR
            </a>
            <NavLink to="/instructivos" onClick={closeMenu}>
              <svg className="icon"><use href="#i-arrow" /></svg> Instructivos / Manuales
            </NavLink>
          </div>
        </div>
      </div>

      <div className="nav-cta">
        <a href="#simulador" className="btn btn-accent">
          Cotizar ahora <svg className="icon" style={{ width: '16px' }}><use href="#i-arrow" /></svg>
        </a>
        <button
          className="nav-toggle"
          aria-label="Abrir menú"
          aria-expanded={menuOpen ? 'true' : 'false'}
          onClick={() => setMenuOpen(v => !v)}
        >
          <svg className="icon"><use href="#i-menu" /></svg>
        </button>
      </div>
    </nav>
  )
}
