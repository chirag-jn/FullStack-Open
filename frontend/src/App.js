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

  // initializing empty array
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1
    }
    setClicks(newClicks)
    // Adding the new item to the array is accomplished with the concat method, 
    // that does not mutate the existing array but rather returns a new copy 
    // of the array with the item added to it.
    setAll(allClicks.concat('L'))

    // Never do the below step. State of react components must not be mutated directly
    // allClicks.push('L')
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newClicks)
    setAll(allClicks.concat('R'))
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
        <div>
          <p>
            {allClicks.join(' ')}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
