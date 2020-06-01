import { combineReducers } from 'redux';

function values(state = [], action) {
  switch (action.type) {
    case "TRAINER_VALUES":
      return action.values;
    case "TRAINER_RESET":
      return [];
    default:
      return state;
  }
}

function arrows(state = [], action) {
  switch (action.type) {
    case "TRAINER_ARROWS":
      console.dir(action.arrows);
      return action.arrows;
    case "TRAINER_RESET":
      return [];
    default:
      return state;
  }
}

function display(state = "values", action) {
  switch (action.type) {
    case "TRAINER_DISPLAY":
      return action.display;
    default:
      return state;
  }
}

function stage(state = 0, action) {
  switch(action.type) {
    case "RESET_STAGE":
      return 0;
    case "NEXT_STAGE":
      return state + 1;
    case "PREV_STAGE":
      return state - 1;
    default:
      return state;
  }
}

function error(state = "No errors", action) {
  switch (action.type) {
    case "TRAINER_ERROR":
      return action.error;
    default:
      return state;
  }
}

export default combineReducers({ values, arrows, display, stage, error });