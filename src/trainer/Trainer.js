import React from "react";
import "./Trainer.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { requestTraining } from "../redux/trainer";
import Status from "../constants/status";

function Trainer() {
  // Setup form
  const defaultValues = {
    algo: "dp",
    gamma: 1,
    alpha: 0.5
  };
  const { register, handleSubmit, watch, setError, errors, clearErrors } = useForm({
    defaultValues
  });

  // Validation
  const matrix = useSelector(state => state.maze.matrix);
  let algo = watch("algo");
  let gamma = watch("gamma");
  let alpha = watch("alpha");
  let alphaDisabled = !validateAlpha(algo);

  // Submit
  const dispatch = useDispatch();
  const onSubmit = e => {
    if (validateMatrix(matrix)) {
      clearErrors("matrix");
    } else {
      setError("matrix", {
        type: "manual",
        message: "Maze must have 1 start and 1 end."
      });
    }
    const submit = data => dispatch(requestTraining(matrix, data));
    handleSubmit(submit)(e);
  }

  return (
    <div>
      <h2>Trainer</h2>
      <h6 className="mb-3">Train model to solve maze</h6>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Algorithm</label>
          <select className="custom-select" name="algo" ref={register}>
            <option value="dp">Dynamic programming</option>
            <option value="ql">Q-learning</option>
          </select>
        </div>

        <div className="form-group">
          <label>Gamma - {(gamma / 1) * 100}%</label>
          <input
            className="form-control-range"
            name="gamma"
            type="range"
            min="0"
            max="1"
            step="0.1"
            ref={register({ min: 0, max: 1 })}
          />
          <small className="form-text">
            How much importance is put on future rewards over immediate ones?
          </small>
        </div>

        <div className="form-group">
          <label>
            Alpha - {alphaDisabled ? "N/A" : (alpha / 1) * 100 + "%"}
          </label>
          <input
            className="form-control-range"
            disabled={alphaDisabled}
            name="alpha"
            type="range"
            min="0"
            max="1"
            step="0.1"
            ref={register({ min: 0, max: 1 })}
          />
          <small className="form-text">
            How much importance is put on integrating new experiences into its
            value estimates?
          </small>
        </div>

        <button type="submit" className="btn btn-primary">
          Train
        </button>
        {errors.matrix && <p className="errorMsg">{errors.matrix.message}</p>}
      </form>
    </div>
  );
}

function validateMatrix(matrix) {
  let startCounter = 0;
  let endCounter = 0;
  matrix.forEach(r => {
    if (r.includes(Status.START)) {
      startCounter++;
    } else if (r.includes(Status.END)) {
      endCounter++;
    }
  });
  return startCounter === 1 && endCounter === 1;
}

function validateAlpha(algo) {
  if (algo === "ql") {
    return true;
  } else {
    return false;
  }
}

export default Trainer;
