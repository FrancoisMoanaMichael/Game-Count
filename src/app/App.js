import { useEffect, useState } from 'react';
import lodash from 'lodash'
import './App.scss';

function App() {
  const [playerName, setPlayerName] = useState("name")
  const [playerNameSubmited, setPlayerNameSubmited] = useState(false)
  const playerinpute = (event) => {
    setPlayerName(event.target.value)
  }
  const handlesubmit = (event) => {
    event.preventDefault();
    setPlayerNameSubmited(!playerNameSubmited)
  }
  const handleChangePlayerName = () => {
    setPlayerNameSubmited(true)
  }

  let [total, setTotal] = useState(0)
  const [play, setPlay] = useState([])
  const [playerScore, setPlayerScore] = useState(Number)
  const [playerScoreSubmited, setPlayerScoreSubmited] = useState(false)
  const playerScoreinpute = (event) => {
    setPlayerScore(Number(event.target.value))
  }
  function getArraySum(a) {
    var total = playerScore;
    for (var i in a) {
      total += a[i];
    }
    return total;
  }
  const [row, setRow] = useState(1)
  const handlesubmitScore = (event) => {
    
    event.preventDefault();
    setPlay(oldPlayerScore => [ ...oldPlayerScore, playerScore])
    setPlayerScoreSubmited(!playerScoreSubmited)

    console.log(getArraySum(play))
    setTotal(getArraySum(play))

    setRow(row+1)
  
}





const handleChangePlayerScore = () => {
  setPlayerScoreSubmited(true)
}



const [newPlayer, setNewPlayer] = useState(1)
// add 1 new player
const addPlayer = () => {
  setNewPlayer(newPlayer + 1)
}
// del 1 player
const addDeletPlayer = () => {
  if (newPlayer > 0) {
    setNewPlayer(newPlayer - 1)
  }
}




return (
  <div className="App">
    <div className='game-name'>Game Name</div>
    <p>nombre de joueur:{newPlayer}</p>
    <button onClick={addPlayer}>
      ajouter un joueur
    </button>

    <button onClick={addDeletPlayer}>
      retiré un joueur
    </button>

    {/* player-card static   */}
    <div className='player-card-container'>
      {[...Array(newPlayer)].map((elementInArray, index) => (
        <div key={index} className='player-card'>
          <form onDoubleClick={handleChangePlayerName} type="text" className='player-card-name' onSubmit={handlesubmit} >
            {playerNameSubmited ? <input className='player-input' type='text' onChange={playerinpute} ></input> : playerName}
          </form>
          <form onDoubleClick={handleChangePlayerScore} type="text" className='player-card-score' onSubmit={handlesubmitScore} >
            {playerScoreSubmited ? <input className='player-input' type='number' onChange={playerScoreinpute} ></input> : play[index - 1]}
          </form>
            <div className='score-container'></div>
          {[...Array(row)].map((elementInArray, index) => (
            <p key={index} className='player-input'>{play[index - 1]}</p>
          ))}
          
          <div className='player-card-total'>
            {total}
          </div>
        </div>)
      )}
    </div>
  </div>
);
}

export default App;
