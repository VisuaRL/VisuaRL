import React from "react";
import Square from "./square/Square";
import { useSelector, useDispatch } from "react-redux";
import { updateSquare } from "../redux/maze";
import { agentUp, agentDown, agentLeft, agentRight } from "../redux/trainer";
import ValueContent from "./square/ValueContent";
import ArrowContent from "./square/ArrowContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Direction, checkStop, nextMove } from "./agent"
import { useInterval } from "../util"


function MazeGrid() {
  // Setup
  const matrix = useSelector(state => state.maze.matrix);
  const display = useSelector(state => state.trainer.display);
  const values = useSelector(state => state.trainer.values);
  const arrows = useSelector(state => state.trainer.arrows);
  const qTable = useSelector(state => state.trainer.qTable);
  const epsilon = useSelector(state => state.trainer.epsilon);
  const agent = useSelector(state => state.trainer.agent);
  const stage = useSelector(state => state.trainer.stage);
  const dispatch = useDispatch();

  // Event handler
  const handleEnter = (e, x, y, status) => {
    e.preventDefault();
    if ((display === "none") & (e.buttons === 1)) {
      dispatch(updateSquare({ x, y, status }));
    }
  };

  //Agent
  let agentDisplay = (display === "qTable");
  let stop = checkStop(agent, matrix);
  useInterval(() => {
    // Get current Q values and epsilon
    let currentQ = qTable[stage][agent.x][agent.y];
    let currentEps = epsilon[stage];

    // Make decision
    let dir = nextMove(currentQ, currentEps, agent, matrix);
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
  }, (agentDisplay && !stop) ? 200 : null);

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

export default MazeGrid;
