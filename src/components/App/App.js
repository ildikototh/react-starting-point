import React, { Component } from 'react';
import {
  withRouter, Route, Switch,
} from 'react-router-dom';
import NotFound from '../../pages/NotFound';
import Main from '../../pages/Main';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route render={NotFound} />
      </Switch>
    );
  }
}

export default withRouter(App);
