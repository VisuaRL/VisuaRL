import React from 'react';
import Status from './StatusEnum';

const Square = React.memo(function Square(props) {
  let statusClass;
  let content;
  switch (props.status) {
    case Status.EMPTY:
      statusClass = "square empty";
      break;
    case Status.FILLED:
      statusClass = "square filled";
      break;
    case Status.START:
      statusClass = "square filled";
      content = "S"
      break;
    case Status.END:
      statusClass = "square filled";
      content = "E"
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
      <span className="marker">{content}</span>
    </div>
  )
})

export default Square;