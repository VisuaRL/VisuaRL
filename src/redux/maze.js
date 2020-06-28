import { createSlice } from '@reduxjs/toolkit';
import Status from '../constants/status';

const initial =
  [[2, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 1, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 0, 1, 0, 3]]

const mazeSlice = createSlice({
  name: 'maze',
  initialState: { matrix: initial, marker: Status.EMPTY },
  reducers: {
    decrementSize: state => {
      let mat = state.matrix;
      state.matrix = mat.slice(0, mat.length - 1)
        .map(c => c.slice(0, mat.length - 1));
    },
    incrementSize: state => {
      let mat = state.matrix;
      state.matrix = mat.map(c => c.concat(Status.EMPTY))
        .concat(new Array(1).fill(new Array(mat.length + 1).fill(Status.EMPTY)));
    },
    updateSquare: (state, action) => {
      let current = action.payload.status;
      let next = Status.EMPTY;

      if (state.marker === Status.START || state.marker === Status.END) {
        // Remove other marker values
        state.matrix.forEach(r => {
          let index = r.findIndex(x => x === state.marker);
          r[index] = Status.EMPTY;
        });

        next = state.marker;
        state.marker = Status.NONE;
      } else {
        next = nextStatus(current);
      }

      // Update value
      state.matrix[action.payload.x][action.payload.y] = next;
    },
    clearMaze: state => {state.matrix = new Array(10).fill(new Array(10).fill(Status.EMPTY))},
    resetMarker: state => {state.marker = Status.EMPTY},
    startMarker: state => {state.marker = Status.START},
    endMarker: state => {state.marker = Status.END}
  }
});

function nextStatus(status) {
  switch (status) {
    case Status.EMPTY: return Status.FILLED;
    case Status.FILLED: return Status.EMPTY;
    case Status.START: return Status.EMPTY;
    case Status.END: return Status.EMPTY;
    default: return Status.EMPTY;
  }
}

const { actions, reducer } = mazeSlice;
export const { decrementSize, incrementSize, updateSquare, clearMaze, resetMarker, startMarker, endMarker } = actions;
export default reducer;