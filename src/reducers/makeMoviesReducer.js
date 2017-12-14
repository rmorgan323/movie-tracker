const makeMoviesReducer = (store = [], action) => {
  switch(action.type) {
    case 'MAKE_MOVIE_ARRAY': 
      return [...store, ...action.movies]

    default: 
      return store 
  }

}

export default makeMoviesReducer;