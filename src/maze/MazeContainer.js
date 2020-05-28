import React from 'react';
import './MazeContainer.css';
import Maze from './Maze'
import MazeControls from './MazeControls'

import { useSelector, useDispatch } from 'react-redux'
import { incrementSize, decrementSize, updateSquare, undo, reset } from './MazeActions'

function MazeContainer() {
  // Setup
  const matrix = useSelector(state => state.maze);
  const dispatch = useDispatch();

  return (
    <div>
      <MazeControls
        size={matrix.length}
        onIncrement={() => dispatch(incrementSize())}
        onDecrement={() => dispatch(decrementSize())}
        onUndo={() => dispatch(undo())}
        onReset={() => dispatch(reset())}
        />
      <Maze
        matrix={matrix}
        onMouseEnter={(x, y, value) => dispatch(updateSquare(x, y, value))}
        />
    </div>
  );
}

export default MazeContainer;