import React from "react";
import "./Maze.css";
import MazeGrid from "./MazeGrid";
import MazeControls from "./MazeControls";
import MazeStages from "./MazeStages";

import { useSelector } from "react-redux";

function Maze() {
  const isTrained = useSelector(state => state.trainer.display !== "none");

  return (
    <div>
      <h2>Maze designer</h2>
      <h6 className="mb-3">
        Legend -&nbsp;
        <span class="badge badge-legend-border mr-2">Path</span>
        <span class="badge badge-legend-border badge-boundary mr-2">Boundary</span>
      </h6>
      <MazeControls />
      <MazeGrid />
      {isTrained && <MazeStages />}
    </div>
  );
}

export default Maze;
