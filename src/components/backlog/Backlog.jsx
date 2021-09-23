import React from 'react';
import backlog from '../../data/backlog';
import '../../index'
import './Backlog.css';


const tabelaBacklog = props => {

    function getLinhas(){
        
        backlog.sort((a,b) => (a.prioridade > b.prioridade) ? 1 : ((b.prioridade > a.prioridade) ? -1 : 0))

        return backlog.map((tarefa, i)=> {
                return(
                    <tr key={tarefa.id} className={i % 2 === 0? 'Par' : 'Impar'}>
                        <td>{tarefa.descricao}</td>
                        <td>{tarefa.prioridade}</td>
                        <td>{tarefa.feito}</td>
                    </tr>
                )
            })
    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Prioridade</th>
                        <th>Feito</th>
                    </tr>
                </thead>
                <tbody>
                    { getLinhas() }
                </tbody>
            </table>
        </div>
    )
}

export default tabelaBacklog