const determineUser = (user) => {
  if (user === 'error-signup' || user === 'error-login' || !user.userInfo.name.length) {
    return false;
  } else {
    return true;
  }
}

export default determineUser;