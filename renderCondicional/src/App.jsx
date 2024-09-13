import { useState } from 'react'
import './App.css'
import Homme from './pages/Homme'
import NaoSei from './pages/NaoSei'
import Contato from './pages/Contato'
import Render from './pages/Render'


function App() {
  const [pagina, setPagina] = useState(<Homme />)
  function mostrarHomme(){
    setPagina(<Homme />)
  }
  return (
    <>
    <nav>
      <button onClick={ mostrarHomme }>Homme</button>
      <button onClick={ () => {setPagina(<Contato />)} }>Contato</button>
      <button onClick={ () => {setPagina(<NaoSei />)} }>NaoSei</button>
      <button onClick={ () => {setPagina(<Render />)} }>Render</button>
    </nav>
    {pagina}
    
    </>
  )
}

export default App
