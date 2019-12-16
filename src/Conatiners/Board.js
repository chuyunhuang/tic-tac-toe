import React, { useState } from 'react';
import './Board.css';
import Square from '../Components/Square';

export default function Board() {
  // boardState
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null))
  // turnState
  const [xIsNext, setXIsNext] = useState(true);

  // handleCick 
  const handleCick = index => {
    // create a copy of the board
    const squares = [...boardSquares]
    // if the index of the board is filled, return
    if (squares[index]) return;
    // add 'X' or 'O'
    squares[index] = xIsNext ? 'X' : 'O'
    // calculate the next turn
    // set the state of the board
    setBoardSquares(squares);
    // set the state of the turn
    setXIsNext(!xIsNext);

  }

  //create the board
  const renderSquares = (index) => {
    return (
      <Square value={boardSquares[index]} onClick={(e) => { handleCick(index) }} />
    )
  }

  return (
    <div>
      <div className="status"></div>
      <div className="board-row">
        {renderSquares(0)}
        {renderSquares(1)}
        {renderSquares(3)}
      </div>
      <div className="board-row">
        {renderSquares(3)}
        {renderSquares(4)}
        {renderSquares(5)}
      </div>
      <div className="board-row">
        {renderSquares(6)}
        {renderSquares(7)}
        {renderSquares(8)}
      </div>
    </div>
  )

}