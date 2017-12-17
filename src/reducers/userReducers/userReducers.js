const defaultStore = {
  signedIn: false,
  userInfo: {
    id: '',
    name: '',
    password: '',
    email: '',
    favorites: []
  }
};

const userReducers = (store = defaultStore, action) => {
  switch (action.type) {
  case 'SET_USER':
    return Object.assign(
      {},
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
    );

  case 'SIGNUP_ERROR':
    return action.msg;

  case 'USER_LOGOUT':
    return (store = defaultStore);

  case 'DELETE_FAVORITE':
    return Object.assign({}, store, {
      userInfo: Object.assign({}, store.userInfo, {
        favorites: store.userInfo.favorites.filter(
          favorite => favorite.title !== action.movie.title
        )
      })
    });

  case 'ADD_FAVORITE':
    return Object.assign({}, store, {
      userInfo: Object.assign({}, store.userInfo, {
        favorites: [...store.userInfo.favorites, action.movie]
      })
    });

  case 'SET_USER_FAVORITES':
    return Object.assign({}, store, {
      userInfo: Object.assign({}, store.userInfo, {
        favorites: action.favorites
      })
    });

  default:
    return store;
  }
};

export default userReducers;
