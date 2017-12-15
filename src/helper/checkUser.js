export const checkUser = async (user) =>{
  const fetchUserPost = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })
   
  if (fetchUserPost.status >= 400) {
    return fetchUserPost.status
  }
  const jsonResponse = await fetchUserPost.json()
  return jsonResponse;
}