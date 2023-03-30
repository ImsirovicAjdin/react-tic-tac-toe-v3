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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  const [board, setBoard] = useState(emptyBoard);
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  function handleClick(index) {
    const newBoard = [...board];
    if (board[index] === null && !winner) {
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(player === 'X' ? 'O' : 'X');

      const winner = calculateWinner(newBoard);
      if (winner) {
        setWinner(winner);
      } else if (!newBoard.includes(null)) {
        setWinner('draw');
      }
    }
  }

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${player}`;
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
    setWinner(null);
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <h2>{status}</h2>
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
      {winner && (
        <button className="reset-button" onClick={resetGame}>
          Reset
        </button>
      )}
    </div>
  );
}

export default App;
