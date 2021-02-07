import React from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

import Banner from 'Modules/banner';
import { useGetPhotographer, useFindMedias } from 'sdk';
import PhotographerCardHorizontal from '../components/PhotographerCardHorizontal';
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

  const {
    isSuccess: isPhotographerRequestSuccess,
    data: photographer,
  } = useGetPhotographer(id);
  const {
    isSuccess: isMediasRequestSuccess,
    data: medias,
  } = useFindMedias(id);

  return (
    <>
      <header className={classes.header}>
        <Banner />
      </header>
      <main className={classes.main}>
        {isPhotographerRequestSuccess && (
        <div className={classes.photographerCardContainer}>
          <PhotographerCardHorizontal
            photographer={photographer}
          />
        </div>
        )}
        <div className={classes.mediasGrid}>
          {isMediasRequestSuccess && (
            medias.map((media) => (
              <article key={media.id}>
                <WithTypeMediaCard
                  media={media}
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
