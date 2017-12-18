export const mockMovie = {
  userId: null,
  movieId: 141052,
  title: "Justice League",
  image: "https://image.tmdb.org/t/p/w500/9rtrRGeRnL0JKtu9IMBWsmlmmZz.jpg",
  releaseDate: "2017-11-15",
  voteAverage: 6.6,
  overview: "Fueled by his restored faith in humanity and inspired",
};

export const mockMovieWithUser = {
  userId: 1,
  movieId: 141052,
  title: "Justice League",
  image: "https://image.tmdb.org/t/p/w500/9rtrRGeRnL0JKtu9IMBWsmlmmZz.jpg",
  releaseDate: "2017-11-15",
  voteAverage: 6.6,
  overview: "Fueled by his restored faith in humanity and inspired",
};

export const mockMovieArray = [
	{
	  userId: 1,
	  movieId: 141052,
	  title: "Justice League",
	  image: "https://image.tmdb.org/t/p/w500/9rtrRGeRnL0JKtu9IMBWsmlmmZz.jpg",
	  releaseDate: "2017-11-15",
	  voteAverage: 6.6,
	  overview: "Fueled by his restored faith in humanity and inspired",
	}
]

export const userWithMovieArray = {
	signedIn: true,
	userInfo: {
		id: 1,
		name: 'Batman',
		password: 'darkKn1ght',
		email: 'supermanSux@batmanrulez.com',
		favorites: mockMovieArray
	}
};