import { cleanRecentData } from './helper.js'

export const getRecentMovies = async () => {
	try {
		const fetchRaw = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=e321dec5936568598ab078a77503adb8&language=en-US&page=1');
		const moviesObj = await fetchRaw.json();
		const cleanData = cleanRecentData(moviesObj.results);

		return cleanData
	} catch (type) {
		throw Error('Fetch Failed!')
	}
};