import { createMuiTheme } from '@material-ui/core';
import semanticColors from './constants/semanticColors';

const defaultTheme = createMuiTheme({
  palette: semanticColors,
  typography: {
    fontFamily: [
      'Dm Sans',
      'sans-serif',
    ].join(', '),
  },
  breakpoints: {
    values: {
      md: 900,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          margin: 0,
          padding: 0,
        },
        a: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default defaultTheme;
