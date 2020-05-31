import React from 'react';
function MazeControlTop(props) {
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
    props.onStart();
  }

  const handleEnd = (e) => {
    e.preventDefault();
    props.onEnd();
  }

  const handleReset = (e) => {
    e.preventDefault();
    props.onReset();
  }

  return (
    <div className="maze-controls d-flex justify-content-between">
      <div>
        <span className="size-group mr-2">
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
        <span className="marker-group">
            <button className="btn btn-sm btn-info mr-2" onClick={handleStart}>Start</button>
            <button className="btn btn-sm btn-info" onClick={handleEnd}>End</button>
        </span>

      </div>
      <button className="btn btn-sm btn-danger" onClick={handleReset}>Clear</button>
    </div>
  );
}

function minusValidation(size) {
  let disabled = false;
  if (size === 5) {
    disabled = true;
  }
  return disabled;
}

function plusValidation(size) {
  let disabled = false;
  if (size === 15) {
    disabled = true;
  }
  return disabled;
}

export default MazeControlTop;