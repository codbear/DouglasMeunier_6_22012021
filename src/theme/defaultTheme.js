import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
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
      md: 980,
      lg: 1280,
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

export default responsiveFontSizes(defaultTheme);
