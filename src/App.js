import React, { useState } from 'react';

const emptyBoard = Array(9).fill(null);
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(squares) {
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
    const [a,b,c] = WINNING_COMBINATIONS[i];
    console.warn(a,b,c);
    console.log(squares[a], squares[b], squares[c]);

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log('All three are the same!', squares[a]);
      return squares[a];
    }
  }
  return null;
}

function App() {
  const [board, setBoard] = useState(emptyBoard);
  const [player, setPlayer] = useState('X');

  function handleClick(index) {
    console.log(index);
    const newBoard = [...board];
    if (board[index] === null) {
      newBoard[index] = player;
      console.log(newBoard[index]);
      setBoard(newBoard);
      setPlayer(player === 'X' ? 'O' : 'X');

      calculateWinner(newBoard);
    }
  }

  function renderSquare(index){
    return (
        <button className="square" onClick={() => handleClick(index)}>
          {board[index]}
        </button>
    )
  }

  function resetGame() {
    setBoard(emptyBoard);
    setPlayer('X');
    console.log(`setWinner(null)`);
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <h2>Status message</h2>
      <div className="board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="reset-button" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
}

export default App;
