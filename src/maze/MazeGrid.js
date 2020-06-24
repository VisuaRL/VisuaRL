import React from 'react';
import Square from './Square'
import { useSelector, useDispatch } from 'react-redux'
import { updateSquare } from '../redux/maze'

function MazeGrid() {
  // Setup
  const matrix = useSelector(state => state.maze.matrix);
  const display = useSelector(state => state.trainer.display);
  const values = useSelector(state => state.trainer.values);
  const arrows = useSelector(state => state.trainer.arrows);
  const stage = useSelector(state => state.trainer.stage);
  const dispatch = useDispatch();

  const currentValues = values[stage];
  const currentArrows = arrows[stage];

  // Event handler
  const handleEnter = (e, x, y, status) => {
    e.preventDefault();
    if (values.length === 0 & e.buttons === 1) {
      dispatch(updateSquare({x, y, status}));
    }
  }

  // Rendering
  const squares = matrix.map((row, x) =>
    <div key={x} className="row">
      {row.map((status, y) =>
        <div key={y} className="col special">
          <Square
            status={status}
            display={display}
            value={values.length !== 0 && currentValues[x][y]}
            arrow={arrows.length !== 0 && currentArrows[x][y]}
            onMouseEnter={e => handleEnter(e, x, y, status)} />
        </div>)}
    </div>);

  return (
    <div className="maze container">
      {squares}
    </div>
  );
}


export default MazeGrid;