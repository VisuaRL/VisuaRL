import React from 'react';
import { useForm } from 'react-hook-form';
import { Popover, OverlayTrigger } from 'react-bootstrap';

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

  // Popover
  const gammaPop = (
    <Popover>
      <Popover.Title as="h3">Gamma</Popover.Title>
      <Popover.Content>
        Gamma (aka the discount factor) is a parameter that 
        controls how much importance the agent puts on future 
        rewards over immediate ones.
        0 (no importance) to 1 (max importance)
      </Popover.Content>
    </Popover>
  );

  return (
    <div className="mt-2">
    <h2> Trainer </h2>
      <form onSubmit={handleSubmit(props.onSubmit)}>
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
        <button type="submit" className="btn btn-primary">Train</button>
      </form>
    </div>
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