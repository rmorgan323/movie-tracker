import { combineReducers } from 'redux';
import makeMoviesReducer from './makeMoviesReducer/makeMoviesReducer';
import userReducers from './userReducers';

const rootReducer = combineReducers({
  movies: makeMoviesReducer,
  user: userReducers

});

export default rootReducer;