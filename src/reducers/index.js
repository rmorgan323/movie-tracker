import { combineReducers } from 'redux';
import makeMoviesReducer from './makeMoviesReducer/makeMoviesReducer';

const rootReducer = combineReducers ({
  movies: makeMoviesReducer




});

export default rootReducer;