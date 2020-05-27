import React, { useState } from 'react';
import './MazeContainer.css';
import Maze from './Maze'
import MazeControls from './MazeControls'

function MazeContainer() {
  // Setup
  const [size, setSize] = useState(10);

  const handleSize = (e, size) => {
    e.preventDefault();
    setSize(size);
  }

  return (
    <div className="container">
    
      <h2>Create maze</h2>
      <div className="row">
        <div className="col-lg">
          <Maze size={size}/>
        </div>
        <div className="col-sm">
          <MazeControls size={size}
                        onSizeChange={handleSize}
                        onUndo={handleUndo}
                        onReset={handleReset} />
        </div>
      </div>
      <div classname="row">
          <h2>Train model</h2>
      </div>
    </div>
  );
}

export default MazeContainer;