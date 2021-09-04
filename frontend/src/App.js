import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
    {text}
    </button>
  )
}

function App() {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter+1)
  const setToZero = () => setCounter(0)

  return (
    <div className="App">
      <header className="App-header">
        <Display counter={counter} />
        <Button text="Plus" onClick={increaseByOne} />
        <Button text="Zero" onClick={setToZero} />
      </header>
    </div>
  );
}

export default App;
