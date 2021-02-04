import React from 'react';

import { makeStyles } from '@material-ui/core';

import {
  useFindPhotographersWithTags,
  useFindTags,
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
    ...typography.h4,
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
    marginTop: spacing(15),
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
  } = useFindTags();

  const {
    isSuccess: isPhotographersRequestSuccess,
    photographers,
  } = useFindPhotographersWithTags(activeTags);

  return (
    <>
      <header className={classes.header}>
        <Banner
          tags={isTagsListRequestSuccess ? tagsList : []}
        />
      </header>
      <main>
        <div className={classes.titleGrid}>
          <h1 className={classes.title}>Nos photographes</h1>
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
