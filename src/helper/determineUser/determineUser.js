const determineUser = (user) => {
  if (user === 'error-signup' || user === 'error-login' || !Object.keys(user).length) {
    return false;
  } else {
    return true;
  }
}

export default determineUser;