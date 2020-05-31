import React from 'react';
import { useForm } from 'react-hook-form';

function Trainer(props) {
  // Setup
  const defaultValues = {
    algo: "dp",
    gamma: 0,
    alpha: 0
  };
  const { register, watch, handleSubmit } = useForm({defaultValues});

  // Disable inputs based on algo selection
  let algo = watch("algo");
  let alphaDisabled = validateAlpha(algo);

  return (
    <form noValidate className="needs-validation" onSubmit={handleSubmit(props.onSubmit)}>
      <div className="form-group">
        <label>Algorithm</label>
        <select className="custom-select" 
        name="algo"
        ref={register}>
          <option value="dp">Dynamic programming</option>
          <option value="sa">State-action</option>
        </select>
      </div>

      <div className="form-group">
        <label>Gamma<br/>(0 to 1)</label>
        <input className="form-control"
          name="gamma"
          type="number"
          min="0"
          max="1"
          step="0.001"
          ref={register({ min: 0, max: 1 })} />
        <div className="invalid-feedback">
          Value must be between 0 and 1
        </div>
      </div>

      <div className="form-group">
        <label>Alpha<br/>(0 to 1)</label>
        <input className="form-control"
          disabled={alphaDisabled}
          name="alpha"
          type="number" 
          min="0"
          max="1"
          step="0.001" 
          ref={register({ min: 0, max: 1 })} />
      </div>
      <div className="invalid-feedback">
        Value must be between 0 and 1
      </div>
      <button type="submit" className="btn btn-primary">Train</button>
    </form>
  )
}

function validateAlpha(algo) {
  if(algo === "dp") {
    return true;
  } else {
    return false;
  }
}

export default Trainer;