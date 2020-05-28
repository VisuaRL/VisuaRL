import React from 'react';
import './TrainerContainer.css';
import { useSelector, useDispatch } from 'react-redux'

import Trainer from'./Trainer'

function TrainerContainer() {
  // Setup
  const dispatch = useDispatch();

  return (
    <Trainer/>
  );
}

export default TrainerContainer;