import React from 'react';
import './Maze.css';
import MazeGrid from './MazeGrid'
import MazeControls from './MazeControls'
import MazeStages from './MazeStages'

import { useSelector } from 'react-redux'

function Maze() {
  const isTrained = useSelector(state => state.trainer.values.length !== 0);
  console.log(isTrained);

  return (
    <div>
      <MazeControls/>
      <MazeGrid/>
      {isTrained && <MazeStages/>}
    </div>
  );
}

export default Maze;