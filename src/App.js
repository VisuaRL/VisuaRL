import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./App.css";
import Maze from "./maze/Maze";
import Trainer from "./trainer/Trainer";
import Help from "./help/Help";

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

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>VisuaRL</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link>Tutorial</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-xl-7 col-lg-7 col-md-9">
            <Maze />
          </div>
          <div className="col-md-3">
            <Trainer />
          </div>
        </div>
        <div className="mt-5 row justify-content-center">
          <div className="col col-md-10">
            <Help/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
