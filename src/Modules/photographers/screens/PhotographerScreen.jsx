import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

import Banner from 'Modules/banner';
import MediasCollection from 'Modules/medias';
import { useMedias, usePhotographer } from 'sdk';
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
  const [likes, setLikes] = useState(0);

  const {
    isSuccess: isPhotographerRequestSuccess,
    data: photographer,
  } = usePhotographer(id);
  const {
    isSuccess: isMediasRequestSuccess,
    data: medias,
  } = useMedias(id);

  useEffect(() => {
    if (isMediasRequestSuccess) {
      let counter = 0;
      medias.forEach((media) => {
        counter += media.likes;
      });
      setLikes(counter);
    }
  }, [isMediasRequestSuccess, medias, setLikes]);

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
            {isMediasRequestSuccess && (
              <div className={classes.statsSnackbarContainer}>
                <StatsSnackbar likes={likes} price={photographer.price} />
              </div>
            )}
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
