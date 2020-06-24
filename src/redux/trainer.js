import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    values: [],
    arrows: [],
    display: "values",
    stage: 0
};

const trainerSlice = createSlice({
    name: 'trainer',
    initialState,
    reducers: {
        addValues: (state, action) => {state.values = action.payload},
        addArrows: (state, action) => {state.arrows = action.payload},
        changeDisplay: (state, action) => {state.display = action.payload},
        prevStage: state => {state.stage--},
        nextStage: state => {state.stage++},
        resetTrainer: () => initialState
    }
});

// Exports
const { actions, reducer } = trainerSlice;
export const { addValues, addArrows, changeDisplay, prevStage, nextStage, resetTrainer } = actions;
export default reducer;

// Thunks
export function requestTraining(matrix, data) {
    return dispatch => {
        let { algo, gamma, alpha } = data;
        gamma = parseFloat(gamma);
        alpha = parseFloat(alpha);
        const req = { matrix, algo, gamma, alpha };

        return axios.post("https://vrl-api.azurewebsites.net/trainer", req)
            .then(response => {
                const { values, arrows } = response.data;
                dispatch(addValues(values));
                dispatch(addArrows(arrows));
            })
            .catch(error => console.error(error));
    }
}