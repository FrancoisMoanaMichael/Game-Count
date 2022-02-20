import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './leaderboard.scss';

const Leaderboard = ({ index, ...rest }) => {
    const [playerNameSubmited, setPlayerNameSubmited] = useState(true)
    const [playerName, setPlayerName] = useState("name")
    const handlesubmit = (event) => {
        event.preventDefault();
        setPlayerNameSubmited(!playerNameSubmited)
    }
    const handleChangePlayerName = () => {
        setPlayerNameSubmited(true)
    }


    const playerinpute = (event) => {
        setPlayerName(event.target.value)
    }


    let [total, setTotal] = useState(0)

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


    const [play, setPlay] =useState([])
    const [playerScoreSubmited, setPlayerScoreSubmited] = useState(false)

    const [playerScore, setPlayerScore] = useState()

    const [row, setRow] = useState(1)
    const handlesubmitScore = (event) => {

        event.preventDefault();

        setPlay(oldPlayerScore => [...oldPlayerScore, playerScore])
        setPlayerScoreSubmited(!playerScoreSubmited)
        setTotal(getArraySum(play))

        setRow(row + 1)
        setPlayerScore('')
    }

    const handleChangePlayerScore = () => {
        setPlayerScoreSubmited(true)
    }

   return (
    <div className='card'>
           {/* player-card static   */}
                       <form onDoubleClick={handleChangePlayerName} type="text" className='player-card-name' onSubmit={handlesubmit} >
                           {playerNameSubmited ? <input placeholder='         entrez votre nom' className='player-input' type='text' onChange={playerinpute}  ></input> : playerName}
                       </form>
                   <div key={index} className='player-card'>
                       <form onDoubleClick={handleChangePlayerScore} type="text" className='player-card-score' onSubmit={handlesubmitScore} >
                   <input name='scoreInpute' className='player-input' value={playerScore} placeholder='       entrez votre score' type='number'  onChange={playerScoreinpute} ></input> 
                       </form>
                       <div className='score-container'>
                       {[...Array(row)].map((elementInArray, index) => (
                           <p key={index} className='player-input'>{play[index - 1]}</p>
                       ))}
                       </div>
                       <div className='player-card-total'>
                           {total}
                       </div>
                   </div>
           
    </div>
        )
};

Leaderboard.propTypes = {
    className: PropTypes.string,
};
Leaderboard.defaultProps = {
    className: '',
};
export default React.memo(Leaderboard);
