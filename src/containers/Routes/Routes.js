import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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
