import React from 'react';
import Square from './Square'
import {nextStatus} from './StatusEnum'

function Maze(props) {
  // Setup
  const matrix = props.matrix;

  // Event handler
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
        <div key={y} className="col">
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