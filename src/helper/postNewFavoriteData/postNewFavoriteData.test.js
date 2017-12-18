import postNewFavoriteData from './postNewFavoriteData.js';

import {
  mockPostMovieData,
  mockPostMovieResponse
} from '../../data/mockPostMovieData.js';

describe('add new user', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockPostMovieResponse)
    })
  );

  it('should be a function', () => {
    expect(postNewFavoriteData).toBeAFunction;
  });

  it('should render the fetch data', async () => {
    const fetch = await postNewFavoriteData(mockPostMovieData);
    expect(typeof fetch).toEqual('object');
  });

  it('should give a success response and userId upon submission', async () => {
    const fetch = await postNewFavoriteData(mockPostMovieData);
    expect(fetch).toEqual(mockPostMovieResponse);
  });
});
