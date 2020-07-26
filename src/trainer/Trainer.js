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
    alpha: 0.5,
    epsilonDecay: 0.995,
    rewardScale: 1
  };
  const {
    register,
    handleSubmit,
    watch,
    setError,
    errors,
    clearErrors
  } = useForm({
    defaultValues
  });

  // Validation
  const matrix = useSelector(state => state.maze.matrix);
  let algo = watch("algo");
  let gamma = watch("gamma");
  let alpha = watch("alpha");
  let epsilonDecay = watch("epsilonDecay");
  let rewardScale = watch("rewardScale");
  let alphaDisabled = !validateAlpha(algo);

  // Submit
  const dispatch = useDispatch();
  const onSubmit = e => {
    if (validateMatrix(matrix)) {
      clearErrors("matrix");
    } else {
      setError("matrix", {
        type: "manual",
        message: "Maze must have 1 start and at least 1 end."
      });
    }
    const submit = data => dispatch(requestTraining(matrix, data));
    handleSubmit(submit)(e);
  };

  return (
    <div>
      <h2>Trainer</h2>
      <h6 className="mb-3">Train model to solve maze</h6>
      <form className="trainer-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label>Algorithm</label>
          <select className="custom-select" name="algo" ref={register}>
            <option value="dp">Dynamic programming</option>
            <option value="ql">Q-learning</option>
            <option value="sarsa">SARSA</option>
          </select>
        </div>

        <fieldset>
          <div className="form-group">
            <label>Gamma - {Math.round((gamma / 1) * 100)}%</label>
            <input
              className="form-control-range"
              name="gamma"
              type="range"
              min="0"
              max="1"
              step="0.05"
              ref={register({ min: 0, max: 1 })}
            />
            <small className="form-text">
              How much importance is put on future rewards over immediate ones?
            </small>
          </div>

          <div className="form-group">
            <label>
              Alpha -{" "}
              {alphaDisabled ? "N/A" : Math.round((alpha / 1) * 100) + "%"}
            </label>
            <input
              className="form-control-range"
              disabled={alphaDisabled}
              name="alpha"
              type="range"
              min="0"
              max="1"
              step="0.05"
              ref={register({ min: 0, max: 1 })}
            />
            <small className="form-text">
              How much importance is put on integrating new experiences into its
              value estimates?
            </small>
          </div>

          <div className="form-group">
            <label>
              Epsilon decay - {alphaDisabled ? "N/A" : epsilonDecay}
            </label>
            <input
              className="form-control-range"
              disabled={alphaDisabled}
              name="epsilonDecay"
              type="range"
              min="0.9"
              max="1"
              step="0.005"
              ref={register({ min: 0.9, max: 1 })}
            />
            <small className="form-text">SOMETHING SOMETHING EPSILON</small>
          </div>

          <div className="form-group">
            <label>Reward scale - {rewardScale}x</label>
            <input
              className="form-control-range"
              name="rewardScale"
              type="range"
              min="1"
              max="10"
              step="1"
              ref={register({ min: 0, max: 1 })}
            />
            <small className="form-text">
              Make rewards bigger. Useful when gamma is small.
            </small>
          </div>
        </fieldset>

        <button type="submit" className="btn btn-primary">
          Train
        </button>
        {errors.matrix && <p className="errorMsg">{errors.matrix.message}</p>}
      </form>
    </div>
  );
}

function validateMatrix(matrix) {
  let start = false;
  let end = false;
  matrix.forEach(r => {
    if (r.includes(Status.START)) {
      start = true;
    }

    if (r.includes(Status.END)) {
      end = true;
    }
  });
  return start && end;
}

function validateAlpha(algo) {
  if (algo === "ql" || algo === "sarsa") {
    return true;
  } else {
    return false;
  }
}

export default Trainer;
