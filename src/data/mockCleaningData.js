/*eslint-disable camelcase*/
/*eslint-disable max-len*/
export const mockRawData = [
  {
    vote_count: 784,
    id: 181808,
    video: false,
    vote_average: 7.5,
    title: 'Star Wars: The Last Jedi',
    popularity: 455.954637,
    poster_path: '/xGWVjewoXnJhvxKW619cMzppJDQ.jpg',
    original_language: 'en',
    original_title: 'Star Wars: The Last Jedi',
    genre_ids: [28, 12, 14, 878],
    backdrop_path: '/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg',
    adult: false,
    overview:
      'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
    release_date: '2017-12-13'
  }
];

export const mockCleanData = [
  {
    image: 'https://image.tmdb.org/t/p/w500/xGWVjewoXnJhvxKW619cMzppJDQ.jpg',
    movieId: 181808,
    overview:
      'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
    releaseDate: '12/13/2017',
    title: 'Star Wars: The Last Jedi',
    userId: null,
    voteAverage: 7.5
  }
];
