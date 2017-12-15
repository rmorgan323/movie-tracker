const userReducers = (store = {}, action) => {
    switch(action.type) {
        case 'SET_USER':
            return (Object.assign({},
                {
                    signedIn: true,
                    userInfo: {
                        id: action.user.id,
                        name: action.user.name,
                        password: action.user.password,
                        email: action.user.email,
                        favorites: []
                    }
                }
            ));

        case 'SIGNUP_ERROR':
            return action.msg

        case 'USER_LOGOUT':
            return {}

        default:
            return store
    }
}

export default userReducers;