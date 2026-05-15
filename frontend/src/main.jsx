import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/styles.css'
import App from './App.jsx'
import favicon from './assets/img/logo.png'

function setLinkIcon(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}
setLinkIcon('icon', favicon)
setLinkIcon('apple-touch-icon', favicon)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
