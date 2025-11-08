import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx';
import Prodcutos from './pages/Productos.tsx';
import Contacto from './pages/Contacto.tsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {index:true, element: <Home/>},
      {path:"/Productos", element: <Prodcutos/>},
      {path:"/Contacto", element: <Contacto/>}

    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>    
    <RouterProvider router={router}/>    
  </StrictMode>,
)
