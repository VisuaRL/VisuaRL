import React, { useRef, useEffect } from "react";
import Square from "./square/Square";
import { useSelector, useDispatch } from "react-redux";
import { updateSquare } from "../redux/maze";
import { agentUp, agentDown, agentLeft, agentRight } from "../redux/trainer";
import ValueContent from "./square/ValueContent";
import ArrowContent from "./square/ArrowContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MazeGrid() {
  // Setup
  const matrix = useSelector(state => state.maze.matrix);
  const display = useSelector(state => state.trainer.display);
  const values = useSelector(state => state.trainer.values);
  const arrows = useSelector(state => state.trainer.arrows);
  const qTable = useSelector(state => state.trainer.qTable);
  const agent = useSelector(state => state.trainer.agent);
  const stage = useSelector(state => state.trainer.stage);
  const dispatch = useDispatch();

  // Event handler
  const handleEnter = (e, x, y, status) => {
    e.preventDefault();
    if ((values.length === 0) & (e.buttons === 1)) {
      dispatch(updateSquare({ x, y, status }));
    }
  };

  //Agent
  useInterval(() => {
    if (display === "qTable") {
      let current = qTable[stage][agent.x][agent.y];
      let dir = argMax(current);
      console.log("STAGE" + stage);
      switch (dir) {
        case Direction.UP:
          dispatch(agentUp());
          break;
        case Direction.DOWN:
          dispatch(agentDown());
          break;
        case Direction.LEFT:
          dispatch(agentLeft());
          break;
        case Direction.RIGHT:
          dispatch(agentRight());
          break;
        default:
          console.error("no direction");
      }
    }
  }, 200);

  // Render
  const renderContent = (x, y) => {
    switch (display) {
      case "values":
        return <ValueContent value={values[stage][x][y]} />;
      case "arrows":
        return <ArrowContent arrow={arrows[stage][x][y]} />;
      case "qTable":
        if (x === agent.x && y === agent.y) {
          return <FontAwesomeIcon icon="robot" />;
        }
      default:
        return;
    }
  };

  return (
    <div className="maze container">
      {matrix.map((row, x) => (
        <div key={x} className="row">
          {row.map((status, y) => (
            <div key={y} className="col special">
              <Square
                status={status}
                onMouseEnter={e => handleEnter(e, x, y, status)}
              >
                {renderContent(x, y)}
              </Square>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * Code for agent
 */
const Direction = { UP: 0, DOWN: 1, LEFT: 2, RIGHT: 3 };

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function argMax(arr) {
  // // copy array
  // let arr = array.slice();

  // //Remove illegal moves
  // for (let i = 0; i < illegal.length; i++) {
  //   let move = illegal[i];
  //   arr[move] = -99999;
  // }
  console.log(arr);

  // Find max
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Look for all max indexes
  let maxIndexes = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === max) {
      maxIndexes.push(j);
    }
  }

  // Pick index at random
  let index = maxIndexes[Math.floor(Math.random() * maxIndexes.length)];
  return index;
}

export default MazeGrid;
// function checkIllegalMoves(x, y, matrix) {
//   const up = x > 0 ? matrix[x - 1][y] : undefined;
//   const down = x < matrix.length ? matrix[x + 1][y] : undefined;
//   const left = y > 0 ? matrix[x][y - 1] : undefined;
//   const right = y < matrix.length ? matrix[x][y + 1] : undefined;

//   let illegalArr = [];
//   if (up === undefined || up === 0) {
//     illegalArr.push(Direction.UP);
//   }

//   if (down === undefined || down === 0) {
//     illegalArr.push(Direction.DOWN);
//   }

//   if (left === undefined || left === 0) {
//     illegalArr.push(Direction.LEFT);
//   }

//   if (right === undefined || right === 0) {
//     illegalArr.push(Direction.RIGHT);
//   }
//   return illegalArr;
// }
