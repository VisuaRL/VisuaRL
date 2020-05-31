import { combineReducers } from 'redux';

function values(state = [], action) {
  switch (action.type) {
    case "TRAIN_FINISH":
      return action.values;
    default:
      return state;
  }
}

function error(state = "No errors", action) {
  switch (action.type) {
    case "TRAIN_ERROR":
      return action.error;
    default:
      return state;
  }
}

export default combineReducers({ values, error });