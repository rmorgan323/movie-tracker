const userReducers = (store = {}, action) => {
	switch(action.type) {
		case 'CHECK_USERS':
			return {...store, ...action}

		default:
			return store
	}
}

export default userReducers;