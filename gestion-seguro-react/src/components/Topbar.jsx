export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-left">
                <a className="topbar-item" href="tel:+541152544009">
                    <svg className="icon"><use href="#i-phone" /></svg>(+54) 5254-4009
                </a>
                <a className="topbar-item" href="tel:08003451340">
                    <svg className="icon"><use href="#i-phone" /></svg> 0800-345-1340
                </a>
                <span className="topbar-item">
                    <svg className="icon" aria-hidden="true"><use href="#i-clock" /></svg> Lunes a Viernes · 9 a 18hs
                </span>
                </div>
                <div className="topbar-right">
                    <a className="topbar-item" href="mailto:info@gestionseguros.com.ar">
                    <svg className="icon"><use href="#i-mail" /></svg>
                        info@gestionseguros.com.ar
                    </a>
                    <a className="topbar-item" href="#">
                    <svg className="icon"><use href="#i-shield" /></svg> Denunciar siniestro
                    </a>
                </div>
            </div>
            )
        }
        