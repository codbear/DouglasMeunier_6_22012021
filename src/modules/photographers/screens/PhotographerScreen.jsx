import React from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

import Banner from '../../banner';

const useStyles = makeStyles(() => ({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
}));

const PhotographerScreen = () => {
  const classes = useStyles();
  const { photographerId } = useParams();
  console.log(photographerId);

  return (
    <>
      <header className={classes.header}>
        <Banner />
      </header>
      <main />
    </>
  );
};

export default PhotographerScreen;
