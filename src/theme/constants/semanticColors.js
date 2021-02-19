import colors from './baseColors';

const semanticColors = {
  primary: {
    main: colors.sangria,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.salmon,
    contrastText: colors.black,
  },
  background: {
    default: colors.white,
    paper: colors.white,
    alternative: {
      main: colors.whiteSmoke,
      contrastText: colors.emperor,
    },
  },
  text: {
    primary: colors.black,
    secondary: colors.emperor,
    tertiary: colors.romantic,
    white: colors.white,
  },
  shadow: colors.paleCoal,
  border: colors.alto,
};

export default semanticColors;
