import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import defaultTheme from './theme/defaultTheme';
import ReactRouter from './modules/router';

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <ReactRouter />
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
