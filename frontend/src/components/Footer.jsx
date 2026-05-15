import { Link } from 'react-router-dom'
import logoImg from '../assets/img/logo.png'

function SsnSeal() {
  return (
    <svg viewBox="0 0 56 56" width="46" height="46" aria-hidden="true">
      <circle cx="28" cy="28" r="27" fill="#005DA4" />
      <circle cx="28" cy="28" r="22" fill="#0068BC" />
      <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <path d="M10 28 Q16.5 20 23 28 Q29.5 36 36 28 Q42.5 20 49 28"
        fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 22 Q16.5 14 23 22 Q29.5 30 36 22 Q42.5 14 49 22"
        fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 34 Q16.5 26 23 34 Q29.5 42 36 34 Q42.5 26 49 34"
        fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function Footer() {
  return (
    <>
      {/* ── Footer principal ── */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src={logoImg} alt="Gestión Seguros" />
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
            <a href="https://www.google.com/maps/search/?api=1&query=Gesti%C3%B3n+Argentina+de+Seguros+S.A%2C+Bartolom%C3%A9+Mitre+480+Piso+11%2C+CABA" target="_blank" rel="noopener noreferrer"><svg className="icon"><use href="#i-pin" /></svg> Bartolomé Mitre 480 Piso 11, CABA</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Gestión Seguros S.A.</div>
          <div><a href="#">Privacidad</a> · <a href="#">Términos</a></div>
        </div>
      </footer>

      {/* ── Franja legal / regulatoria ── */}
      <div className="footer-legal">

        {/* Fila SSN */}
        <div className="footer-ssn-strip">
          <div className="footer-ssn-strip-inner">
            <span className="footer-ssn-cell">
              N° de inscripción en SSN <strong>0882</strong>
            </span>
            <span className="footer-ssn-pipe" aria-hidden="true" />
            <span className="footer-ssn-cell">Organismo de control</span>
            <span className="footer-ssn-pipe" aria-hidden="true" />
            <a
              href="https://www.argentina.gob.ar/ssn"
              target="_blank"
              rel="noopener"
              className="footer-ssn-cell footer-ssn-link"
            >
              www.argentina.gob.ar/ssn
            </a>
            <span className="footer-ssn-pipe" aria-hidden="true" />
            <div className="footer-ssn-logo">
              <SsnSeal />
              <div className="footer-ssn-logo-text">
                <strong>SSN</strong>
                <span>SUPERINTENDENCIA DE<br />SEGUROS DE LA NACIÓN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Texto regulatorio + Data Fiscal */}
        <div className="footer-regulatory">
          <div className="footer-regulatory-inner">
            <div className="footer-regulatory-text">
              <p>
                La entidad aseguradora dispone de un Servicio de Atención al Asegurado que atenderá
                las consultas y reclamos que presenten los tomadores de seguros, asegurados,
                beneficiarios y/o derechohabientes.
              </p>
              <p>El Servicio de Atención al Asegurado está integrado por:</p>
              <p>
                <strong>RESPONSABLE:</strong> Germán Camino – 0800 345 1340 –{' '}
                <a href="mailto:german.camino@gestionseguros.com.ar">german.camino@gestionseguros.com.ar</a>
              </p>
              <p>
                <strong>SUPLENTE:</strong> Nadia Machado – 0800-345-1340 –{' '}
                <a href="mailto:nadia.machado@gestionseguros.com.ar">nadia.machado@gestionseguros.com.ar</a>
              </p>
              <p>
                En caso de que el reclamo no haya sido resuelto o haya sido desestimado, total o
                parcialmente, o que haya sido denegada su admisión, podrá comunicarse con la
                Superintendencia de Seguros de la Nación por correo electrónico a{' '}
                <a href="mailto:denuncias@ssn.gob.ar">denuncias@ssn.gob.ar</a> o formulario web a
                través de{' '}
                <a href="https://www.argentina.gob.ar/ssn" target="_blank" rel="noopener">
                  www.argentina.gob.ar/ssn
                </a>
              </p>
            </div>

            {/* DATA FISCAL — reemplazar el href con el código QR provisto por AFIP */}
            <div className="footer-regulatory-qr">
              <a
                href="http://qr.afip.gob.ar/?qr=REEMPLAZAR_CON_CODIGO_AFIP"
                target="_F960AFIPInfo"
                rel="noopener noreferrer"
                title="Datos Fiscales AFIP"
              >
                <img
                  src="https://www.afip.gob.ar/images/DATOFISCAL.jpg"
                  alt="DATA FISCAL"
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
