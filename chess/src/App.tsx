import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import './App.css';
import Board from './chess-board/Board';

function App() {
  return (
    <div className="container">
      <Board/>
    </div>
  );
}

export default App;
