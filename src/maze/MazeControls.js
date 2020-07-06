import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { incrementSize, decrementSize, startMarker, endMarker, clearMaze, defaultMaze } from '../redux/maze';
import { resetTrainer } from '../redux/trainer'; 

function MazeControls() {
  // Setup
  const isTrained = useSelector(state => state.trainer.display !== "none");
  const size = useSelector(state => state.maze.matrix.length);
  const dispatch = useDispatch();

  // Validation
  let minusDisabled = minusValidation(size);
  let plusDisabled = plusValidation(size);

  // Reset
  function newMaze() {
    dispatch(defaultMaze());
    dispatch(resetTrainer());
  }

  return (
    <div className="maze-controls d-flex justify-content-between">
      {isTrained && 
        <button className="btn btn-sm btn-primary" onClick={newMaze}>
          New maze
        </button>}
      {!isTrained &&
        <div>
          <span className="size-group mr-2">
            <button className="btn btn-sm btn-outline-primary"
              onClick={() => dispatch(decrementSize())}
              disabled={minusDisabled}>
              -
            </button>
            <span>{size} x {size}</span>
            <button className="btn btn-sm btn-outline-primary"
              onClick={() => dispatch(incrementSize())}
              disabled={plusDisabled}>
              +
            </button>
          </span>
          <span className="marker-group">
              <button className="btn btn-sm btn-success mr-2" onClick={() => dispatch(startMarker())}>Start</button>
              <button className="btn btn-sm btn-danger" onClick={() => dispatch(endMarker())}>End</button>
          </span>
        </div>
      }
      {!isTrained && 
        <button className="btn btn-sm btn-primary" onClick={() => dispatch(clearMaze())}>Clear</button>
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