import getRecentMovies from './getRecentMovies';
import { mockRecentMoviesData } from '../../data/mockRecentMoviesData';

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve(mockRecentMoviesData)
  })
);

describe('getUser Tests', () => {
  it('Should render correctly', () => {
    expect(getRecentMovies).toBeAFunction;
  });

  it('Should return an object when called', async () => {
    const mockMovies = await getRecentMovies();
    expect(typeof mockMovies).toEqual('object');
  });

  it('Should throw an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500
      })
    );

    const expectedError = Error('Fetch Failed!');
    const mockMovies = await getRecentMovies();

    expect(mockMovies).toEqual(expectedError);
  });
});
