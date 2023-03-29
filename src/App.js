import React, { useState } from 'react';

function App() {

  function renderSquare(){
    return (
        <button className="square" onClick={() => {}}>
          value
        </button>
    )
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {renderSquare()}
      </div>
    </div>
  );
}

export default App;
