import React from 'react';
import './TrainerContainer.css';
import { useSelector, useDispatch } from 'react-redux'
import { train, test } from './TrainerActions'

import Trainer from'./Trainer'

function TrainerContainer() {
  // Setup
  const matrix = useSelector(state => state.maze.matrix);
  const dispatch = useDispatch();

  dispatch(test());

  return (
    <Trainer onSubmit={data => dispatch(train(matrix, data))}/>
  );
}

export default TrainerContainer;