import React from 'react';
import './TrainerContainer.css';
import { useSelector, useDispatch } from 'react-redux'

import Trainer from'./Trainer'

function TrainerContainer() {
  // Setup
  const dispatch = useDispatch();

  // Handler
  const handleSubmit = () => {
    
  }

  return (
    <Trainer onSubmit={handleSubmit}/>
  );
}

export default TrainerContainer;