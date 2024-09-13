import { useState } from 'react'
import './App.css'
import DiaSemana from './DiaSemana'

function App() {
  const [diaSemana, setDiaSemana] = useState() 

  return (
    <>
      <DiaSemana />
    </>
  )
}

export default App
