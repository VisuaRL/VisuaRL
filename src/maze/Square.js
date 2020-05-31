import React from 'react';
import Status from './StatusEnum';
import { useSpring, animated } from 'react-spring'

const Square = React.memo(function Square(props) {
  // Animations
  const spring = useSpring({
    value: round(props.value),
    delay: 0,
    config: {friction: 22, clamp: true}
  });

  let statusClass;
  switch (props.status) {
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
      <animated.span className="value">
        {props.value && spring.value.interpolate(n => round(n))}
      </animated.span>
    </div>
  )
})

function round(value) {
  if (isNaN(value)) {
    return value;
  } else {
    return Number(value).toFixed(3);
  }
}

export default Square;