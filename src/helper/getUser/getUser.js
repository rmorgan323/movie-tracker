const getUser = async userId => {
  const fetchUser = await fetch('http://localhost:3000/api/users');
  const jsonUser = await fetchUser.json();
  const user = jsonUser.data.find(user => user.id === userId);

  return user;
};

export default getUser;
