import React from 'react';
function MazeControls(props) {
  // Setup
  let { isTrained, size } = props;

  // Validation
  let minusDisabled = minusValidation(size);
  let plusDisabled = plusValidation(size);

  return (
    <div className="maze-controls d-flex justify-content-between">
      {isTrained && 
        <button className="btn btn-sm btn-primary" onClick={props.resetMaze}>
          New maze
        </button>}
      {!isTrained &&
        <div>
          <span className="size-group mr-2">
            <button className="btn btn-sm btn-outline-primary"
              onClick={props.onDecrement}
              disabled={minusDisabled}>
              -
            </button>
            <span>{size} x {size}</span>
            <button className="btn btn-sm btn-outline-primary"
              onClick={props.onIncrement}
              disabled={plusDisabled}>
              +
            </button>
          </span>
          <span className="marker-group">
              <button className="btn btn-sm btn-success mr-2" onClick={props.onStart}>Start</button>
              <button className="btn btn-sm btn-danger" onClick={props.onEnd}>End</button>
          </span>
        </div>
      }
      {!isTrained && 
        <button className="btn btn-sm btn-primary" onClick={props.onClear}>Clear</button>
      }
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

export default MazeControls;