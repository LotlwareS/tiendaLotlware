// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//import Home from './pages/Home'
//import BarraNavegacion from './componentes/BarraNavegacion'
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
