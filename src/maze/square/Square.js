import React from 'react';
import Status from '../../constants/status';

function Square(props) {
  let { status } = props;
  let statusClass = getStatusClass(status);

  return (
    <div
      className={statusClass}
      onMouseDown={props.onMouseEnter}
      onMouseEnter={props.onMouseEnter}>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

function getStatusClass(status) {
  let statusClass;
  switch (status) {
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
  return statusClass;
}

export default Square;