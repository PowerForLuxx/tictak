import Board from './Board'
import React,{useState} from 'react';
import { calculateWinner } from '../logic';
import './Game.css'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
    const boardCopy = [...board]
    
    if(winner || boardCopy[index]) return

    boardCopy[index] = xIsNext ? 'X' : 'O'

    setBoard(boardCopy)
    setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return(
            <button className="start_btn" onClick={() => setBoard(Array(9).fill(null))}>Очистить поле боя</button>
        )
    }

    return (
        <div className="wrapper">
             <p className="game_info">
                {winner ? 'Победитель игрок : '+ winner : 'Ходит игрок : ' + (xIsNext ? 'X' : 'O')}
            </p>

            <Board squares={board} click={handleClick} />
            
            <p>
            {startNewGame()}
            </p>
            
        </div>
    )
}

export default Game;

