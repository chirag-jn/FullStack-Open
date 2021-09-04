import logo from './logo.svg';
import './App.css';

function Hello(props) {
    return (
        <div>
            <p>Hello {props.name}</p>
        </div>
    )
}

const Hello2 = (props) => {
    return (
        <div>
            <p>Hello {props.name}</p>
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Hello name="there"/>
        <Hello2 name="react"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
