export const cleanRecentData = (moviesObj) => {
	const cleanData = moviesObj.reduce((cleanArray, movie) => {
		cleanArray.push({
			userId: null,
			movieId: movie.id,
			title: movie.title,
			image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
			releaseDate: movie.release_date,
			voteAverage: movie.vote_average,
			overview: movie.overview,
			favorite: false
		})
		return cleanArray
	}, [])

	return cleanData
}