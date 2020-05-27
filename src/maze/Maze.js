import React, { useState, useEffect } from 'react';

const Status = {
  EMPTY: 0, FILLED: 1, START: 2, END: 3
}

function nextStatus(value) {
  switch (value) {
    case Status.EMPTY: return Status.FILLED;
    case Status.FILLED: return Status.EMPTY;
    case Status.START: return Status.END;
    case Status.END: return Status.START;
    default: return Status.EMPTY;
  }
}

function Maze(props) {
  // Setup
  const initial = () => new Array(props.size).fill(new Array(props.size).fill(Status.EMPTY));
  const [matrix, setMatrix] = useState(initial);

  // Matrix size update
  useEffect(() => {
    let mat;
    if (props.size < matrix.length) {
      mat = matrix.slice(0, props.size)
                  .map(c => c.slice(0, props.size));
      setMatrix(mat);
    } else if (props.size > matrix.length) {
      const diff = props.size - matrix.length;
      mat = matrix.map(c => c.concat(new Array(diff).fill(Status.EMPTY)))
                  .concat(new Array(diff).fill(new Array(props.size).fill(Status.EMPTY)));
      setMatrix(mat);
    }
  }, [props.size]);
  
  // Event handlers
  const handleClick = (x, y, value) => {
    const mat = matrix.slice().map(c => c.slice());
    mat[x][y] = nextStatus(value);
    setMatrix(mat);
  };

  const handleEnter = (e, x, y, value) => {
    e.preventDefault();
    if (e.buttons === 1) {
      handleClick(x, y, value);
    }
  }

  // Rendering
  const display = matrix.map((row, x) =>
    <div key={x} className="row">
      {row.map((value, y) =>
        <div key={y} className="col">
          <Square
            x={x}
            y={y}
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

const Square = React.memo(function Square(props) {
  let statusClass;
  switch (props.value) {
    case Status.EMPTY:
      statusClass = "square empty";
      break;
    case Status.FILLED:
      statusClass = "square filled";
      break;
    case Status.START:
      statusClass = "square start";
      break;
    case Status.END:
      statusClass = "square end";
      break;
    default:
      statusClass = "square";
  }

  return (
    <div
      className={statusClass}
      onMouseDown={props.onMouseEnter}
      onMouseEnter={props.onMouseEnter}
    >
    </div>
  )
})

export default Maze;