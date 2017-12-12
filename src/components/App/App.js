import React, { Component } from 'react';
import './App.css';
import { getRecentMovies } from '../helper/apiCalls';
import { CardContainer } from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
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
        <CardContainer cardDisplay={this.state.recentMovies} />
        App
      </div>
    );
  }
}

export default App;