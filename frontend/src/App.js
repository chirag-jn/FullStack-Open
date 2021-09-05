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
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Display counter={left}/>
          <Button onClick={() => setLeft(left+1)} text="Left" />
        </div>
        <div>
          <Display counter={right}/>
          <Button onClick={() => setRight(right+1)} text="Right" />
        </div>
      </header>
    </div>
  );
}

export default App;
