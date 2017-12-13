export const backEndApiPost = async (user) => {
    try {
        const fetchBackEndApi = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const response = await fetchBackEndApi.json()
        console.log(response)
        return response;

    } catch (e) {
        return new Error('Failed to reach backend database')
    }
}