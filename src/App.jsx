import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import HomeScreen from './modules/home';
import defaultTheme from './theme/defaultTheme';

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
