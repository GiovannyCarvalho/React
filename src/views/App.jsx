import './App.css';
import Card from '../components/layout/Card'
import TabelaDespesas from '../components/listadespesas/TabelaDespesas'
import Backlog from '../components/backlog/Backlog'

function App() {
  return (
    <div className="App">
      <h1>Controle de despesas fixas - v2</h1>
      <div className="Cards">
        <Card titulo="Outubro - 2021" color="#5050F0">
          <TabelaDespesas />
        </Card>

        <Card titulo="Backlog para as próximas versões" color="#ff0055">
          <Backlog />
        </Card>
      </div>
    </div>
  );
}

export default App;
