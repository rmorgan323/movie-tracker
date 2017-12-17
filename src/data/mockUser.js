export default {
  signedIn: true,
  userInfo: {
    id: action.user.id,
    name: action.user.name,
    password: action.user.password,
    email: action.user.email,
    favorites: []
  }
};
