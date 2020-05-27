const Status = {
  EMPTY: 0, FILLED: 1, START: 2, END: 3
}

function nextStatus(value) {
  switch (value) {
    case Status.EMPTY: return Status.FILLED;
    case Status.FILLED: return Status.EMPTY;
    case Status.START: return Status.EMPTY;
    case Status.END: return Status.EMPTY;
    default: return Status.EMPTY;
  }
}

const initialState = new Array(10).fill(new Array(10).fill(Status.EMPTY));
function matrix(matrix = initialState, action) {
  switch (action.type) {
    case DECREMENT_SIZE:
      return matrix.slice(0, matrix.length-1)
                    .map(c => c.slice(0, matrix.length-1));
    case INCREMENT_SIZE:
      return matrix.map(c => c.concat(Status.EMPTY))
                    .concat(new Array(matrix.length+1).fill(Status.EMPTY));
    case UPDATE_SQUARE:
      const mat = matrix.slice().map(c => c.slice());
      mat[action.x][action.y] = nextStatus(action.value);
      return mat;
    default:
      return matrix;
  }
}
