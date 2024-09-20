import React, { useState } from 'react'

function Exercicio8() {

    const [inputHabitantes, setinputHabitantes] = useState()

    function Verificacao(){
  return (
    <div className='Habitantes-Container'>

        <h1>Quantidade de Habitantes</h1>
        <label htmlFor="genero">Gênero</label><input type="text" id='genero'/> <br />
        <label htmlFor="altura">Altura</label><input type="text" id='altura'/>
      
    </div>
  )
}
}

export default Exercicio8
