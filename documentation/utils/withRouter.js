import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

export default (config = {}) => (story) => {
  const {
    path = '/',
    route = '/',
  } = config;
  return (
    <BrowserRouter
      initialEntries={[route]}
    >
      <Route path={path} exact render={() => story()} />
    </BrowserRouter>
  );
};
