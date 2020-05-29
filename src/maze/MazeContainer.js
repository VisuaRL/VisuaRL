import React from 'react';
import './MazeContainer.css';
import Maze from './Maze'
import MazeControls from './MazeControls'
import MazeControls2 from './MazeControls2'

import { useSelector, useDispatch } from 'react-redux'
import { incrementSize, decrementSize, updateSquare, startMarker, endMarker, resetMarker, save, reset } from './MazeActions'

function MazeContainer() {
  // Setup
  const matrix = useSelector(state => state.maze.matrix);
  const marker = useSelector(state => state.maze.marker);
  const dispatch = useDispatch();

  return (
    <div>
      <MazeControls
        size={matrix.length}
        onIncrement={() => dispatch(incrementSize())}
        onDecrement={() => dispatch(decrementSize())}
        onStart={() => dispatch(startMarker())}
        onEnd={() => dispatch(endMarker())}
        />
      <Maze
        matrix={matrix}
        marker={marker}
        resetMarker={() => dispatch(resetMarker())}
        onMouseEnter={(x, y, value) => dispatch(updateSquare(x, y, value))}
        />
      <MazeControls2
        onReset={() => dispatch(reset())}
        />
    </div>
  );
}

export default MazeContainer;