import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import ControlledForm from '../ControlledForm/ControlledForm';
import CardContainer from '../CardContainer/CardContainer';
import { getMovies } from '../../actions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    this.props.storeMovies()
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

const mapStateToProps = (store) => {
  return {
    movies: store.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeMovies: () => {
      dispatch(getMovies())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))