export const backEndApiPost = async (user) => {
    try {
        const fetchBackEndApi = await fetch('http://localhost:3000/api/users/new', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })

    } catch (e) {
        return new Error('Failed to reach backend database')
    }
}