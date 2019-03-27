import React, { Component } from 'react';
import {
  withRouter, Route, Switch,
} from 'react-router-dom';
import { string } from 'prop-types';
import { compose } from 'redux';
import NotFound from '../../pages/NotFound/NotFound';
import Main from "../../pages/Main";

export class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route render={NotFound} />
      </Switch>
    );
  }
}
export default compose(
  withRouter,
)(App);
