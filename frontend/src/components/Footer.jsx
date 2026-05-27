import { Link } from 'react-router-dom'
import logoImg from '../assets/img/logo.png'
import ssnLogoImg from '../assets/img/superintendencia-logo.png'
import afipQr from '../assets/img/afip-datafiscal-qr.png'

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
            <p>Compañía argentina especializada en seguros de Caución, Personas y Responsabilidad Civil.</p>
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
            <div className="footer-ssn-cell footer-ssn-organismo">
              <span>Organismo de control </span>
              <a
                href="https://www.argentina.gob.ar/ssn"
                target="_blank"
                rel="noopener"
                className="footer-ssn-link"
              >
                 www.argentina.gob.ar/ssn
              </a>
            </div>
            <span className="footer-ssn-pipe" aria-hidden="true" />
            <div className="footer-ssn-logo">
              <img src={ssnLogoImg} alt="Superintendencia de Seguros de la Nación" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
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

            <div className="footer-regulatory-qr">
              <div style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '2px solid #1B4FAE',
              }}>
                <div style={{ background: '#fff', padding: '6px' }}>
                  <img src={afipQr} alt="QR Data Fiscal AFIP" style={{ width: '78px', height: 'auto', display: 'block' }} />
                </div>
                <div style={{
                  background: '#1B4FAE',
                  color: '#fff',
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textAlign: 'center',
                  width: '100%',
                  padding: '4px 0',
                  lineHeight: 1.4,
                  fontFamily: "'Archivo', sans-serif",
                }}>
                  DATA<br />FISCAL
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
