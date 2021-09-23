import './App.css';
import Card from '../components/layout/Card'
import TabelaDespesas from '../components/listadespesas/TabelaDespesas'
import Backlog from '../components/backlog/Backlog'

function App() {
  return (
    <div className="App">
      <div className="Cards">
        <Card titulo="Controle de despesas fixas - v1" color="#5050F0">
          <TabelaDespesas />
        </Card>
        <Card titulo="Backlog" color="#ff0055">
          <Backlog />
        </Card>
      </div>
    </div>
  );
}

export default App;
