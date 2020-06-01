import axios from 'axios'

export function train(matrix, data) {
    return dispatch => {
        let { algo, gamma, alpha } = data;
        gamma = parseFloat(gamma);
        alpha = parseFloat(alpha);
        const req = { matrix, algo, gamma, alpha };
        dispatch(trainerStart());
        return axios.post("https://vrl-api.azurewebsites.net/trainer", req)
            .then(response => {
                const { values, arrows } = response.data;
                dispatch(trainerValues(values));
                dispatch(trainerArrows(arrows));
            })
            .catch(error => dispatch(trainerError(error)));
    }
}

export function trainerReset() {
    return { type: "TRAINER_RESET" };
}

export function trainerDisplay(display) {
    return { type: "TRAINER_DISPLAY", display }
}

function trainerValues(values) {
    return { type: "TRAINER_VALUES", values }
}

function trainerArrows(arrows) {
    return { type: "TRAINER_ARROWS", arrows }
}

function trainerStart() {
    return { type: "TRAIN_START" };
}

function trainerError(error) {
    return { type: "TRAIN_ERROR", error };
}

export function nextStage() {
    return { type: "NEXT_STAGE" }
}

export function prevStage() {
    return { type: "PREV_STAGE" }
}

export function resetStage() {
    return { type: "RESET_STAGE" };
}