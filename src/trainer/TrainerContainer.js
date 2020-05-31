import React from 'react';
import './TrainerContainer.css';
import { useSelector, useDispatch } from 'react-redux'
import { train } from './TrainerActions'
import { resetStage } from '../maze/MazeActions'

import Trainer from'./Trainer'

function TrainerContainer() {
  // Setup
  const matrix = useSelector(state => state.maze.matrix);
  const dispatch = useDispatch();

  return (
    <Trainer onSubmit={data => {
      dispatch(resetStage());
      dispatch(train(matrix, data))
    }}/>
  );
}

export default TrainerContainer;