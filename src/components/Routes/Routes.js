import React from 'react';
import { Route } from 'react-router-dom';
import ControlledForm from '../ControlledForm/ControlledForm';
import CardContainer from '../CardContainer/CardContainer';

const Routes = () => {
  return (
    <div>
      <Route path="/login" component={ControlledForm} />
      <Route path="/signup" component={ControlledForm} />
      <Route exact path="/" component={CardContainer} />
    </div>
  );
};

export default Routes;
