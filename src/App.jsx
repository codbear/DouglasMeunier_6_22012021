import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import HomeScreen from './modules/home';
import defaultTheme from './theme/defaultTheme';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <HomeScreen />
  </ThemeProvider>
);

export default App;
