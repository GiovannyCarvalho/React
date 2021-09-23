import React from 'react';
import despesas from '../../data/despesas';
import '../../index'
import './TabelaDespesas.css';


const tabelaDespesas = props => {
 
    var totalDespesas = 0.0
    despesas.reduce (( totalDespesas, valor) => totalDespesas + valor, 0 )

    console.log(totalDespesas)

    function getLinhas(){
        return despesas.map((despesa, i)=> {
                return(
                    <tr key={despesa.id} className={i % 2 === 0? 'Par' : 'Impar'}>
                        <td>{despesa.diaPagamento}</td>
                        <td>{despesa.descricao}</td>
                        <td>R$ {despesa.valor.toFixed(2).replace('.', ',')}</td>
                    </tr>
                )
            })
    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Dia</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    { getLinhas() }
                </tbody>
            </table>
        </div>
    )
}

export default tabelaDespesas