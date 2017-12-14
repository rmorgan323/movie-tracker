import makeMoviesReducer from './makeMoviesReducer';
import * as actions from '../../actions';
import mockMovie from '../../data/mockMovie';

describe('makeMoviesReducer tests', () => {
  it('Should return the default store', () => {
    const expected = [];

    expect(makeMoviesReducer(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with a movie', () => {
    const movieArray = [mockMovie];
    const expected = [mockMovie];

    expect(makeMoviesReducer(undefined, actions.makeMovieArray(movieArray))).toEqual(expected);
  });
});
