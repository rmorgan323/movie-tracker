import { combineReducers } from 'redux';
import makeMoviesReducer from './makeMoviesReducer.js'

const rootReducer = combineReducers ({
  movies: makeMoviesReducer




});

export default rootReducer;