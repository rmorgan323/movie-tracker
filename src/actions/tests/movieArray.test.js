import * as actions from '../index';
import mockMovie from '../../data/mockMovie';

describe('Movie Array tests', () => {
  it('Has a type of MAKE_MOVIE_ARRAY', () => {
    const movies = [mockMovie];
    const expected = {
      type: 'MAKE_MOVIE_ARRAY',
      movies
    };

    expect(actions.makeMovieArray(movies)).toEqual(expected);
  });
});
