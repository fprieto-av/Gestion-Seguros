import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <img src="/assets/img/logo.png" alt="Gestión Seguros" />
          </Link>
          <p>Compañía argentina de seguros. Caución, Personas y Responsabilidad Civil.</p>
          <div className="social">
            <a href="https://ar.linkedin.com/company/gestionsegurossa" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg className="icon" style={{ width: '18px' }} aria-hidden="true"><use href="#i-li" /></svg>
            </a>
            <a href="https://www.instagram.com/gestionseguros.sa/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg className="icon" style={{ width: '18px' }} aria-hidden="true"><use href="#i-ig" /></svg>
            </a>
            <a href="https://www.facebook.com/gestionseguros.sa" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg className="icon" style={{ width: '18px' }} aria-hidden="true"><use href="#i-fb" /></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCnAyg1zeqZ5_QcsXsoBoGWw" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg className="social-svg" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-yt" /></svg>
            </a>
          </div>
          <div className="ssn-block">
            <strong>Organismo de control</strong>
            SSN · <a href="https://www.argentina.gob.ar/ssn" target="_blank" rel="noopener">www.argentina.gob.ar/ssn</a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Coberturas</h5>
          <Link to="/caucion">Caución</Link>
          <Link to="/alquileres">Alquileres</Link>
          <Link to="/personas">Personas</Link>
          <Link to="/responsabilidad-civil">Resp. Civil</Link>
        </div>

        <div className="footer-col">
          <h5>Sitio</h5>
          <Link to="/cotizador">Cotizador</Link>
          <Link to="/formularios">Formularios</Link>
          <Link to="/productores">Productores</Link>
        </div>

        <div className="footer-col">
          <h5>Empresa</h5>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        <div className="footer-col">
          <h5>Contacto</h5>
          <a href="tel:+541152544009"><svg className="icon"><use href="#i-phone" /></svg> (+54) 5254-4009</a>
          <a href="tel:08003451340"><svg className="icon"><use href="#i-phone" /></svg> 0800-345-1340</a>
          <a href="mailto:info@gestionseguros.com.ar"><svg className="icon"><use href="#i-mail" /></svg> info@gestionseguros.com.ar</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} Gestión Seguros S.A.</div>
        <div><a href="#">Privacidad</a> · <a href="#">Términos</a></div>
      </div>
    </footer>
  )
}
