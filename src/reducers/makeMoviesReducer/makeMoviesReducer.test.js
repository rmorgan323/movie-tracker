import makeMoviesReducer from './makeMoviesReducer';
import * as actions from '../../actions';

describe('makeMoviesReducer tests', () => {
  it('Should return the default store', () => {
    const expected = [];

    expect(makeMoviesReducer(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with a movie', () => {
      
  })
});
