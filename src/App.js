import React, { useState } from 'react';

const emptyBoard = Array(9).fill(null);

function App() {
  const [board, setBoard] = useState(emptyBoard);
  function renderSquare(index){
    return (
        <button className="square" onClick={() => {}}>
          {index + 'a'}
        </button>
    )
  }

  function resetGame() {
    setBoard(emptyBoard);
    console.log(`setPlayer('X')`);
    console.log(`setWinner(null)`);
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <h2>{board.toString()}</h2>
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
