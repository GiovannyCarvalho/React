import React from 'react';
import despesas from '../../data/despesas';
import '../../index'
import './TabelaDespesas.css';


const tabelaDespesas = props => {
 
    var total = 0.0
    total = despesas.reduce((A, B) => A + parseFloat(B.valor.toFixed(2)), 0);
    console.log(total.toFixed(2))

    function getLinhas(){
        return despesas.map((despesa, i)=> {
                return(
                    <tr key={despesa.id} className={i % 2 === 0? 'Par' : 'Impar'}>
                        <td className="Direita">{despesa.diaPagamento}</td>
                        <td>{despesa.descricao}</td>
                        <td className="Direita">R$ {despesa.valor.toFixed(2).replace('.', ',')}</td>
                    </tr>
                )
            })
    }

    return (
        <div className="TabelaDespesas">
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
                    <tr>
                        <th colSpan="2">Total: </th>
                        <th className="Direita">R$ {total.toFixed(2).replace('.', ',')}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default tabelaDespesas