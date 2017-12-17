const getUserFavorites = async userId => {
  const fetchFavorites = await fetch(
    `http://localhost:3000/api/users/${userId}/favorites`
  );
  const jsonFavorites = await fetchFavorites.json();

  return jsonFavorites;
};

export default getUserFavorites;
