import React from "react";
import "./Trainer.css";
import { useForm } from "react-hook-form";
import { Modal, Popover, OverlayTrigger } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { requestTraining } from "../redux/trainer";

function Trainer() {
  // Setup form
  const defaultValues = {
    algo: "dp",
    gamma: 0.5,
    alpha: 0.5
  };
  const { register, watch, handleSubmit } = useForm({ defaultValues });

  // Validation
  let algo = watch("algo");
  let alphaDisabled = validateAlpha(algo);

  // Submit
  const matrix = useSelector(state => state.maze.matrix);
  const dispatch = useDispatch();
  const submit = data => dispatch(requestTraining(matrix, data));

  return (
    <div>
      <h2>Trainer</h2>
      <h6 className="mb-3">Solve the maze</h6>
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-group">
          <label>
            Algorithm
          </label>
          <select className="custom-select" name="algo" ref={register}>
            <option value="dp">Dynamic programming</option>
            <option value="ql">Q-learning</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            Gamma
            <OverlayTrigger
              trigger={["hover", "touch"]}
              placement="bottom"
              overlay={gammaPop}
            >
              <span className="ml-1 badge badge-light">?</span>
            </OverlayTrigger>
            <br />
            (0 to 1)
          </label>
          <input
            className="form-control"
            name="gamma"
            type="number"
            min="0"
            max="1"
            step="0.001"
            ref={register({ min: 0, max: 1 })}
          />
        </div>

        <div className="form-group">
          <label>
            Alpha
            <OverlayTrigger
              trigger={["hover", "touch"]}
              placement="bottom"
              overlay={alphaPop}
            >
              <span className="ml-1 badge badge-light">?</span>
            </OverlayTrigger>
            <br />
            (0 to 1)
          </label>
          <input
            className="form-control"
            disabled={alphaDisabled}
            name="alpha"
            type="number"
            min="0"
            max="1"
            step="0.001"
            ref={register({ min: 0, max: 1 })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Train
        </button>
      </form>
    </div>
  );
}

// Modal
const algoModal = (
  <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p>Modal body text goes here.</p>
    </Modal.Body>
  </Modal.Dialog>
);

// Popovers
const gammaPop = (
  <Popover>
    <Popover.Title as="h3">Gamma</Popover.Title>
    <Popover.Content>
      Gamma (discount factor) controls how much importance the agent puts on
      future rewards over immediate ones.
    </Popover.Content>
  </Popover>
);

const alphaPop = (
  <Popover>
    <Popover.Title as="h3">Alpha (Q-learning)</Popover.Title>
    <Popover.Content>
      Alpha (learning rate) controls how much importance the agent puts on
      integrating new experiences into its value estimates.
    </Popover.Content>
  </Popover>
);

function validateAlpha(algo) {
  if (algo === "dp") {
    return true;
  } else {
    return false;
  }
}

export default Trainer;
