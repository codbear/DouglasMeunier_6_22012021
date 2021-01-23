import React from 'react';
import { makeStyles } from '@material-ui/core';
import logo from '../../images/logo.png';

const useStyles = makeStyles(({ spacing }) => ({
  banner: {
    padding: spacing(5, 0, 0, 12),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.banner}>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
