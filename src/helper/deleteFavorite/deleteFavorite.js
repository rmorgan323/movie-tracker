export const removeFavorite = async (userId, movieId) => {
	const remove = await fetch(`http://localhost:3000/api/users/${userId}/favorites/${movieId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	})
}

export default removeFavorite;