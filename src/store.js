import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import maze from './maze/MazeReducer';
import trainer from './trainer/TrainerReducer'

let devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(combineReducers({maze, trainer}, applyMiddleware(thunk)));
export default store;