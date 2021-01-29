import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import ROUTES from '../../constants/routes';
import HomeScreen from '../../../home';
import { PhotographerScreen } from '../../../photographers';

const ReactRouter = () => (
  <Router>
    <Switch>
      <Route path={ROUTES.PHOTOGRAPHERS.SINGLE}>
        <PhotographerScreen />
      </Route>
      <Route path={ROUTES.HOMEPAGE.INDEX}>
        <HomeScreen />
      </Route>
    </Switch>
  </Router>
);

export default ReactRouter;
