export const cleanRecentData = (moviesObj) => {
	const cleanData = moviesObj.reduce((cleanArray, movie) => {
		cleanArray.push({
			userId: null,
			movieId: movie.id,
			title: movie.title,
			image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
			releaseDate: cleanDate(movie.release_date),
			voteAverage: movie.vote_average,
			overview: movie.overview,
			favorite: false
		})
		return cleanArray
	}, [])

	return cleanData
}

const cleanDate = (date) => {
	const dateArray = date.split('-');
	const newDate = [dateArray[1], dateArray[2], dateArray[0]]

	return newDate.join('/')
}