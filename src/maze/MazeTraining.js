import React from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

function MazeTraining(props) {
  // Setup
  let { display, currentStage, totalStages } = props;

  // Validation
  let prevDisabled = prevValidation(currentStage);
  let nextDisabled = nextValidation(currentStage, totalStages);

  return (
    <div className="maze-controls-2 d-flex justify-content-between">
      <ToggleButtonGroup type="radio" name="options" value={display} onChange={props.changeDisplay}>
        <ToggleButton variant="info" size="sm" value="values">Values</ToggleButton>
        <ToggleButton variant="info" size="sm" value="arrows">Arrows</ToggleButton>
      </ToggleButtonGroup>
      <div>
        <button className="btn btn-sm btn-outline-primary"
          disabled={prevDisabled}
          onClick={props.prevStage}>
          Back
        </button>
        <span className="mr-2 ml-2">Training stage {currentStage}/{totalStages}</span>
        <button className="btn btn-sm btn-outline-primary"
          disabled={nextDisabled}
          onClick={props.nextStage}>
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


export default MazeTraining;