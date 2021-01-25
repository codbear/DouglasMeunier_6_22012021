import React from 'react';
import { makeStyles } from '@material-ui/core';

import Banner from '../../banner';
import PhotographerCard from '../../photographers';
import { photographersHelper, tagsHelper } from '../../../sdk/helpers';
import getQueryParams from '../../../services';

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
  const photographers = photographersHelper.list();
  const tags = tagsHelper.list();
  const queryParams = getQueryParams();

  return (
    <>
      <header className={classes.header}>
        <Banner tags={tags} activeTags={queryParams?.search} />
      </header>
      <main>
        <div className={classes.titleGrid}>
          <h1 className={classes.title}>Nos photographes</h1>
        </div>
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
