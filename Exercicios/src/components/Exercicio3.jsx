import { useState } from "react";
import './Exercicio3.css'

function Exercicio3() {
   const [resultado, setResultado] = useState()

  function emprestimo(){

    let valorSalario = Number(prompt('Digite o seu salário '))
    let valorEmprestimo = Number(prompt('Digite o valor do empréstimo '))
    let numeroPrestacoes = Number(prompt('Digite o número de prestações '))


    if(valorPrestacao <= valorSalario * 0.3) {
        setResultado('O empréstimo pode ser concedido')

    }else if(valorPrestacao > valorSalario){
        setResultado('O empréstimo não pode ser concedido')
        
    }else{
        setResultado('Valores informados devem ser positivos e maiores que zero')
    } 
                                                                                                                        
    }
 return (
    <div className="Emprestimo-container">
    <h2>Verificação de Empréstimo</h2>
    <button onClick={emprestimo}>Verificar</button>
    <div>
    Resultado final:  {resultado}
    </div>
    </div>
    )
}
  
  export default Exercicio3