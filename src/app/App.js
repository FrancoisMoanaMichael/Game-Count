import { useState } from 'react';
import Leaderboard from '../leaderboard/leaderboard';

import './App.scss';

function App() {



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
    <div className='player-card-container'>
      {[...Array(newPlayer)].map((elementInArray, index) => (

    <Leaderboard key={index} index={index} />

      ))}
    </div>
    <div className='btn-container'>
    <button onClick={addPlayer}>
      ajouter un joueur
    </button>
    <p>nombre de joueur:{newPlayer}</p>
    <button onClick={addDeletPlayer}>
      retiré un joueur
    </button>
    </div>


  </div>
);
}

export default App;
