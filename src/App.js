import React from 'react';
import './App.css';
import MazeContainer from './maze/MazeContainer'
import TrainingContainer from './trainer/TrainerContainer'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">VisuaRL</span>
      </nav>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-lg-6">
            <MazeContainer/>
          </div>
          <div className="col-md-2">
            <TrainingContainer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;