import React, { Component } from 'react';
import Header from '../Header/Header';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ControlledForm from '../ControlledForm/ControlledForm';
import CardContainer from '../CardContainer/CardContainer';
import { getRecentMovies } from '../helper/apiCalls';
import { makeMovieArray } from '../../actions';
import './App.css';


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

        <Route path='/login' component={ControlledForm} />
        <Route path='/signup' component={ControlledForm}/>
        <Route exact path='/' component={CardContainer} />
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
        dispatch(makeMovieArray(movies))
      }
    }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))