import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import Main from '../../pages/Main';

const App = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route render={NotFound} />
  </Switch>
);

export default App;
