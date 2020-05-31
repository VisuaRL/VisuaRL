import React from 'react';
import './MazeContainer.css';
import Maze from './Maze'
import MazeControlTop from './MazeControlTop'
import MazeControlBottom from './MazeControlsBottom'

import { useSelector, useDispatch } from 'react-redux'
import { incrementSize, decrementSize, updateSquare, startMarker, endMarker, resetMarker, reset, prevStage, nextStage } from './MazeActions'

function MazeContainer() {
  // Setup
  const matrix = useSelector(state => state.maze.matrix);
  const marker = useSelector(state => state.maze.marker);
  const values = useSelector(state => state.trainer.values);
  const stage = useSelector(state => state.maze.stage);
  const dispatch = useDispatch();

  return (
    <div>
      <MazeControlTop
        size={matrix.length}
        onIncrement={() => dispatch(incrementSize())}
        onDecrement={() => dispatch(decrementSize())}
        onStart={() => dispatch(startMarker())}
        onEnd={() => dispatch(endMarker())}
        onReset={() => dispatch(reset())}
        />
      <Maze
        matrix={matrix}
        marker={marker}
        values={values}
        currentIndex={stage}
        resetMarker={() => dispatch(resetMarker())}
        onMouseEnter={(x, y, value) => dispatch(updateSquare(x, y, value))}
        />
      <MazeControlBottom
        totalStages={values.length}
        currentStage={stage+1}
        prevStage={() => dispatch(prevStage())}
        nextStage={() => dispatch(nextStage())}
        />
    </div>
  );
}

export default MazeContainer;