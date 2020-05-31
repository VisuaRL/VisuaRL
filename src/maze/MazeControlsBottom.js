import React from 'react';
function MazeControlBottom(props) {
  let { currentStage, totalStages } = props;

  // Validation
  let prevDisabled = prevValidation(currentStage);
  let nextDisabled = nextValidation(currentStage, totalStages);

  return (
    <div className="maze-controls-2 d-flex justify-content-center">
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


export default MazeControlBottom;