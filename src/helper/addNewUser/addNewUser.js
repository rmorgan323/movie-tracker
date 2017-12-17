export const addNewUser = async (user) => {

  const fetchBackEndApi = await fetch('http://localhost:3000/api/users/new', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (fetchBackEndApi.status_code >= 400) {
    return fetchBackEndApi.status;
  }
  const jsonResponse = await fetchBackEndApi.json();
  return jsonResponse;

};