import {useState } from "react"
import "./Exercicio6.css"

function Exercicio6() {

    const [resultado, setResultado] = useState()

    function notas(){
        let notaUm = Number(prompt("Digite uma nota de 0 a 10: "))
        let notaDois = Number(prompt("Digite uma nota de 0 a 10: "))
        let calculo = (notaUm + notaDois)/2

          if(calculo > 9 || calculo <= 10){
            setResultado("Parabéns você tirou A!")
          }
          else if(calculo > 7.5 || calculo <= 9){
            setResultado("Parabéns você tirou B")
          }
          else if(calculo > 6 || calculo <= 7.5){
            setResultado("Parabéns você tirou C")
          }
          else if(calculo > 4 || calculo <= 6){
            setResultado("Você tirou D")
          }
          else if(calculo > 0 || calculo <= 4){
            setResultado("Você tirou E")
          }
           
          }

  return (
    <div  className="Notas-container">
      <h2>Verifique a sua nota</h2>
      <h2>Siga a tabela a seguir:  <br />
        Entre 9.0 e 10.0 = A <br />
        Entre 7.5 e 9.0 = B <br />
        Entre 6.0 e 7.5 = C <br />
        Entre 4.0 e 6.0 = D <br />
        Entre 0.0 e 4.0 = E <br />
      </h2>

      <button onClick={notas}>Verificar</button>



      Resultado: {resultado}
    </div>
  )
}

export default Exercicio6