import React from 'react';
function MazeControlBottom(props) {
  // Handlers
  const handleReset = (e) => {
    e.preventDefault();
    props.onReset();
  }

  const handleFinish = (e) => {
    e.preventDefault();
  }

  return (
    <div className="maze-controls-2 d-flex justify-content-center">
      <button className="btn btn-sm btn-outline-primary" onClick={handleReset}>Back</button>
      <span className="mr-2 ml-2">Training stages</span>
      <button className="btn btn-sm btn-outline-primary" onClick={handleFinish}>Next</button>
    </div>
  );
}

export default MazeControlBottom;