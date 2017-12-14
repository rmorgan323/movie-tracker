import { combineReducers } from 'redux';

import makeMoviesReducer from './makeMoviesReducer.js'
import userReducers from './userReducers'

const rootReducer = combineReducers ({
  movies: makeMoviesReducer,
  user: userReducers


});

export default rootReducer;