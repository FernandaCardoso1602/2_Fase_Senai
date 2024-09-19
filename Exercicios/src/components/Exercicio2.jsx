import { useState } from "react" 
import './Exercicio2.css'

function Exercicio2() {

    const[resultado, setResultado] = useState()

    function verificar(){

     let numero = Number(prompt("Digite um número: "))

    
     if(numero % 2 === 0){
     setResultado("O numero é par e positivo")

     }

     else{
        setResultado("O numero não é par e positivo")
     }

    }

  return (
    <div className="Verificacao-container">
       <h2>Verificação de números: </h2>

 <button onClick={ verificar}>Verificar</button>

   Resultado: {resultado}
    </div>
  )
}

export default Exercicio2