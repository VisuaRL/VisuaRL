import React from 'react';
import { useForm } from 'react-hook-form';

function Trainer(props) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <div className="form-group">
        <label>Gamma (0 to 1)</label>
        <input className="form-control"
          name="gamma"
          type="number"
          defaultValue="0"
          min="0"
          max="1"
          step="0.001"
          ref={register({ min: 0, max: 1 })} />
      </div>

      <div className="form-group">
        <label>Alpha (0 to 1)</label>
        <input className="form-control"
          name="alpha"
          type="number" 
          defaultValue="0" 
          min="0"
          max="1"
          step="0.001" 
          ref={register({ min: 0, max: 1 })} />
      </div>
      <button type="submit" className="btn btn-primary">Train</button>
    </form>
  )
}

export default Trainer;