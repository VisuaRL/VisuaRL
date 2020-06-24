import React from 'react';
import './App.css';
import Maze from './maze/Maze'
import Trainer from './trainer/Trainer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp, faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function App() {
  // fontawesome
  library.add(faArrowUp, faArrowDown, faArrowLeft, faArrowRight);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">VisuaRL</span>
      </nav>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-xl-7 col-lg-7 col-md-9">
            <Maze/>
          </div>
          <div className="col-md-3">
            <Trainer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;