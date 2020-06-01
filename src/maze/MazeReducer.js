import Status from './StatusEnum'
import { combineReducers } from 'redux';

const defaultMatrix = 
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

function matrix(state = defaultMatrix, action) {
  switch (action.type) {
    case "DECREMENT_SIZE":
      return state.slice(0, state.length - 1)
        .map(c => c.slice(0, state.length - 1));
    case "INCREMENT_SIZE":
      return state.map(c => c.concat(Status.EMPTY))
        .concat(new Array(1).fill(new Array(state.length + 1).fill(Status.EMPTY)));
    case "UPDATE_SQUARE":
      return updateSquare(state, action);
    case "CLEAR_MAZE":
      return new Array(10).fill(new Array(10).fill(Status.EMPTY));
    default:
      return state;
  }
}

function marker(state = Status.EMPTY, action) {
  switch (action.type) {
    case "RESET_MARKER":
      return Status.EMPTY;
    case "START_MARKER":
      return Status.START;
    case "END_MARKER":
      return Status.END;
    default:
      return state;
  }
}

function updateSquare(state, action) {
  // Copy matrix
  const mat = state.slice().map(c => c.slice());

  // Remove other marker values
  if (action.value === Status.START || action.value === Status.END) {
    mat.forEach(r => {
      let index = r.findIndex(x => x === action.value);
      r[index] = Status.EMPTY;
    });
  }

  // Update value
  mat[action.x][action.y] = action.value;
  return mat;
}

export default combineReducers({ matrix, marker });