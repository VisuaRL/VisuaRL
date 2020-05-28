import React from 'react';
import { useForm } from 'react-hook-form';

function Trainer(props) {
  const { register } = useForm();

  return (
    <form onSubmit={props.onSubmit}>
      <label>Gamma</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <input className="form-control" type="text"/>
        </div>
        <input className="custom-range"
          name="gamma"
          type="range"
          min="0"
          max="1"
          step="0.005"
          defaultValue="0"
          ref={register}/>
      </div>
      
      <label>Alpha</label>
      <div className="input-group">
        <input className="form-control" type="text"/>
        <input className="custom-range"
          name="alpha"
          type="range"
          min="0"
          max="1"
          step="0.05" 
          defaultValue="0"
          ref={register}/>
      </div>
      <button type="submit" className="btn btn-primary">Train</button>
    </form>
  )
}

export default Trainer;