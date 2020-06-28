import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  values: [],
  arrows: [],
  qTable: [],
  display: "none",
  agent: {x: 0, y: 0},
  stage: 0,
  totalStages: 0
};

const trainerSlice = createSlice({
  name: "trainer",
  initialState,
  reducers: {
    addValues: (state, action) => {
      state.values = action.payload;
    },
    addArrows: (state, action) => {
      state.arrows = action.payload;
    },
    addQTable: (state, action) => {
      state.qTable = action.payload;
    },
    changeDisplay: (state, action) => {
      state.display = action.payload;
    },
    agentUp: state => {
      state.agent.x--; 
    },
    agentDown: state => {
      state.agent.x++;
    },
    agentLeft: state => {
      state.agent.y--;
    },
    agentRight: state => {
      state.agent.y++;
    },
    totalStages: (state, action) => {
      state.totalStages = action.payload;
    },
    prevStage: state => {
      state.agent = {x: 0, y: 0};
      state.stage--;
    },
    nextStage: state => {
      state.agent = {x: 0, y: 0};
      state.stage++;
    },
    resetTrainer: () => initialState
  }
});

// Exports
const { actions, reducer } = trainerSlice;
export const {
  addValues,
  addArrows,
  addQTable,
  changeDisplay,
  agentUp,
  agentDown,
  agentLeft,
  agentRight,
  totalStages,
  prevStage,
  nextStage,
  resetTrainer
} = actions;
export default reducer;

// Thunks
export function requestTraining(matrix, data) {
  return dispatch => {
    let { algo, gamma, alpha } = data;
    gamma = parseFloat(gamma);
    alpha = parseFloat(alpha);
    const req = { matrix, gamma, alpha };
    dispatch(resetTrainer());
    
    axios
      .post("https://vrl-api.azurewebsites.net/" + algo, req)
      .then(response => {
        switch (algo) {
          case "dp":
            const { values, arrows } = response.data;
            dispatch(addValues(values));
            dispatch(addArrows(arrows));
            dispatch(totalStages(values.length));
            dispatch(changeDisplay("values"));
            break;
          case "ql":
            const { history } = response.data;
            dispatch(addQTable(history));
            dispatch(totalStages(history.length));
            dispatch(changeDisplay("qTable"));
            console.dir(history);
            break;
          default:
            break;
        }
      })
      .catch(error => console.error(error));
  };
}
