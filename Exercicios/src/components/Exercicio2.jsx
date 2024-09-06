import { useState } from 'react'
import './Exercicio2.css'

function Exercicio2() {  
  const [resultado, setResultado] = useState()
 
  function verificacao(){
      
      let numero = Number(prompt("Digite um número para descobrir se ele é par e positivo ao mesmo tempo"))

      if(numero > 0){
          setResultado('Ele é positivo')

      }else if(numero < 0){
          setResultado('Ele é negativo')

      }else if(numero = 0){
          setResultado('O número é zero')
      }
      
  } 
  return (

      <div className="Verificacao-container">
      <h2>Seu número é par e positivo?</h2>
      <button onClick={verificacao}>Descubra aqui</button>
      
      <div>
        Resultado:  {resultado}
      </div>
</div>

)
        }
      
      

export default Exercicio2

