export const userSignIn = async (user) => {
    try {
        const fetchUser = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return fetchUser;

    } catch (e) {
        return new Error('Failed to find user')
    }
}