import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

import Banner from 'Modules/banner';
import { useGetPhotographer, useFindMedias, useLikesCount } from 'sdk';
import PhotographerCardHorizontal from '../components/PhotographerCardHorizontal';
import StatsSnackbar from '../components/StatsTip';
import WithTypeMediaCard from '../hoc/WithTypeMediaCard';

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
  mediasGrid: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    padding: spacing(12.5, 0),
    '& article': {
      margin: spacing(2),
    },
  },
}));

const PhotographerScreen = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [totalLikes, setTotalLikes] = useState();

  const {
    isSuccess: isPhotographerRequestSuccess,
    data: photographer,
  } = useGetPhotographer(id);
  const {
    isSuccess: isMediasRequestSuccess,
    data: medias,
  } = useFindMedias(id);
  const { data: likesCount } = useLikesCount(id);

  const handleChange = () => {
    setTotalLikes(totalLikes + 1);
  };

  useEffect(() => {
    setTotalLikes(likesCount);
  }, [likesCount]);

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
              <StatsSnackbar likesCount={totalLikes} price={photographer.price} />
            </div>
          </>
        )}
        <div className={classes.mediasGrid}>
          {isMediasRequestSuccess && (
            medias.map((media) => (
              <article key={media.id}>
                <WithTypeMediaCard
                  media={media}
                  onChange={handleChange}
                />
              </article>
            ))
          )}
        </div>
      </main>
    </>
  );
};

export default PhotographerScreen;
