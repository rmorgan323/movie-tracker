import React, { Component } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import { Route } from 'react-router-dom';
import './App.css';
import { getRecentMovies } from '../helper/apiCalls';
import { CardContainer } from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      recentMovies: []
    }
  }

  componentDidMount = async () => {
    const recentMovies = await getRecentMovies();

    this.setState({recentMovies: recentMovies})

  }

  render() {
    return (
      <div className="App">
        <Header />

        <Route exact path='/' render={() => <CardContainer cardDisplay={this.state.recentMovies} />} />
        <Route path='/login' component={Login} />
      </div>
    );
  }
}

export default App;