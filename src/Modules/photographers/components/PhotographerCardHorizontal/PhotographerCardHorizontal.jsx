import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import TagsCloud from 'Modules/tags';

import PhotographerAvatar from '../PhotographerAvatar';
import PhotographerInfo from '../PhotographerInfo';
import photographerPropTypes from '../../prop-types/photographerPropTypes';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    columnGap: spacing(2),
    padding: spacing(6, 7),
    [breakpoints.up('md')]: {
      gridTemplateColumns: '2fr 1fr 1fr',
    },
    [breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
  infoContainer: {
    flexGrow: 2,
  },
  tagsCloudContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  contactCTAContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    [breakpoints.up('md')]: {
      position: 'relative',
      display: 'block',
    },
  },
  contactCTA: {
    margin: spacing(0, 'auto', 4, 'auto'),
    textTransform: 'none',
    fontWeight: 'bold',
    [breakpoints.up('md')]: {
      margin: 0,
      padding: '22px 11px',
    },
  },
  avatarContainer: {
    justifySelf: 'end',
  },
}));

const PhotographerCardHorizontal = ({
  photographer,
}) => {
  const classes = useStyles();
  const {
    name,
    city,
    country,
    tags,
    tagline,
    price,
    portrait,
  } = photographer;

  return (
    <aside className={classes.root}>
      <div className={classes.infoContainer}>
        <Typography
          variant="h2"
          component="h1"
          color="secondary"
        >
          { name }
        </Typography>
        <PhotographerInfo
          city={city}
          price={price}
          country={country}
          tagline={tagline}
          name={name}
          variant="horizontal"
        />
        <div className={classes.tagsCloudContainer}>
          <TagsCloud tags={tags} />
        </div>
      </div>
      <div className={classes.contactCTAContainer}>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.contactCTA}
        >
          Contactez-moi
        </Button>
      </div>
      <div className={classes.avatarContainer}>
        <PhotographerAvatar id={243} name={name} filename={portrait} />
      </div>
    </aside>
  );
};

PhotographerCardHorizontal.propTypes = photographerPropTypes;

export default PhotographerCardHorizontal;
