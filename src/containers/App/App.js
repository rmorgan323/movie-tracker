import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ControlledForm from '../ControlledForm/ControlledForm';
import CardContainer from '../CardContainer/CardContainer';
import './App.css';

class App extends Component {

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

export default App