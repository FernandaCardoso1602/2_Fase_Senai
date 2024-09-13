import { useState } from "react";
import './Exercicio3.css'

function Exercicio3() {
   
        const[resultado, setResultado] = useState()
    
        function verificar(){
    
            let salario = Number(prompt("Digite o seu salário: "))
             let prestacao = Number(prompt("Digite o valor da prestação: "))
             let calculo1, calculo2
             calculo1 = 30/100
             calculo2 = salario * calculo1
    
             if(prestacao > calculo2){
    
            setResultado("Não será possível fazer o empréstimo")
             }
    
             else if(prestacao < calculo2){
    
                setResultado("Você poderá fazer o empréstimo")
                 }
        }
      return (
    
        
        <div className='Emprestimo-container'>
          
          <h2>Informe o seu salario e o valor do empréstimo que deseja fazer</h2>
         <button onClick={verificar}>verificar</button>
        
        resultado:{resultado}
        </div>
      )
    }
    
  
  export default Exercicio3