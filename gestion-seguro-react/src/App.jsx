import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import MediosDePago from './pages/MediosDePago'
import Instructivos from './pages/Instructivos'

function Placeholder({ nombre }) {
    return <div style={{ padding: '120px 40px', textAlign: 'center'}}><h2>{nombre}</h2><p>Página en construcción</p></div>
  }

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="caucion" element={<Placeholder nombre="Caución" />} />
          <Route path="personas" element={<Placeholder nombre="Personas" />} />
          <Route path="responsabilidad-civil" element={<Placeholder nombre="Responsabilidad Civil" />} /> 
          <Route path="alquileres" element={<Placeholder nombre="Alquileres" />} />
          <Route path="cotizador" element={<Placeholder nombre="Cotizador" />} />
          <Route path="productores" element={<Placeholder nombre="Productores" />} />
          <Route path="formularios" element={<Placeholder nombre="Formularios" />} />
          <Route path="medios-de-pago" element={<MediosDePago />} />
          <Route path="contacto" element={<Placeholder nombre="Contacto" />} />
          <Route path="instructivos" element={<Instructivos />} />
          <Route path="*" element={<Placeholder nombre="404 - Página no encontrada" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}