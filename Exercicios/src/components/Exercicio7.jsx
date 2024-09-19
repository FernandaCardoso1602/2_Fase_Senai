import React, { useState } from 'react'
import "./Exercicio7.css"

function Exercicio7() {

    const [valorFinal, setvalorFinal] = useState()
    const [inputValue, setinputValue] = useState()

    function CalculoDeDias(){

        let dias = parseInt(inputValue)
        let desconto = (25 / 100)
        let total
        let valor
        let pagar

        if (dias <= 5){

            total = (dias * 100)
            valor = (total * desconto)
            pagar = (total - valor)+150

            setvalorFinal(pagar)

        }else if(dias >= 6 || dias <= 10){

            total = (dias * 100)
            valor = (total * desconto)
            pagar = (total - valor)+150
            
            setvalorFinal(pagar)

        }else if(dias > 10)
        
        total = (dias * 100)
        valor = (total * desconto)
        pagar = (total - valor)+150
        
        setvalorFinal(pagar)

    }
  return (
    <div className='Hospedagem-container'>
        <h2>Dias na Hospedagem</h2>
        Dias Hospedado(a)<input type="Number"
        value={inputValue}
        onChange={(event) => setinputValue(event.target.value)}/>
        <button onClick={CalculoDeDias}>Valor final: </button>
        <br />
        Valor a ser pago: {valorFinal}
      
    </div>
  )
}

export default Exercicio7
