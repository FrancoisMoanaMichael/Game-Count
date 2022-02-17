import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='game-name'>Game Name</div>
      {/* player-card static   */}
            <div className='player-card-container'>
                  <div className='player-card'>
                    <div className='player-card-name'>
                      name
                    </div>
                    <div className='player-card-score'>
                      score
                    </div>
                    <div className='player-card-total'>
                      total
                    </div>
                  </div>
            </div>
    </div>
  );
}

export default App;
