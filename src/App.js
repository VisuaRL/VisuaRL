import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Maze from "./maze/Maze";
import Trainer from "./trainer/Trainer";
import Help from "./help/Help";
import Joyride, { STATUS } from "react-joyride";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faRobot
} from "@fortawesome/free-solid-svg-icons";

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
    }
  ];
  const joyrideCallback = data => {
    const { status } = data;
    if (status == STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false);
    }
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
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
          <div className="col col-xl-7 col-lg-7 col-md-9">
            <Maze />
          </div>
          <div className="col-md-3">
            <Trainer />
          </div>
        </div>
        <div className="mt-4 row justify-content-center">
          <div className="col col-md-10">
            <Help />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
