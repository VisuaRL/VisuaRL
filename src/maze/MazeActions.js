export function incrementSize() {
  return {type: "INCREMENT_SIZE"};
}

export function decrementSize() {
  return {type: "DECREMENT_SIZE"};
}

export function updateSquare(x, y, value) {
  return {type: "UPDATE_SQUARE", x, y, value}
}

export function undo() {
  return {type: "UNDO"}
}

export function reset() {
  return {type: "RESET"}
}

export function startMarker() {
  return {type: "START_MARKER"}
}

export function endMarker() {
  return {type: "END_MARKER"}
}

export function resetMarker() {
  return {type: "RESET_MARKER"}
}