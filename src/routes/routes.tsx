import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { TestContainer } from '../components/Test/test1';
import { TestContainer2 } from '../components/Test/test2';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TestContainer2} />
      <Route exact path="/test" component={TestContainer} />
    </Switch>
  </BrowserRouter>
);

export { Routes };
