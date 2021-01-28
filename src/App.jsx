import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import HomeScreen from './modules/home';
import { PhotographerScreen } from './modules/photographers';
import defaultTheme from './theme/defaultTheme';

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/photographers/:photographerId">
            <PhotographerScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
