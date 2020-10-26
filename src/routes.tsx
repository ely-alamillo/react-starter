import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, ProtectedPage, SamplePage } from './pages/samplePages';


export const Routes = () => (
  <Switch>
    <Route path="/home">
      <HomePage />
    </Route>
    <Route path="/protected">
      <ProtectedPage />
    </Route>
    <Route path="/">
      <SamplePage />
    </Route>
  </Switch>
);