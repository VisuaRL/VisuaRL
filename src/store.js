import { createStore, combineReducers } from 'redux';
import maze from './maze/MazeReducer';

const store = createStore(combineReducers({maze}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;