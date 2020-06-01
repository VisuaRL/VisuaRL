import React from 'react';
import './MazeContainer.css';
import Maze from './Maze'
import MazeControls from './MazeControls'
import MazeTraining from './MazeTraining'

import { useSelector, useDispatch } from 'react-redux'
import { incrementSize, decrementSize, updateSquare, startMarker, endMarker, resetMarker, clearMaze } from './MazeActions'
import { trainerReset, trainerDisplay, prevStage, nextStage, resetStage } from '../trainer/TrainerActions'

function MazeContainer() {
  // Setup
  const matrix = useSelector(state => state.maze.matrix);
  const marker = useSelector(state => state.maze.marker);
  const values = useSelector(state => state.trainer.values);
  const arrows = useSelector(state => state.trainer.arrows);
  const display = useSelector(state => state.trainer.display);
  const stage = useSelector(state => state.trainer.stage);
  const dispatch = useDispatch();

  return (
    <div>
      <MazeControls
        size={matrix.length}
        isTrained={values.length !== 0}
        resetMaze={() => {
          dispatch(clearMaze());
          dispatch(resetStage());
          dispatch(trainerReset());
        }}
        onIncrement={() => dispatch(incrementSize())}
        onDecrement={() => dispatch(decrementSize())}
        onStart={() => dispatch(startMarker())}
        onEnd={() => dispatch(endMarker())}
        onClear={() => dispatch(clearMaze())}
        />
      <Maze
        matrix={matrix}
        marker={marker}
        values={values}
        arrows={arrows}
        display={display}
        currentIndex={stage}
        resetMarker={() => dispatch(resetMarker())}
        onMouseEnter={(x, y, value) => dispatch(updateSquare(x, y, value))}
        />
      {values.length !== 0 && <MazeTraining
        display={display}
        changeDisplay={(d) => dispatch(trainerDisplay(d))}
        totalStages={values.length}
        currentStage={stage+1}
        prevStage={() => dispatch(prevStage())}
        nextStage={() => dispatch(nextStage())}
        />}
    </div>
  );
}

export default MazeContainer;