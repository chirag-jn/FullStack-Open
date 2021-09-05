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
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)

  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Display counter={clicks.left}/>
          <Button onClick={() => handleLeftClick()} text="Left" />
        </div>
        <div>
          <Display counter={clicks.right}/>
          <Button onClick={() => handleRightClick()} text="Right" />
        </div>
      </header>
    </div>
  );
}

export default App;
