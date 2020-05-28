import React from 'react';
function MazeControls(props) {
  // Setup
  let size = props.size;

  // Validation
  let minusDisabled = minusValidation(size);
  let plusDisabled = plusValidation(size);

  // Handlers
  const onDecrement = (e) => {
    e.preventDefault();
    props.onDecrement();
  }

  const onIncrement = (e) => {
    e.preventDefault();
    props.onIncrement();
  }

  const handleStart = (e) => {
    e.preventDefault();
  }

  const handleEnd = (e) => {
    e.preventDefault();
  }

  const handleUndo = (e) => {
    e.preventDefault();
    props.onUndo();
  }

  const handleReset = (e) => {
    e.preventDefault();
    props.onReset();
  }

  return (
    <div className="maze-controls d-flex justify-content-between">
      <span className="marker-group">
          <button className="btn btn-sm btn-primary mr-2">Start</button>
          <button className="btn btn-sm btn-success">End</button>
      </span>
      <span className="size-group">
        <button className="btn btn-sm btn-outline-primary"
          onClick={onDecrement}
          disabled={minusDisabled}>
          -
        </button>
        <span>{size}</span>
        <button className="btn btn-sm btn-outline-primary"
          onClick={onIncrement}
          disabled={plusDisabled}>
          +
        </button>
      </span>
      <span className="edit-group">
          <button className="btn btn-sm btn-secondary mr-2" onClick={handleUndo}>Undo</button>
          <button className="btn btn-sm btn-danger" onClick={handleReset}>Reset</button>
      </span>
    </div>
  );
}

function minusValidation(size) {
  let disabled = false;
  if (size == 5) {
    disabled = true;
  }
  return disabled;
}

function plusValidation(size) {
  let disabled = false;
  if (size == 15) {
    disabled = true;
  }
  return disabled;
}



export default MazeControls;