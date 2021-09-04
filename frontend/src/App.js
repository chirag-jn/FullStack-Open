import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter+1),
    1000
  )

  return (
    <div className="App">
      <header className="App-header">
        <div>{counter}</div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
