import Component from 'inferno-component';
import './App.css';
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Orkut
        </header>
        <Routes />
      </div>
    );
  }
}

export default App;
