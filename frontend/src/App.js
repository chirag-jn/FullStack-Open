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

  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
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
