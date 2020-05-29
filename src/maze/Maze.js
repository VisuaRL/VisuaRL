import React from 'react';
import Square from './Square'
import Status from './StatusEnum';

function Maze(props) {
  // Setup
  const matrix = props.matrix;
  const marker = props.marker;

  // Event handler
  const nextStatus = (value) => {
    // If marker selected
    if(marker == Status.START || marker == Status.END) {
      let result = marker;
      props.resetMarker();
      return result;
    }

    // If no marker
    switch (value) {
      case Status.EMPTY: return Status.FILLED;
      case Status.FILLED: return Status.EMPTY;
      case Status.START: return Status.EMPTY;
      case Status.END: return Status.EMPTY;
      default: return Status.EMPTY;
    }
  }

  const handleEnter = (e, x, y, value) => {
    e.preventDefault();
    if (e.buttons === 1) {
      props.onMouseEnter(x, y, nextStatus(value));
    }
  }

  // Rendering
  const display = matrix.map((row, x) =>
    <div key={x} className="row">
      {row.map((value, y) =>
        <div key={y} className="col special">
          <Square
            value={value}
            onMouseEnter={(e) => handleEnter(e, x, y, value)} />
        </div>)}
    </div>);

  return (
    <div className="maze container">
      {display}
    </div>
  );
}


export default Maze;