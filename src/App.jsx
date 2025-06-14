import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
    <a href="index.html">
      <img className="img-fluid" src="/public/img/logo.svg" alt="Imagen de Logo" /></a>  
    <h1>Tienda de Guitarras</h1>
    </header>
    </>
  )
}

export default App
