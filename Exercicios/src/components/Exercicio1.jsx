import { useState } from "react"
import './Exercicio1.css'

function Exercicio1() {  
    const [resultado, setResultado] = useState() 
   
    function verificacao(){
        
        let numero = Number(prompt("Digite um número para verificarmos se ele é Positivo, Negativo ou Nulo"))

        if(numero > 0){
            setResultado(`Ele é positivo`)

        }else if(numero < 0){
            setResultado(`Ele é negativo`)

        }else if(numero == 0){
            setResultado(`Ele é nulo`)
        }
        
    } 
    return (

        <div className="Verificacao-container">
        <h2>Verificação de números</h2>
        <button onClick={verificacao}>Verifique aqui</button>
        
        <div>
          Resultado:  {resultado}
        </div>
  </div>
  
  )
          }
        
        

export default Exercicio1
