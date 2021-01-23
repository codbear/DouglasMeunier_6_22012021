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
});

export default defaultTheme;
