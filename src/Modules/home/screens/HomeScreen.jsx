import React from 'react';
import { Helmet } from 'react-helmet';

import { makeStyles, Typography } from '@material-ui/core';

import {
  usePhotographersWithTags,
  useTags,
} from 'sdk';

import Banner from 'Modules/banner';
import PhotographerCard from 'Modules/photographers';

import useQueryParams from '../hooks';

const useStyles = makeStyles(({ spacing, typography, breakpoints }) => ({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  titleGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: spacing(5, 1),
    alignItems: 'center',
    justifyItems: 'center',
    marginTop: spacing(5),
    [breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
    [breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 2fr 1fr',
    },
  },
  title: {
    gridColumn: 2,
    lineHeight: '50px',
    [breakpoints.up('md')]: {
      gridColumn: 3,
    },
    [breakpoints.down('sm')]: {
      ...typography.h6,
    },
  },
  photographers: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: spacing(7, 0),
    justifyItems: 'center',
    margin: spacing(15, 0, 3, 0),
    [breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
}));

const HomeScreen = () => {
  const classes = useStyles();
  const activeTags = useQueryParams().get('tags')?.split(' ') || [];

  const {
    isSuccess: isTagsListRequestSuccess,
    data: tagsList,
  } = useTags();

  const {
    isSuccess: isPhotographersRequestSuccess,
    photographers,
  } = usePhotographersWithTags(activeTags);

  return (
    <>
      <Helmet>
        <title>{`Nos photographes - ${process.env.REACT_APP_SITE_TITLE}`}</title>
      </Helmet>
      <header className={classes.header}>
        <Banner
          tags={isTagsListRequestSuccess ? tagsList : []}
        />
      </header>
      <main id="mainContent">
        <div className={classes.titleGrid}>
          <Typography component="h1" variant="h4" color="primary" className={classes.title}>
            Nos photographes
          </Typography>
        </div>
        {isPhotographersRequestSuccess && (
          <div className={classes.photographers}>
            {photographers.map((photographer) => (
              <PhotographerCard
                photographer={photographer}
                key={photographer.id}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default HomeScreen;
