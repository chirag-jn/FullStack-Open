import logo from './logo.svg';
import './App.css';

function Hello(props) {

    const Hello2 = (props) => {
        return props.name + ' how are you?'
    }

    const Hello3 = (props) => props.name + ' how are you?'

    return (
        <div>
            <p>Hello {Hello3(props)}</p>
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Hello name="there"/>
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
