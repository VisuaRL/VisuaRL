import { configureStore } from "@reduxjs/toolkit";
import maze from './maze';
import trainer from './trainer'

const store = configureStore({
  reducer: { maze, trainer }
});
export default store;