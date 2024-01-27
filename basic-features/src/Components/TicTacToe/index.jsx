import { useState, useEffect } from 'react'
import './styles.css'

export default function TicTacToe() {

    const [boxes, setBoxes] = useState(Array(9).fill(''));
    const [isXturn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState('');

    // Patterns that is required to win
    const winningPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    function getWinner(getCurrentIndex) {
        let cpyboxes = [...boxes]
        if(winner || boxes[getCurrentIndex]) return // prevent the clicking at same box and if winner is found
        cpyboxes[getCurrentIndex] = isXturn ? 'X' : 'O';
        setBoxes(cpyboxes)
        setIsXTurn(!isXturn)        
    }
 
    function handleRestart() {
        setIsXTurn(true)
        setWinner('')
        setBoxes(Array(9).fill(''))
    }

    useEffect(()=> {
        for (let i = 0; i < winningPattern.length; i++) {
            const [x, y, z] = winningPattern[i] 

            if(boxes[x] && boxes[x] === boxes[y] && boxes[x] === boxes[z]) {
                setWinner(()=> boxes[x])
            }
        }
    }, [boxes])

    return <div className="tic-tac-toe-container">
        <div className="heading">
            <span>Tic Tac Toe</span>
        </div>
        <div className="game-container">
        {
            boxes.map((box, index) => (
                <div className="box" 
                    key={index} 
                    onClick={() => getWinner(index)}
                >{box}</div>
            ))
        }
        </div>

        <div className="player-details">
        {
            winner ?
             <span>Player {winner} won !!!</span> 
            : (boxes.every(item => item !== '') ? 
                "It is a Draw..please restart the game.."
                :<span>It is {isXturn ? 'X': 'O'}&apos;s turn</span>)
        }
        </div>
        <button className="restart" onClick={handleRestart}>Restart</button>
        
    </div>
}