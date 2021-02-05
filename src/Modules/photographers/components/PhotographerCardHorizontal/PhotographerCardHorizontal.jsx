import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

import TagsCloud from 'Modules/tags';

import PhotographerAvatar from '../PhotographerAvatar';
import PhotographerInfo from '../PhotographerInfo';
import photographerPropTypes from '../../prop-types/photographerPropTypes';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    backgroundColor: palette.background.alternative,
    padding: spacing(6, 7),
  },
  infoContainer: {
    flexGrow: 2,
  },
  tagsCloudContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
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
      <PhotographerAvatar id={243} name={name} filename={portrait} />
    </aside>
  );
};

PhotographerCardHorizontal.propTypes = photographerPropTypes;

export default PhotographerCardHorizontal;
