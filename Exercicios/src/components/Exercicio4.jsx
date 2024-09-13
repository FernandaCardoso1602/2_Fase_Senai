import { useState } from "react"
import "./Corrida.css"

function Exercicio4() {

    const[resultado, setResultado] = useState()

    function verificar() {

        let distancia = Number(prompt("Digite a distância (em quilômetros): "))
        let tempo 
        let tempoMinutos
        let tempoHoras
        let tempoDias
        let tempoMeses
        let velocidade = 300000

        // calculo do tempo ja convertendo de
        //  segundos para minutos
        tempo = ( distancia / velocidade)
        setResultado(`Distância aproximada : ${tempo}`)


    // converte de segundos para minutos
    if(tempo > 60){

       tempoMinutos = (tempo * 60)
       setResultado(`Distância aproximada: ${tempoMinutos}`)
    }
        
    // converte de minutos para horas
    else if(tempo >= 60 ){

        tempoHoras = (tempo / 60)
        setResultado(`Distância aproximada: ${tempoHoras}`)
    }

    // horas para dias
    else if( tempoHoras >= 24  ){

        tempoDias = (tempoHoras / 24)
        setResultado(`Distância aproximada: ${tempoDias}`)
    }

    else if(tempoDias >= 30){

        tempoMeses = tempoDias * 30 
        setResultado(`Distância aproximada: ${tempoMeses}`)
    }

    else if(tempoMeses > 12){

        tempoAno = (tempoMeses / 12)
           setResultado(`Distância aproximada: ${tempoAno}`)
    }
    }
  return (

    <div className="Emprestimo-container">

      <h2>Star Ubers</h2>
      <button onClick={verificar}>Verificar</button>
    
      Resultado: {resultado}
    </div>




  )
}

export default Exercicio4