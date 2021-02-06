import React from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

import Banner from 'Modules/banner';
import { useGetPhotographer } from 'sdk';
import PhotographerCardHorizontal from '../components/PhotographerCardHorizontal';

const useStyles = makeStyles(({ palette, spacing, breakpoints }) => ({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  main: {
    margin: spacing(20, 0, 9, 0),
  },
  photographerCardContainer: {
    [breakpoints.up('md')]: {
      backgroundColor: palette.background.alternative,
      margin: spacing(0, 12.5),
    },
  },
}));

const PhotographerScreen = () => {
  const classes = useStyles();
  const { id } = useParams();

  const { isSuccess, data } = useGetPhotographer(id);

  return (
    <>
      <header className={classes.header}>
        <Banner />
      </header>
      <main className={classes.main}>
        {isSuccess && (
          <>
            <div className={classes.photographerCardContainer}>
              <PhotographerCardHorizontal
                photographer={data}
              />
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default PhotographerScreen;
