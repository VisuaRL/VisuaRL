import React, { useState, useEffect } from 'react';

const StatusEnum = {
  EMPTY: 0, FILLED: 1, START: 2, END: 3
}

function Maze(props) {
  // Setup matrix in state
  const initialState = () => new Array(props.columns).fill(new Array(props.rows).fill(StatusEnum.EMPTY))
  const [matrix, setMatrix] = useState(initialState);

  const handleClick = (x, y, val) => {
    const mat = matrix.slice().map(c => c.slice());
    mat[x][y] = val;
    setMatrix(mat);
  };

  const rows = matrix.map((row, x) =>
    <div key={x} className="row">
      {row.map((value, y) =>
        <div key={y} className="col">
          <Square x={x} y={y} value={value} onClick={handleClick} />
        </div>)}
    </div>);

  return (
    <div className="maze container">
      {rows}
    </div>
  );
}

const Square = React.memo(function Square(props) {
  let valClass;
  switch(props.value) {
    case StatusEnum.FILLED:
      valClass = "square filled";
      break;
    case StatusEnum.START:
      valClass = "square start";
      break;
    case StatusEnum.END:
      valClass = "square end";
      break;
    default:
      valClass = "square empty";
  }

  return (
    <div className={valClass} onClick={() => props.onClick(props.x, props.y, StatusEnum.FILLED)}></div>
  )
})

export default Maze;