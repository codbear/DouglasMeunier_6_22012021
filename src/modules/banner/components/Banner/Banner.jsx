import React from 'react';
import { makeStyles } from '@material-ui/core';
import logo from '../../images/logo.svg';

const useStyles = makeStyles(({ breakpoints }) => ({
  logo: {
    [breakpoints.down('sm')]: {
      width: 150,
    },
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div>
      <a href="/">
        <img src={logo} alt="Fisheye Home page" className={classes.logo} />
      </a>
    </div>
  );
};

export default Banner;
