const Routes = () => {
  return (
    <div>
      <Route path="/login" component={ControlledForm} />
      <Route path="/signup" component={ControlledForm} />
      <Route exact path="/" component={CardContainer} />
    </div>
  );
};
