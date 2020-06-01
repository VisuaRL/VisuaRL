import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Status from './StatusEnum';

const Square = React.memo(function Square(props) {
  let { status, display, value, arrow } = props;

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

  return (
    <div
      className={statusClass}
      onMouseDown={props.onMouseEnter}
      onMouseEnter={props.onMouseEnter}>
      <div className="content">
        {(value && display==="values") &&
          <span>
            {round(value)}
          </span>
        }
        
        {(arrow && display==="arrows") &&
          <div className="arrows">
            {arrow.up && <FontAwesomeIcon icon="arrow-up" />}
            <div className="flex-br"/>
            {arrow.left && <FontAwesomeIcon icon="arrow-left" />}
            {arrow.right && <FontAwesomeIcon icon="arrow-right" />}
            <div className="flex-br"/>
            {arrow.down && <FontAwesomeIcon icon="arrow-down" />}
          </div>
        }
      </div>
    </div>
  )
})

function round(value) {
  if (isNaN(value)) {
    return "";
  } else {
    return Number(value).toFixed(3);
  }
}

export default Square;