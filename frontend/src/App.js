import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const Display = (props) => {
  return (
    <div>
      {props.counter}
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onclick}>
    {props.text}
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
        <Button text="Plus" onclick={increaseByOne} />
        <Button text="Zero" onclick={setToZero} />
      </header>
    </div>
  );
}

export default App;
