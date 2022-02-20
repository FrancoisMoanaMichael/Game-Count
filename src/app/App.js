import { useState } from 'react';
import Leaderboard from '../leaderboard/leaderboard';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

import './App.scss';

function App() {

const [newPlayer, setNewPlayer] = useState(0)
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
    <div className='game-name'>
      <h1>Game Count</h1>
      <p> {newPlayer} joueur{newPlayer>1? 's' : null}</p>
    <div className='btn-nb'>
    <button className='button-player' color="primary" aria-label="add" onClick={addPlayer}>
      <AddIcon />
    </button>
    {newPlayer >= 1 ? 
    <button className='button-player' color="primary" aria-label="del" onClick={addDeletPlayer}>
      <ClearIcon />
    </button> : null}
    </div>
    </div>
    <div className='player-card-container'>
      {[...Array(newPlayer)].map((elementInArray, index) => (

    <Leaderboard key={index} index={index} />

      ))}
    </div>

    <div className='btn-container'>





    </div>


  </div>
);
}

export default App;
