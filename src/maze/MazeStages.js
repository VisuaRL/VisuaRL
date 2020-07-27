import React from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { changeDisplay, prevStage, nextStage } from "../redux/trainer";

function MazeStages() {
  // Setup
  const display = useSelector(state => state.trainer.display);
  let currentStage = useSelector(state => state.trainer.stage + 1);
  let totalStages = useSelector(state => state.trainer.totalStages);
  let totalEpisodes = useSelector(state => state.trainer.graphRewards.length);
  const dispatch = useDispatch();

  // Conversion
  let coefficient = 1;
  if (display === "qTable") {
    coefficient = totalEpisodes / totalStages;
    currentStage = Math.round(coefficient * currentStage);
    totalStages = totalEpisodes;
  }

  // Validation
  let prevDisabled = prevValidation(currentStage, Math.round(coefficient));
  let nextDisabled = nextValidation(currentStage, totalStages);

  return (
    <div className="maze-controls-2 d-flex justify-content-between">
      {(display === "values" || display === "arrows") && (
        <div>
          <ToggleButtonGroup
            type="radio"
            name="options"
            value={display}
            onChange={value => dispatch(changeDisplay(value))}
          >
            <ToggleButton variant="info" size="sm" value="values">
              Values
            </ToggleButton>
            <ToggleButton variant="info" size="sm" value="arrows">
              Arrows
            </ToggleButton>
          </ToggleButtonGroup>
          <p id="values-explanation">
            These are the state value estimates of every tile. An agent can use
            these values to take steps towards tiles with the highest value (arrows).
          </p>
        </div>
      )}
      <div>
        <button
          className="btn btn-sm btn-outline-primary"
          disabled={prevDisabled}
          onClick={() => dispatch(prevStage())}
        >
          Back
        </button>
        <span className="mr-2 ml-2">
          Training episode {currentStage}/{totalStages}
        </span>
        <button
          className="btn btn-sm btn-outline-primary"
          disabled={nextDisabled}
          onClick={() => dispatch(nextStage())}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function prevValidation(current, min) {
  let disabled = false;
  if (current === min) {
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
