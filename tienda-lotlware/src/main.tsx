import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import BarraNavegacion from './componentes/BarraNavegacion.tsx'
import Footter from './componentes/Footter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BarraNavegacion/>
    <App />
    <Footter/>
  </StrictMode>,
)
