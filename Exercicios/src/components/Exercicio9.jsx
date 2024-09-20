import React, { useState} from 'react'

function Exercicio9(){

 const [inputaltura, setinputAltura] = useState()

function calculo(){

let enzo = 140
let valentina = 150
let anos = 0

do{
  enzo +=3
  valentina +=2
  anos +=1

 }while(enzo < valentina)

  setAltura (anos)

}

return (

 <div className='Altura-Container'>
   
   <h2>Enzo e Valentina</h2>
   <button onClick={calculo}>Calcule a altura</button>

<br />

Enzo será maior que Valentina em: (inputaltura)

</div>

)
}


export default Exercicio9