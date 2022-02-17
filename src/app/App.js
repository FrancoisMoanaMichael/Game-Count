import { useState } from 'react';
import './App.scss';

function App() {
  const [playerName, setPlayerName] = useState("name")
  const [playerNameSubmited, setPlayerNameSubmited] = useState(false)
  const playerinpute = (event) => {
    setPlayerName(event.target.value)
  console.log(event.target.value)
  }
  const handlesubmit = (event) => {
    event.preventDefault();
    setPlayerNameSubmited(!playerNameSubmited)
    console.log(playerNameSubmited)
  }
  const handleChangePlayerName = () => {
console.log('double click')
    setPlayerNameSubmited(true)
  }

  const [playerScore, setPlayerScore] = useState(0)
  const [playerScoreSubmited, setPlayerScoreSubmited] = useState(false)
  const playerScoreinpute = (event) => {
    setPlayerScore(event.target.value)
    console.log(event.target.value)
  }

  const handlesubmitScore = (event) => {
    event.preventDefault();
    setPlayerScoreSubmited(!playerScoreSubmited)
    console.log(playerScoreSubmited)
  }
  const handleChangePlayerScore= () => {
    console.log('double click')
    setPlayerScoreSubmited(true)
  }
  return (
    <div className="App">
      <div className='game-name'>Game Name</div>
      {/* player-card static   */}
            <div className='player-card-container'>
        <div className='player-card'>
          <form onDoubleClick={handleChangePlayerName} type="text" className='player-card-name'  onSubmit={handlesubmit} >
            {playerNameSubmited ? <input className='player-input' type='text' onChange={playerinpute} ></input> : playerName}
                    </form>
          <form onDoubleClick={handleChangePlayerScore} type="text" className='player-card-score' onSubmit={handlesubmitScore} >
            {playerScoreSubmited ? <input className='player-input' type='number' onChange={playerScoreinpute} ></input> : playerScore}
           </form>
                    <div className='player-card-total'>
            {playerScore}
                    </div>
                  </div>
            </div>
    </div>
  );
}

export default App;
