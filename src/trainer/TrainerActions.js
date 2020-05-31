import axios from 'axios'

export function test() {
    return dispatch => {
        console.log("TEST THUNK!");
    }
}

export function train(matrix, data) {
    return dispatch => {
        const { algo, gamma, alpha } = data;
        const req = { matrix, algo, gamma, alpha };
        dispatch(trainStart());
        return axios.post("https://vrl-api.azurewebsites.net/trainer", req)
                    .then(response => dispatch(trainFinish(response.data.values)))
                    .catch(error => dispatch(trainError(error)));
    }
}

function trainStart() {
    return { type: "TRAIN_START" };
}

function trainError(error) {
    return { type: "TRAIN_ERROR", error };
}

function trainFinish(model) {
    return { type: "TRAIN_FINISH" , model }
}

/*
{ type: "TRAINER_SUBMIT",
matrix,
algo: data.algo,
gamma: parseFloat(data.gamma), 
alpha: parseFloat(data.alpha) }
*/