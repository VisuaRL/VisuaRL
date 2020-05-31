import axios from 'axios'

export function train(matrix, data) {
    return dispatch => {
        let { algo, gamma, alpha } = data;
        gamma = parseFloat(gamma);
        alpha = parseFloat(alpha);
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

function trainFinish(values) {
    console.dir(values);
    return { type: "TRAIN_FINISH", values }
}

/*
{ type: "TRAINER_SUBMIT",
matrix,
algo: data.algo,
gamma: parseFloat(data.gamma),
alpha: parseFloat(data.alpha) }
*/