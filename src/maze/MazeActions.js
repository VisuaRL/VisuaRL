export function incrementSize() {
  return {type: INCREMENT_SIZE};
}

export function decrementSize() {
  return {type: DECREMENT_SIZE};
}

export function updateSquare(x, y, value) {
  return {type: UPDATE_SQUARE, x, y, value}
}