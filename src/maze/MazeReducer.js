import Status from './StatusEnum'

const initialState = new Array(10).fill(new Array(10).fill(Status.EMPTY));
function maze(state = initialState, action) {
  switch (action.type) {
    case "DECREMENT_SIZE":
      return state.slice(0, state.length-1)
                  .map(c => c.slice(0, state.length-1));
    case "INCREMENT_SIZE":
      return state.map(c => c.concat(Status.EMPTY))
                  .concat(new Array(1).fill(new Array(state.length+1).fill(Status.EMPTY)));
    case "UPDATE_SQUARE":
      const mat = state.slice().map(c => c.slice());
      mat[action.x][action.y] = action.value;
      return mat;
    case "UNDO":
      return state;
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default maze;