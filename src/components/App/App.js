import React, { Component } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import { Route } from 'react-router-dom';
import './App.css';
import { getRecentMovies } from '../helper/apiCalls';
import CardContainer from '../CardContainer/CardContainer';
import { connect } from 'react-redux';
import { makeMovieArray } from '../../actions';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    const recentMovies = await getRecentMovies();

   this.props.storeMovies(recentMovies)
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Route exact path='/' component={ CardContainer} />
        <Route path='/login' component={Login} />
      </div>
    );
  }
}

  const mapStateToProps = (store) =>{
    return {
      movies: store.movies
    }
  }

  const mapDispatchToProps = (dispatch) =>{
    return {
      storeMovies: (movies) => {
        dispatch(makeMovieArray(...movies))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)