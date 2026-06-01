export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5491131987454?text=Hola!%20Quiero%20cotizar%20un%20seguro"
            className="wa-float"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <use href="#i-wa" />
            </svg>
        </a>
    )
}