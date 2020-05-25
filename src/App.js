import React, { useState } from 'react';
import './App.css';
import Maze from './Maze'
import TrainingForm from './TrainingForm'

function App() {
  const [rows, setRows] = useState(15);
  const [columns, setColumns] = useState(15);

  const handleSubmit = (rows, columns) => {
    setRows(rows);
    setColumns(columns);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Maze rows={rows} columns={columns}/>
          </div>
          <div className="col">
            {/* <TrainingForm onSubmit={handleSubmit}/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;