import React from 'react';
import Status from './StatusEnum';

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

export default Square;