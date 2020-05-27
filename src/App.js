import React from 'react';
import './App.css';
import MazeContainer from './maze/MazeContainer'

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">VisuaRL</span>
      </nav>
      <MazeContainer/>
    </div>
  );
}

export default App;