import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { makeStyles } from '@material-ui/core';

import { useMedias, usePhotographer } from 'sdk';

import Banner from 'Modules/banner';
import MediasCollection from 'Modules/medias';
import PhotographerCardHorizontal from '../components/PhotographerCardHorizontal';
import StatsSnackbar from '../components/StatsSnackbar';

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
  photographerCard: {
    margin: 'auto',
    [breakpoints.up('md')]: {
      maxWidth: 900,
      backgroundColor: palette.background.alternative.main,
    },
    [breakpoints.up('lg')]: {
      maxWidth: 1200,
    },
    [breakpoints.up('xl')]: {
      maxWidth: 1300,
    },
  },
  gallery: {
    padding: spacing(12.5, 0),
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
  } = usePhotographer(+id);
  const {
    isSuccess: isMediasRequestSuccess,
    data: medias,
  } = useMedias(+id, {
    onSuccess: (data) => {
      let counter = 0;

      data.forEach((media) => {
        counter += media.likes;
      });

      setLikes(counter);
    },
  });

  return (
    <>
      <header className={classes.header}>
        <Banner />
      </header>
      {isPhotographerRequestSuccess && (
        <>
          <Helmet>
            <title>{`${photographer.name} - ${process.env.REACT_APP_SITE_TITLE}`}</title>
          </Helmet>
          <main className={classes.main}>
            <section className={classes.photographerCard}>
              <PhotographerCardHorizontal photographer={photographer} />
            </section>
            {isMediasRequestSuccess && (
              <section className={classes.gallery}>
                <MediasCollection medias={medias} />
              </section>
            )}
          </main>
          <aside className={classes.statsSnackbarContainer}>
            <StatsSnackbar likes={likes} price={photographer.price} />
          </aside>
        </>
      )}
    </>
  );
};

export default PhotographerScreen;
