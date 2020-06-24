import React from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { changeDisplay, prevStage, nextStage } from '../redux/trainer';

function MazeStages() {
  // Setup
  const display = useSelector(state => state.trainer.display);
  const currentStage = useSelector(state => state.trainer.stage + 1);
  const totalStages = useSelector(state => state.trainer.values.length);

  const dispatch = useDispatch();

  // Validation
  let prevDisabled = prevValidation(currentStage);
  let nextDisabled = nextValidation(currentStage, totalStages);

  return (
    <div className="maze-controls-2 d-flex justify-content-between">
      <ToggleButtonGroup type="radio" name="options" value={display} onChange={value => dispatch(changeDisplay(value))}>
        <ToggleButton variant="info" size="sm" value="values">Values</ToggleButton>
        <ToggleButton variant="info" size="sm" value="arrows">Arrows</ToggleButton>
      </ToggleButtonGroup>
      <div>
        <button className="btn btn-sm btn-outline-primary"
          disabled={prevDisabled}
          onClick={() => dispatch(prevStage())}>
          Back
        </button>
        <span className="mr-2 ml-2">Training stage {currentStage}/{totalStages}</span>
        <button className="btn btn-sm btn-outline-primary"
          disabled={nextDisabled}
          onClick={() => dispatch(nextStage())}>
          Next
        </button>
      </div>
    </div>
  );
}

function prevValidation(current) {
  let disabled = false;
  if (current === 1) {
    disabled = true;
  }
  return disabled;
}

function nextValidation(current, total) {
  let disabled = false;
  if (current >= total) {
    disabled = true;
  }
  return disabled;
}


export default MazeStages;