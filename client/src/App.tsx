import React from 'react';
import BoardContainer from './Board/visual/BoardContainer';
import './index.css'

function App() {
  return (
    <div className='board_background'>
      <h1>DnD Visualizer</h1>
      <BoardContainer />
    </div>
  );
}

export default App;
