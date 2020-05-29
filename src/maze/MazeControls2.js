import React from 'react';
function MazeControls2(props) {
  // Handlers
  const handleReset = (e) => {
    e.preventDefault();
    props.onReset();
  }

  const handleFinish = (e) => {
    e.preventDefault();
  }

  return (
    <div className="maze-controls-2 d-flex justify-content-between">
      <button className="btn btn-sm btn-danger" onClick={handleReset}>Reset</button>
      <button className="btn btn-sm btn-success" onClick={handleFinish}>Finish</button>

    </div>
  );
}

export default MazeControls2;