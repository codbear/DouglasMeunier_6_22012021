import React from 'react';
import { makeStyles } from '@material-ui/core';

import Banner from '../../banner';
import PhotographerCard from '../../photographers';
import Data from '../../../sdk/FishEyeDataFR.json';

const useStyles = makeStyles(({ spacing, typography, breakpoints }) => ({
  header: {
    position: 'absolute',
    top: spacing(5),
    left: spacing(15),
    [breakpoints.down('sm')]: {
      left: spacing(2),
    },
  },
  title: {
    textAlign: 'right',
    margin: spacing(5, 15, 0, 0),
    ...typography.h4,
    lineHeight: '50px',
    [breakpoints.down('sm')]: {
      marginRight: spacing(2),
      ...typography.h6,
      lineHeight: '37.5px',
    },
  },
  photographers: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: spacing(7, 0),
    justifyItems: 'center',
    marginTop: spacing(15),
    [breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
}));

const HomeScreen = () => {
  const classes = useStyles();
  const { photographers } = Data;

  return (
    <>
      <header className={classes.header}>
        <Banner />
      </header>
      <main>
        <h1 className={classes.title}>Nos photographes</h1>
        <div className={classes.photographers}>
          {photographers.map((photographer) => (
            <PhotographerCard photographer={photographer} key={photographer.id} />
          ))}
        </div>
      </main>
    </>
  );
};

export default HomeScreen;
