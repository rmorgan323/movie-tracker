export const removeFavorite = async (movieId, userId) => {
                              http://localhost:3000/api/users/favorites/new
	const remove = await fetch(`http://localhost:3000/api/users/${userId}/favorites/${movieId}`, {
		method: 'POST',
		body: JSON.stringify({movieId, userId}),
		header: {
			'Content-Type': 'application/json'
		}
	})

	console.log(remove)
}

export default removeFavorite;