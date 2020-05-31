import React from 'react';
import Square from './Square'
import Status from './StatusEnum';

function Maze(props) {
  // Setup
  const matrix = props.matrix;
  const marker = props.marker;
  const values = props.values;

  const current = values[values.length - 1];

  // Event handler
  const nextStatus = (status) => {
    // If marker selected
    if(marker === Status.START || marker === Status.END) {
      let result = marker;
      props.resetMarker();
      return result;
    }

    // If no marker
    switch (status) {
      case Status.EMPTY: return Status.FILLED;
      case Status.FILLED: return Status.EMPTY;
      case Status.START: return Status.EMPTY;
      case Status.END: return Status.EMPTY;
      default: return Status.EMPTY;
    }
  }

  const handleEnter = (e, x, y, status) => {
    e.preventDefault();
    if (e.buttons === 1) {
      props.onMouseEnter(x, y, nextStatus(status));
    }
  }

  // Rendering
  const display = matrix.map((row, x) =>
    <div key={x} className="row">
      {row.map((status, y) =>
        <div key={y} className="col special">
          <Square
            status={status}
            value={values.length !== 0 && current[x][y]}
            onMouseEnter={(e) => handleEnter(e, x, y, status)} />
        </div>)}
    </div>);

  return (
    <div className="maze container">
      {display}
    </div>
  );
}


export default Maze;