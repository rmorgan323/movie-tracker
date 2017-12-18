import postNewFavoriteData from './postNewFavoriteData.js';

import { mockPostMovieData, mockPostMovieResponse } from '../../data/mockPostMovieData.js';

describe('add new user', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockPostMovieResponse)
    })
  );

  it('should be a function', () => {
    expect(postNewFavoriteData).toBeAFunction;
  });

  it.skip('should render the fetch data', async () => {
    const fetch = await postNewFavoriteData();
    expect(typeof fetch).toEqual('object');
  });

  it.skip('should give a success response and userId upon submission', async () => {
    const fetch = await postNewFavoriteData();
    expect(fetch).toEqual(mockPostMovieResponse);
  });

  it.skip('postNewFavoriteData is called with the correct params', async () => {
    const expected = [
      'http://localhost:3000/api/users/favorites/new',
      {
        body: {
          movie_id: 317091,
          user_id: 4,
          title: 'November Criminals',
          poster_path: "https://image.tmdb.org/t/p/w500/m2JxGgarPvtemudLZ1CB6gLJeUb.jpg",
          release_date: "12/08/2017",
          vote_average: "5.3",
          overview: "A teenager takes on his own investigation of a murder in Washington D.C."
        },
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      }
    ];

    await postNewFavoriteData(mockPostMovieData);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});