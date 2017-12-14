const userReducers = (store = {}, action) => {
    switch(action.type) {
        case 'CHECK_USERS':
            return (Object.assign({},
                {
                    signedIn: false,
                    userInfo: {
                        id: '',
                        name: '',
                        password: '',
                        favorites: []
                    }
                }
            ));

        case 'SET_USER':
        console.log('action', action)
            return (Object.assign({},
                {
                    signedIn: true,
                    userInfo: {
                        id: action.user.id,
                        name: action.user.name,
                        password: action.user.password,
                        favorites: []
                    }
                }
            ));


        default:
            return store
    }
}

export default userReducers;