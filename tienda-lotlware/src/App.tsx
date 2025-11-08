import './App.css'
import {  Outlet } from "react-router-dom";
import BarraNavegacion from './componentes/BarraNavegacion';
import Footter from './componentes/Footter';

function App() {
  

  return (
    <>
      <BarraNavegacion/>
      <main>     
        <Outlet />   
      </main>
      <Footter/>    
    </>
  )
}

export default App
