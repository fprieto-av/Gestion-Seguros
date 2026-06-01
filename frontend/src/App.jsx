import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import Layout from './components/Layout'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import MediosDePago from './pages/MediosDePago'
import Instructivos from './pages/Instructivos'
import Formularios from './pages/Formularios'
import Caucion from './pages/Caucion'
import Personas from './pages/Personas'
import ResponsabilidadCivil from './pages/ResponsabilidadCivil'
import Alquileres from './pages/Alquileres'
import Cotizador from './pages/Cotizador'
import Productores from './pages/Productores'
import Contacto from './pages/Contacto'
import BajaPoliza from './pages/BajaPoliza'

function Placeholder({ nombre }) {
    return <div style={{ padding: '120px 40px', textAlign: 'center'}}><h2>{nombre}</h2><p>Página en construcción</p></div>
  }

export default function App() {
  return(
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="caucion" element={<Caucion />} />
          <Route path="personas" element={<Personas />} />
          <Route path="responsabilidad-civil" element={<ResponsabilidadCivil />} />
          <Route path="alquileres" element={<Alquileres />} />
          <Route path="cotizador" element={<Cotizador />} />
          <Route path="productores" element={<Productores />} />
          <Route path="formularios" element={<Formularios />} />
          <Route path="medios-de-pago" element={<MediosDePago />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="instructivos" element={<Instructivos />} />
          <Route path="baja-poliza" element={<BajaPoliza />} />
          <Route path="*" element={<Placeholder nombre="404 - Página no encontrada" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}