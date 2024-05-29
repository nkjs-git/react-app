import logo from './logo.svg';
import './App.css';

const { REACT_APP_VERSION } = process.env

function App() {
  console.log(REACT_APP_VERSION)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!!!
        </p>
        <p>
          Version {REACT_APP_VERSION}
        </p>
      </header>
    </div>
  );
}

export default App;
