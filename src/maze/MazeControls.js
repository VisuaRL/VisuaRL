import React from 'react';

function MazeControls(props) {
  let minusDisabled = minusValidation(props.size);
  let plusDisabled = plusValidation(props.size);

  return (
    <form>
      <div className="form-group size-group">
        <label>Size</label>
        <div>
          <button className="btn btn-sm btn-outline-primary"
            onClick={(e) => props.onSizeChange(e, props.size - 1)}
            disabled={minusDisabled}>
            -
          </button>
          <span>{props.size}</span>
          <button className="btn btn-sm btn-outline-primary"
            onClick={(e) => props.onSizeChange(e, props.size + 1)}
            disabled={plusDisabled}>
            +
          </button>
        </div>
      </div>
      <div className="form-group marker-group">
        <label>Markers</label>
        <div>
          <button type="button" class="btn btn-primary mr-2">Start</button>
          <button type="button" class="btn btn-success">End</button>
        </div>
      </div>
      <div className="form-group edit-group">
        <label>Edit</label>
        <div>
          <button type="button" class="btn btn-secondary mr-2">Undo</button>
          <button type="button" class="btn btn-danger">Reset</button>
        </div>
      </div>
    </form>
  );
}

function minusValidation(size) {
  let disabled = false;
  if (size == 5) {
    disabled = true;
  }
  return disabled;
}

function plusValidation(size) {
  let disabled = false;
  if (size == 15) {
    disabled = true;
  }
  return disabled;
}



export default MazeControls;