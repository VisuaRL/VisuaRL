import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { indexOf2d } from "../util";

const initialState = {
  values: [],
  arrows: [],
  qTable: [],
  epsilon: [],
  graphRewards: [],
  display: "none",
  agentStart: { x: 0, y: 0 },
  agent: { x: 0, y: 0 },
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
    addEpsilon: (state, action) => {
      state.epsilon = action.payload;
    },
    addGraphRewards: (state, action) => {
      state.graphRewards = action.payload;
    },
    changeDisplay: (state, action) => {
      state.display = action.payload;
    },
    setAgentStart: (state, action) => {
      state.agentStart = action.payload;
    },
    setAgent: (state, action) => {
      state.agent = action.payload;
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
      state.agent = state.agentStart;
      state.stage--;
    },
    nextStage: state => {
      state.agent = state.agentStart;
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
  addEpsilon,
  addGraphRewards,
  changeDisplay,
  setAgentStart,
  setAgent,
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
    let { algo, gamma, alpha, epsilonDecay } = data;
    gamma = parseFloat(gamma);
    alpha = parseFloat(alpha);
    const req = { matrix, gamma, alpha, epsilonDecay };
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
          case "sarsa":
            //set agent
            const index = indexOf2d(matrix, 2);
            const agent = { x: index[0], y: index[1] };
            dispatch(setAgentStart(agent));
            dispatch(setAgent(agent));

            const { history, epsilon, rewards } = response.data;
            dispatch(addQTable(history));
            dispatch(addEpsilon(epsilon));
            dispatch(addGraphRewards(rewards));
            dispatch(totalStages(history.length));
            dispatch(changeDisplay("qTable"));
            break;
          default:
            break;
        }
      })
      .catch(error => console.error(error));
  };
}
