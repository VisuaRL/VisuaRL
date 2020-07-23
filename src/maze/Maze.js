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
      <h2>Maze</h2>
      <h6 className="mb-3">Design your own maze</h6>
      <MazeControls />
      <MazeGrid />
      {isTrained && <MazeStages />}
    </div>
  );
}

export default Maze;