import React from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

import Banner from 'Modules/banner';
import MediasCollection from 'Modules/medias';
import { useFindMedias, useGetPhotographer, useLikesCount } from 'sdk';
import PhotographerCardHorizontal from '../components/PhotographerCardHorizontal';
import StatsSnackbar from '../components/StatsTip';

const useStyles = makeStyles(({ palette, spacing, breakpoints }) => ({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  main: {
    marginTop: spacing(20),
  },
  photographerCardContainer: {
    [breakpoints.up('md')]: {
      backgroundColor: palette.background.alternative,
      margin: spacing(0, 12.5),
    },
  },
  statsSnackbarContainer: {
    display: 'none',
    [breakpoints.up('md')]: {
      display: 'block',
      position: 'fixed',
      bottom: 0,
      right: spacing(4.5),
      zIndex: 100,
    },
  },
}));

const PhotographerScreen = () => {
  const classes = useStyles();
  const { id } = useParams();

  const {
    isSuccess: isPhotographerRequestSuccess,
    data: photographer,
  } = useGetPhotographer(id);
  const {
    isSuccess: isMediasRequestSuccess,
    data: medias,
  } = useFindMedias(id);
  const { data: likesCount } = useLikesCount(id);

  return (
    <>
      <header className={classes.header}>
        <Banner />
      </header>
      <main className={classes.main}>
        {isPhotographerRequestSuccess && (
          <>
            <div className={classes.photographerCardContainer}>
              <PhotographerCardHorizontal
                photographer={photographer}
              />
            </div>
            <div className={classes.statsSnackbarContainer}>
              <StatsSnackbar likesCount={likesCount} price={photographer.price} />
            </div>
          </>
        )}
        {isMediasRequestSuccess && (
          <MediasCollection medias={medias} />
        )}
      </main>
    </>
  );
};

export default PhotographerScreen;
