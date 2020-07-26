import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Maze from "./maze/Maze";
import Trainer from "./trainer/Trainer";
import Graph from "./graph/Graph";
import GeneralHelp from "./help/GeneralHelp";
import Joyride, { STATUS } from "react-joyride";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faRobot
} from "@fortawesome/free-solid-svg-icons";
import ParamHelp from "./help/ParamHelp";

function App() {
  // fontawesome
  library.add(faArrowUp, faArrowDown, faArrowLeft, faArrowRight, faRobot);

  // Tutorial
  const [run, setRun] = useState(false);
  const steps = [
    {
      target: ".maze-grid",
      content: (
        <div>
          <h5>Design a maze!</h5>
          <p>You can click/drag these squares to create your own maze.</p>
          <p>White squares mark the path, black squares are the boundary.</p>
        </div>
      ),
      disableBeacon: true
    },
    {
      target: ".maze-controls",
      content: (
        <div>
          <h5>Maze configuration</h5>
          <p>Here you can change the size of the maze, or clear it for a blank slate.</p>
          <p>Every maze requires a single start and can have multiple end points.</p>
        </div>
      ),
      disableBeacon: true
    },
    {
      target: ".trainer-form",
      content: (
        <div>
          <h5>Train your model</h5>
          <p>Select the algorithm and parameters for training a model to solve the maze.</p>
        </div>
      ),
      disableBeacon: true
    },
    {
      target: "#help",
      content: (
        <div>
          <h5>Theory</h5>
          <p>Read more about reinforcement learning and what the different parameters mean here.</p>
        </div>
      ),
      disableBeacon: true
    }
  ];
  const joyrideCallback = data => {
    const { status } = data;
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false);
    }
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
          <Navbar.Brand>VisuaRL</Navbar.Brand>
          <button
            onClick={() => setRun(true)}
            type="button"
            className="btn btn-info my-2 my-sm-0"
          >
            Tutorial
          </button>
        </div>
      </Navbar>

      <Joyride
        callback={joyrideCallback}
        disableScrolling={true}
        continuous={true}
        run={run}
        scrollToFirstStep={true}
        showProgress={true}
        showSkipButton={true}
        scrollOffset={0}
        steps={steps}
      />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <Maze />
          </div>
          <div className="col-md-3">
            <Trainer />
          </div>
        </div>
        <div className="mt-4 row justify-content-center">
          <div className="col col-md-10">
            <Graph />
          </div>
        </div>
        <div className="help-row mt-4 row justify-content-center">
          <div className="col col-md-5">
            <GeneralHelp />
          </div>
          <div className="col col-md-5">
            <ParamHelp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
